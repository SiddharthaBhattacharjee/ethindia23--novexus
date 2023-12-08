import { createContext } from "react";
import { Toaster, toast } from "react-hot-toast";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    return (
        <GlobalContext.Provider value={{toast}}>
            <div className="text-white">
                {children}
                <Toaster />
            </div>
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalContextProvider };