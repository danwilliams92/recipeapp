import React from 'react'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
function Recipe() {
    let params = useParams();
const [details, setDetails] = useState({});
const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    };



    useEffect(() => {
        fetchDetails();
    }, [params.name]);
  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <h4>By {details.creditsText}</h4>
            <img src={details.image} alt="" />
            <h3>Time to cook: {details.readyInMinutes} mins</h3>
            <h4>Servings: {details.servings}</h4>
        </div>
        
        <div>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
        {activeTab === 'instructions' && (
        <DetailsSection>
        <h4 dangerouslySetInnerHTML={{__html: details.summary}}></h4>
        <h2>Steps:</h2>
        <h4 dangerouslySetInnerHTML={{__html: details.instructions}}></h4>
    </DetailsSection>
        )}
{activeTab === 'ingredients' && (
    <ul>
            {details.extendedIngredients.map((ingredient) => {
                return(
                <li key={ingredient.id}>{ingredient.original}</li>
                )
            })}
        </ul>
)}
        
        </div>
    </DetailWrapper>
  )
}

const DetailsSection = styled.div`
    margin-top: 2rem;
    line-height: 2rem;

    h4{
        padding: 0.75rem;
    }
`;

const DetailWrapper = styled.div`
    margin-top: 2rem;
    margin-bottom: 5rem;
    display:flex;
flex-direction:column;
align-items:center;
text-align:center;

    h2{
        margin-bottom:2rem;
    }
    .active{
        background:linear-gradient(35deg, #494949, #313131);
        color:white;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    margin-top: 1rem;
    font-weight: 600;

    :hover{
        cursor:pointer;
    }
`;


export default Recipe