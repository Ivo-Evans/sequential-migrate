/* A state item must conform to the StateItem interface - see docs */

const get = async () => {
  const stateItems = [] // perform your own logic to get state
  return stateItems
}

const set = async (stateItem) => {
  const existingStateItems = await get()
  // perform your own logic to set state items, and then insert the entire State
}

module.exports = { get, set }
