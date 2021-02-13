import React,{useContext,useState} from 'react';

const ThemeContext = React.createContext();
const ThemeContextUpdate = React.createContext();
export function useTheme (){
    return useContext(ThemeContext);
}

export function ThemeProvider ({children}){
    const [secondaryTheme,SetSecondaryTheme] = useState(true);
    function toggleTheme(){
        SetSecondaryTheme(!secondaryTheme)
    }
    return (
        <ThemeContext.Provider value={[secondaryTheme,toggleTheme]}>
            
                {children}
           
        </ThemeContext.Provider>
    )
}