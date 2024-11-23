const mergeWalks = (state, payload) => {
  const { language } = payload
  const remoteWalks = [...state.fetchWalks.walks]
  const localWalks = state.localWalks[language]

  const localIdentifiers = localWalks
    ? Object.keys(state.localWalks[language])
    : []
  const remoteIdentifiers = remoteWalks.map(walk => walk.data.id)
  localIdentifiers.map(identifier => {
    const remoteIndex = remoteIdentifiers.indexOf(identifier)
    remoteWalks[remoteIndex] = { ...localWalks[identifier] }
  })

  return remoteWalks
}

export { mergeWalks }
