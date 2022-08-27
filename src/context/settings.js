import React, { useState }  from "react";

export const SettingsContext = React.createContext();

export default function Settings(props){
const [displaySettings,setDisplaySettings] = useState(true);

const [numberItems,setNumberItems] = useState(6);

const [sortBy,setSortBy] = useState("difficulty");

const state = {
    displaySettings,
    setDisplaySettings,
    numberItems,
    setNumberItems,
    sortBy,
    setSortBy,
}

return (
    <SettingsContext.Provider value={state}>
        {props.children}
    </SettingsContext.Provider>
)

}
