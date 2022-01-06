/* A state item must conform to the StateItem interface - see docs */

// this function shows state to the sequential-migrate cli
const get = async () => {
  const state = [] 
  return state
}

// this function receives the new state from the sequential-migrate cli for you to save wherever you like
const set = async (state) => {
  return null
}

module.exports = { get, set }
