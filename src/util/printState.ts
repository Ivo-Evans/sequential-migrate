import { Table } from "console-table-printer";
import { FormattedState, MIGRATION_STATUS } from "../types";

const STATUS_COLOUR = {
  [MIGRATION_STATUS.PENDING]: "yellow",
  [MIGRATION_STATUS.RAN]: "green",
  [MIGRATION_STATUS.MISSING]: "red",
  [MIGRATION_STATUS.SKIPPED]: "red",
};

const printState = (formattedState: FormattedState) => {
  if (!formattedState.length) {
    console.log("No migrations recorded");
    return;
  }
  const table = new Table();

  formattedState.forEach((stateEntry) => {
    table.addRow(stateEntry, { color: STATUS_COLOUR[stateEntry.status] });
  });

  table.printTable();
};

export default printState;
