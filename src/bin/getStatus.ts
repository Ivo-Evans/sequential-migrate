import printState from "../util/printState"
import getFormattedState from "../util/getFormattedState"


const getStatus = async () => {
  const formattedState = await getFormattedState()
  printState(formattedState)
}

export default getStatus