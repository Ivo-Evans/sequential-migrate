import { RecordedState, InferredState } from "../types";
declare const inferState: (migrationNames: string[], state: RecordedState) => InferredState;
export default inferState;
