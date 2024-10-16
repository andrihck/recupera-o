import { createContext, useState } from "react";

export const AppContext = createContext()
export const AppProvider = ({ children }) => {
    const [cidade, setCidade] = useState('')
    // neste arquivo há um erro proposital, que fará com que o context não funcione. Identifique este erro e corrija, com base nos exercícios feitos em sala

    return (
        <AppContext.Provider value={}>
            {children}
        </AppContext.Provider>
    )
}