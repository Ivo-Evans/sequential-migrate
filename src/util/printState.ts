import { InferredState } from "../types";

const printState = (inferredState: InferredState) => {
  if (!inferredState.length) {
    console.log("No migrations recorded");
    return;
  }

  console.table(inferredState);
};

export default printState;
