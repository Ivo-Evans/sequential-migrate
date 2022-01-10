import { EXIT_MESSAGE } from "../types/exitMessage.types";

const exitHappyPath = () => {
  console.log(EXIT_MESSAGE.OK);
  process.exit(0);
}

export default exitHappyPath