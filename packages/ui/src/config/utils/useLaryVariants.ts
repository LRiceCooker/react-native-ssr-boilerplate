import React from "react";
import { styled, TamaguiComponent, Text } from "tamagui";
import laryDefaultVariants from '../laryVariants';



export function useLaryVariants<C>(PassedComponent: React.FC<React.ComponentPropsWithRef<any>>){
    type CConstraint = C & keyof JSX.IntrinsicElements
    const LaryComponent = styled(PassedComponent as unknown as TamaguiComponent, laryDefaultVariants)
    return LaryComponent as React.FC<React.ComponentProps<typeof LaryComponent> & React.ComponentProps<CConstraint>>
}