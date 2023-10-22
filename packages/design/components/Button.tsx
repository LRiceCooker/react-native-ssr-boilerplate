import {Button as TamaButton} from 'tamagui'

import { useLaryVariants } from "@my/ui";

export const Button = ({children} : {children: string}) => {
    const CustomButton = useLaryVariants<typeof TamaButton>(TamaButton);
    return (
        <CustomButton bgDanger inWhite textBold r8 pressStyle={{opacity: 0.5}} userSelect='none'>
            {children}
        </CustomButton>
    )
}