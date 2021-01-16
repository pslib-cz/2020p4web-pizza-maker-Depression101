import { Fragment, useContext, useEffect, useState } from "react";
import Ingredient from "./Ingredient";
import {PizzaContext} from '../Context/PizzaContext'
import { Input,Button, Form  } from "reactstrap";

const Order = (props) => {
    console.log(props.title);
    const [ingredients,setIngredients] = useState([]);
    const [values,setValues] = useContext(PizzaContext);
    
    useEffect(() => document.title = props.title);
    return(
        <>
        {/* ingredients.push({name:value.name,category:value.category}) */}
        <h1>{document.title}</h1>
        {/* <WriteIngredients values={ingredients} setValues={setSelectedIngredients} ingredients={ingredients}/> */}
        {<WriteIngredients values={values} setValues={setValues} ingredients={ingredients} setIngredients={setIngredients}></WriteIngredients>
        }
        </>
    )
}
function WriteIngredients(props)
{
    if(props.values != null)
    {
        return (
            <>
            <Form onSubmit={(e) => handleSubmit(e,props)}>
            {/* <ReturnIngredients ingredients={props.ingredients} values={props.values}></ReturnIngredients> */}
            {props.values.map((value, index) => 
            <Fragment key={index}>
                <div style={{marginBottom:40}}>
                <Ingredient name={value.name} category = {value.category}></Ingredient>
                <Input id={value.name} type='checkbox'/>
                </div>
            </Fragment>
            )}
            {/* <Input onClick={(e) => console.log(e.target.value)} type='radio' name="ham"/> */}
            <div style={{marginTop:20}}><Button>Objednej</Button></div>
            </Form>
            </>
        )
    }
    else{
        return(<></>)
    }
}
function handleSubmit(e, props){
    e.preventDefault();
    if(props.values !== undefined)
    {
        props.values.map((x) => {
            if(document.getElementById(x.name)!== null)
            {
                if(document.getElementById(x.name).checked === true)
                {
                    if(!(props.ingredients.some(y => y.name === x.name && y.category === x.category)))
                    {
                        props.setIngredients(prevIngredients => [...prevIngredients, {name:x.name, category:x.category}]);
                    }
                }
            }
        })
    }
    let alertValues = '';
    props.ingredients.map((x) => alertValues += (x.name + ','));
    alertValues = alertValues.substring(0,alertValues.length-1);
    console.log(alertValues);
    alert('Your ' + document.title + ' ingredients: ' + alertValues)
}
export default Order;