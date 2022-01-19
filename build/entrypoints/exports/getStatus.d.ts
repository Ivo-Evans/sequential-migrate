declare const getStatus: () => Promise<{
    state: import("../../types").InferredState;
    containsMissing: boolean;
    containsSkipped: boolean;
}>;
export default getStatus;
