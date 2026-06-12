
import {createContext, useContext, useState} from 'react';

export const ColorContext = createContext()

export const ColorProvider = ({children}) => {
    const [color, setColor] = useState('blue');
    return (
        <ColorContext.Provider value={{color, setColor}}>
            {children}
        </ColorContext.Provider>
    )
}

export const useColor = () => {
    const {color, setColor} = useContext(ColorContext)
    return {color, setColor}
}
