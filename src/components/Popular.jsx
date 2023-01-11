import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Popular() {
    const [popular, setPopular] = useState([]);
useEffect(() => {
getPopular();
},[]);

    const getPopular = async () => {
        const check = localStorage.getItem('popular');
        if(check){
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20`);  
            const data = await api.json();
            localStorage.setItem("popular", JSON.stringify(data.recipes));
    setPopular(data.recipes)    };
        }
      
  return (
                <PageWrapper>
                    <h3>Popular Picks</h3>
                    <CardWrapper>
                    {popular.map(recipe => {
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
        margin-top: 0.5rem;
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


export default Popular;