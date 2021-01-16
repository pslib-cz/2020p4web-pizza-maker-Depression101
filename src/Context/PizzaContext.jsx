import React,{ createContext, useState } from "react";

export const PizzaContext = createContext();
// export const maxIngredients = createContext(4);

export const PizzaProvider = ({children}) => {
    const [ingredients,setIngredients] = useState([
        {
            name:'ham',
            category:'meat'
        },
        {
            name:'mozarella',
            category:'cheese'
        }
    ]);
    return (
        <PizzaContext.Provider value={[ingredients,setIngredients]}>
            {children}
        </PizzaContext.Provider>);
}