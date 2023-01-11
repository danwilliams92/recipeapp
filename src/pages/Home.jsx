
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from 'react'
import styled from "styled-components";

function Home() {
  return (
    <motion.div  
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}>
      <CardWrapper>
        <Card>
          <Link to={'/DishType/MainCourses'}>
            <img src="../../images/pork.jpg" alt="mainCourses" />
          <h4>Main Courses</h4></Link>
        </Card>
        <Card>
          <Link to={'/VegetarianRecipes'}>
            <img src="../../images/veggie.jpg" alt="vegetarian recipe card" />
          <h4>Vegetarian Recipes</h4></Link>
        </Card>
        <Card>
          <Link to={'/DishType/Desserts'}>
            <img src="../../images/shortcake.jpg" alt="desserts" />
            <h4>Desserts</h4>
          </Link>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <Card>
          <Link to={'/DishType/Appetisers'}>
            <img src="../../images/appetiser.jpg" alt="prawn appetiser recipe" />
            <h4>Appetisers</h4>
          </Link>
        </Card>
        <Card>
          <Link to={'/DishType/Drinks'}>
            <img src="../../images/drinks.jpg" alt="glass of pear cocktail" />
            <h4>Drinks</h4>
          </Link>
        </Card>
      </CardWrapper>
    </motion.div>
  )
}


const Card = styled.div`
    height: 22rem;
    width: 18rem;
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
        cursor:pointer;
      }
      `;

      const CardWrapper = styled.div`
      display:flex;
      flex-direction: row;
      align-items:center;
      justify-content:space-evenly;
      text-align:center;
      `;
export default Home