import React, {createContext , useReducer} from 'react';
import AppRender from './AppRender';

const initialState = {
    transaction: []
}
// Create context
export const GlobalContext = createContext(initialState);

//Provider compoent 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppRender, initialState);

    //action
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
   
    //action
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return ( <GlobalContext.Provider value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}