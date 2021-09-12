import fs from 'fs'
import { ncp } from 'ncp'
import matter from 'gray-matter'

async function main() {
  await new Promise((resolve, reject) => ncp('./static', './api', err => err ? reject(err) : resolve()))

  const Index = (await import('../static/index.md')).default
  for (let { languageCode } of Index.data.languages) {
    const Language = (await import(`static/texts/${languageCode}.md`)).default
    Language.data.medias = await Promise.all(
      Language.data.medias.map(async (media, index) => 
        (await import(`static/texts/medias/${media}.md`)).default
      )
    )
    Language.data.medias = await Promise.all(
      Language.data.medias.map(async media => {
        if (typeof media.data.srcUri == 'string') {
          return media
        } else {
          const srcUri = await Promise.all(
            media.data.srcUri.map(async walkId =>
              (await import(`static/texts/medias/${walkId}.md`)).default
            )
          )
          return {
            content: media.content,
            data: {
              ...media.data,
              srcUri
            }
          }
        }
      })
    )
    await fs.promises.writeFile(`./api/texts/${languageCode}.md`, matter.stringify(Language))
  }

  const Calendar = (await import('../static/news_index.md')).default
  Calendar.data.news = await Promise.all(
    Calendar.data.news.map(async newsId =>
      (await import(`static/news/${newsId}.md`)).default
    )
  )
  await fs.promises.writeFile('./api/news_index.md', matter.stringify(Calendar))
}

(async () => {
  try {
    await main()
    console.log('Compiled API')
  } catch (e) {
    console.error(e)
  }
})()
