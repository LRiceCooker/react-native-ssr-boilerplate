import {Button as TamaButton} from 'tamagui'

import { useLaryVariants } from "@my/ui";
import { useCountReducer } from '@my/app/states';

export const Button = ({children} : {children: string}) => {
    const CustomButton = useLaryVariants<typeof TamaButton>(TamaButton);
    const [count, dispatch] = useCountReducer();
    return (
        <CustomButton bgDanger inWhite textBold r8 pressStyle={{opacity: 0.5}} userSelect='none' onPress={() => dispatch({type: 'increment'})}>
            {`${children} ${count.count}`}
        </CustomButton>
    )
}