import React,{createContext,useContext,useState} from "react";



const StateContext= createContext();

const intitialState = {
    chat : false,
    cart : false,
    userProfile:false,
    notification:false
} 

export const ContextProvider =({children})=> {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(intitialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#808080')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)
    const [windowWidth , setWindowWidth] = useState( window.innerWidth);
    const [iniwindowWidth, setIniwindowWidth] = useState('100%');
    const setMode =(e) => {

        setCurrentMode(e.target.value)
        localStorage.setItem('themeMode' , e.target.value)
        setThemeSettings(false)
    }

    const setColor =(mode) => {

        setCurrentColor(mode)
        localStorage.setItem('colorMode' , mode)
        setThemeSettings(false)

    }

    const handleClick = (clicked) => {

        setIsClicked ({...intitialState , [clicked] : true })
    }

    const chickSize= () =>{
        setWindowWidth( window.innerWidth)
    }

    const SideMenuClose = () => {
        if(windowWidth>914)
        setIniwindowWidth('80%')
        else
        setIniwindowWidth('60%')

    }

    return(
        
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,
            setCurrentColor,
            currentMode,
            setCurrentMode,
            setColor,
            setMode,
            themeSettings,
            setThemeSettings,
            chickSize,
            windowWidth,
            iniwindowWidth,
            SideMenuClose

        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext= () => useContext(StateContext);