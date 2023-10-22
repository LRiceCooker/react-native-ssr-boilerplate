import colorVariants from "./variants/colorVariants"
import layoutVariants from "./variants/layoutVariants"
import positionVariants from "./variants/positionVariants"
import shapeVariants from "./variants/shapeVariants"
import spacingVariants from "./variants/spacingVariants"
import typographyVariants from "./variants/typographyVariants"

const laryVariants = {
    variants: {
        ...colorVariants,
        ...layoutVariants,
        ...positionVariants,
        ...shapeVariants,
        ...spacingVariants,
        ...typographyVariants
    }
}

export default laryVariants