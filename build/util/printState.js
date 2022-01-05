"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_table_printer_1 = require("console-table-printer");
const types_1 = require("../types");
const STATUS_COLOUR = {
    [types_1.MIGRATION_STATUS.PENDING]: 'yellow',
    [types_1.MIGRATION_STATUS.RAN]: 'green',
    [types_1.MIGRATION_STATUS.MISSING]: 'red',
    [types_1.MIGRATION_STATUS.SKIPPED]: 'red',
};
const printState = (formattedState) => {
    const table = new console_table_printer_1.Table();
    formattedState.forEach((stateEntry) => {
        table.addRow(stateEntry, { color: STATUS_COLOUR[stateEntry.status] });
    });
    table.printTable();
};
exports.default = printState;
