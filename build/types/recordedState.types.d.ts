/**
 * An item saved and returned by the {@link stateInterface}
 */
export interface RecordedStateItem {
    /** Taken from {@link MigrationScript.name} */
    name: string;
    /** Taken from {@link MigrationScript.desription} */
    description: string;
    /** The JavaScript time at which the migration was run, e.g. `1641818951354` */
    runAt: number | null;
}
export declare type RecordedState = RecordedStateItem[];
