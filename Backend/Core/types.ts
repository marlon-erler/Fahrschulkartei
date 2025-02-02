export enum ButtonStyles {
    Standard = "standard",
    Primary = "primary",
    Destructive = "danger",
}

export enum SelectTypes {
    PricingCharts
}
export interface TranslationData {
    translation: string;
    converter: (data: string) => string;
    isDisabled?: boolean;

    inputType?: string;
    selectType?: SelectTypes;
}
export type TranslationDataMap<T extends string> = Record<T, TranslationData>;
