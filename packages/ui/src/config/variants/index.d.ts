import {GenericStackVariants, GenericTextVariants, VariantSpreadExtras, stylePropsAll} from 'tamagui';

interface ExtraStyleVariants {
    [index: string]: {
        true?: {
            color?: string;
            fontWeight?: string;
            fontStyle?: string;
            textDecorationLine?: string;
            fontSize?: string;
            textAlign?: string;
        }
    },
}

type VariantGroupType = GenericStackVariants & GenericTextVariants | ExtraStyleVariants;