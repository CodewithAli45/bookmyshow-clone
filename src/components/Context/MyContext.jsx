import React, { createContext, useReducer } from 'react';

export const Contextdetails = createContext();
export const MyContext = (props) => {

    const reducer = (state, aciton) => {
        switch(aciton.type) {
            case 'ADD' :
                const testAdd = state.filter((movie) => (aciton.payload.id === movie.id));
                if(testAdd.length > 0){
                    return state;
                } else {
                    return [...state, aciton.payload];
                }

            case 'REMOVE' :
                const testRemove = state.filter((movie) => (movie.id !== aciton.payload.id));
                return testRemove;
            default :
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, []);

    const info = {state, dispatch};

    return (
        <Contextdetails.Provider value={info}>
            {props.children}
        </Contextdetails.Provider>
    );
}
