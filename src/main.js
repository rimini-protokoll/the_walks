import fs from 'fs'
import { ncp } from 'ncp'
import { stringify } from 'gray-matter'

function resolve(identifiers, collectionPath) {
  return identifiers.map(identifier => 
    require(`static/${collectionPath}/${identifier}.md`).default
  )
}

function main() {
  ncp('./static', './api', err => {
    if (err) {
      throw err
    } else {
      const Index = require('static/index.md').default
      for (let { languageCode } of Index.data.languages) {
        const Language = require(`static/texts/${languageCode}.md`).default
        Language.data.medias = resolve(Language.data.medias, 'texts/medias')
        Language.data.medias = Language.data.medias.map(media => {
          if (typeof media.data.srcUri == 'string') {
            return media
          } else {
            const srcUri = resolve(media.data.srcUri, 'texts/medias')
            return {
              content: media.content,
              data: {
                ...media.data,
                srcUri
              }
            }
          }
        })
        fs.writeFileSync(`./api/texts/${languageCode}.md`, stringify(Language))
      }

      const Calendar = require('static/news_index.md').default
      Calendar.data.news = resolve(Calendar.data.news, 'news')
      fs.writeFileSync('./api/news_index.md', stringify(Calendar))
    }
  })
}

main()
console.log('Compiled API')
