/* A state item must conform to the StateItem interface - see docs */

// this function shows state to the sequential-migrate cli
const get = async () => {
  const state = [] 
  return state
}

// this function receives a new migration from the sequential-migrate cli for you to save wherever you like
const add = async (stateItem) => {
  return null;
}

// this function receives a rolled-back migration from the sequential-migrate cli to be deleted from your state store.
const remove = async (stateItem) => {
  return null;
}



module.exports = { get, set, remove }
