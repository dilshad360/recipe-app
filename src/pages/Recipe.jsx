import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

function Recipe() {

  const [recipeInfo, setRecipeInfo] = useState([])
  const [activeTab, setActiveTab] = useState("instructions")
  const params = useParams();

  const getRecipeInfo = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailsData = await data.json();
    setRecipeInfo(detailsData)
    console.log(detailsData)
  }

  useEffect(() => {
    getRecipeInfo(params.name)
  }, [params.name])

  return (
    <DetailWrapper>
      <div>
        <h2>{recipeInfo.title}</h2>
        <img src={recipeInfo.image} alt="" />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
        {activeTab === 'instructions' && (
          <div>
          <h5 dangerouslySetInnerHTML={{ __html: recipeInfo.summary}}></h5>
          <h5 dangerouslySetInnerHTML={{ __html: recipeInfo.instructions}}></h5>
        </div>
        )}
        {activeTab === 'ingredients' && (
        <ul>
          {recipeInfo.extendedIngredients?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        )}

      </Info>
    </DetailWrapper>

  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin: 2rem;

  }
  img{
    max-width: 450px;
  }
  h5{
    padding-top: 1rem;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 2rem;
`;

export default Recipe;