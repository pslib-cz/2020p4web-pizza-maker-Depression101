import { Fragment, useContext, useState } from "react";
import { Button, Form, Input, Label } from "reactstrap";
import { PizzaContext, PizzaProvider } from "../Context/PizzaContext";
import Ingredient from "./Ingredient";

const Ingredients = () => {
    const [ingredients,setIngredients] = useContext(PizzaContext);
    const [categoryInput,setCategoryInput] = useState("");
    const [nameInput,setNameInput] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIngredients(prevIngredients => [...prevIngredients, {name:nameInput, category:categoryInput}]);
     }
    function PrintValues()
    {
        if(ingredients !== undefined)
        {
            return(ingredients.map((ing,index) => <Fragment key={index}><Ingredient name={ing.name} category={ing.category}></Ingredient></Fragment>))
        }
        else{
            return <></>
        }
    }
    return(
        <>
        <PizzaProvider>
        <PrintValues></PrintValues>
        <Form name="inputForm" onSubmit={handleSubmit}>
            <Label htmlFor="namedInput">
                Name: 
            </Label>
            <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                <Input style={{width:'50%'  }} id="namedInput" onChange={e => setNameInput(e.target.value)}></Input>
            </div>
            <Label htmlFor="categoryInput">
                Category: 
            </Label>
            <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                <Input style={{width:'50%'}} id="categoryInput" onChange={e => setCategoryInput(e.target.value)}></Input>
            </div>
            
            <Button type="submit" onClick={() => console.log(ingredients)}>Add ingredient</Button>
        </Form>
        </PizzaProvider>
        </>
    )
}
export default Ingredients;