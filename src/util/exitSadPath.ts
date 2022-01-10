import { EXIT_MESSAGE } from "../types/exitMessage.types";

const exitSadPath = () => {
  console.error(EXIT_MESSAGE.ABORT);
  process.exit(1);
}

export default exitSadPath