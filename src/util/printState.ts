import { FormattedState } from "../types";

const printState = (formattedState: FormattedState) => {
  if (!formattedState.length) {
    console.log("No migrations recorded");
    return;
  }

  console.table(formattedState);
};

export default printState;
