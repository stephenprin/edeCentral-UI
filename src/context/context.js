import React, { useContext, useReducer } from 'react'
import reducer from './reducer';




const initialState = {
    isLoading: true,
//     showAlert: false,
//     alertText: '',
//    alertType: '',
      user: null,
//   token: null,
//   userLocation: '',
//   jobLocation: '',
}

const appContext = React.createContext()

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)



    return <appContext.Provider value={{...state}}>
            {children}
    </appContext.Provider>
}

// step up a custom hook to use the context
const useAppContext = () => {
    const context = useContext(appContext);
    if (context === "undefined") {
      throw new Error("useAppContext must be used within the auth provider");
    }
    return context;
  };

export{AppProvider,initialState, useAppContext}