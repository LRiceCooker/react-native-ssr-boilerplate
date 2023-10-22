import { createTokens } from "tamagui";
import { color } from './colors'
import { layout } from "./layout";
import { position } from "./position";
import { shape } from "./shape";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { tokens as tamaTokens } from "@tamagui/themes";

const tokens = createTokens({
    ...tamaTokens,
    layout,
    position,
    spacing,
    shape,
    typography,
    color
})

export default tokens