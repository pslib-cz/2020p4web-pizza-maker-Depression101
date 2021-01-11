import { useState } from "react";
import Ingredient from "./Ingredient";

const Ingredients = (props) => {
    const [categoryInput,setCategoryInput] = useState("");
    const [nameInput,setNameInput] = useState("");
    function handleSubmit (){
        var value = {name:nameInput, category:categoryInput};
        props.setValues([...props.values,value]);
    }
    return(
        <>
        {
            props.values.map((ing) => <Ingredient name={ing.name} category={ing.category}></Ingredient>)
        }
        <form onSubmit={handleSubmit}>
            <label>
                <input onChange={e => setNameInput(e.target.value)}></input>
            </label>
            <label>
                <input onChange={(e) => setCategoryInput(e.target.value)}></input>
            </label>
            <input type="submit" value="submit"/>
        </form>
        </>
    )
}
export default Ingredients;