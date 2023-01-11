import { useEffect, useState } from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

function Desserts() {
    const [desserts, setDesserts] = useState([]);
    useEffect(() => {
    getDesserts();
    },[]);
    
        const getDesserts = async () => {
            const check = localStorage.getItem('desserts');
            if(check){
                setDesserts(JSON.parse(check));
            } else {
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=18&tags=dessert&addRecipeNutrition=true`);
                const data = await api.json();
                localStorage.setItem('desserts', JSON.stringify(data.recipes));
        setDesserts(data.recipes)  
    console.log(data.recipes)  };
            }
  return (
    <PageWrapper>
                <h3>Dessert Recipes</h3>

    <CardWrapper>
        
        {desserts.map(recipe => {
            return(
                <Card>
                    <Link to={"/recipe/"+recipe.id}>
                    <img src={recipe.image} alt={recipe.title} />
                    <p>{recipe.title}</p>

                    </Link>

                </Card>
            );
        })}
    </CardWrapper>
    </PageWrapper>


  )
}

const CardWrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    gap:0.75rem;
`;

const PageWrapper = styled.div`
    h3{
        text-align:center;
    }
`;

const Card = styled.div`
box-sizing:border-box;
    min-height: 25rem;
    overflow: hidden;
    border-radius: 2rem;
    position: relative;
display:flex;
flex-direction:column;
    img{
        border-radius: 2rem;
       
        width: 100%;
        object-fit: cover;
        box-sizing:border-box;
    }
    p{
        margin-vertical: 0.5rem;

        color: black;
        width: 100%;
        text-align:center;
        font-weight: 600;
        font-size: 1rem;
      
    }

  

    :hover{
        transform:scale(1.025);
        transition: ease-in-out 0.5s;
      }

`;

export default Desserts;