export function receivedEntries(data, state) {
  return { type: 'RECEIVED_ENTRIES',
    entries: {
      hidden: require('../fixtures/epictetus.json'),
      rendered: state.entries.rendered,
      current: state.entries.current
    },
    entryFetchCounter: state.entryFetchCounter
  }
}
