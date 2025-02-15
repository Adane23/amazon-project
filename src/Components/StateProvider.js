import React,{createContext, useContext, useReducer} from 'react';

//Prepares the datalayer
export const StateContext = createContext();

//Wrap our app and provide the data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//push and pull infrmation from the data layer
export const useStateValue = () => useContext(StateContext);