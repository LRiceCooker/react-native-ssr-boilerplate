import React from 'react'
import {Provider} from 'jotai'

const MainProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <Provider>
            {children}
        </Provider>
    )
}

export default MainProvider