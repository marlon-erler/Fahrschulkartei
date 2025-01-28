export enum ButtonStyles {
    Standard = "standard",
    Primary = "primary",
    Destructive = "danger",
}

export type EntryDataMap<T extends string> = Record<T, [string, string, (data: string) => string, boolean?]>;
