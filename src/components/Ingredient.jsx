import { useState } from "react";

const Ingredient = (props) => {
    return(
        <>
        <h1>{props.name}</h1>
        <h1>{props.category}</h1>
        </>
    )
}
export default Ingredient;