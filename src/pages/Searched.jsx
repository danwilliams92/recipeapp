import React from 'react'
import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';


function Searched() {
let params = useParams();
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
}

useEffect(() => {
  getSearched(params.search);
},[params.search]);
if(searchedRecipes.length < 1){
  return(
    <div><h2>Oops! No results found for this search, please try something else!</h2></div>
  )
}
  return (
    <Grid>
      
      {searchedRecipes.map((item) => {
        return(
          <Card key={item.id}>
            <Link to={"/recipe/"+item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;

    }
   
    h4{
        text-align: center;
        padding: 1rem;
    }

    :hover{
      transform:scale(1.025);
      transition: ease-in-out 0.5s;
    }

   
`;

export default Searched