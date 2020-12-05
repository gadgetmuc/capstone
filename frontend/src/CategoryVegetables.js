import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

export default function CategoryVegetables ({articles}) {

    const vegetables = articles.filter((article) => article.articlecategory === "0");

    return (
        <div>
            {vegetables.map(vegetable => <ArticleSelector key={vegetable.id}>{vegetable.articledescription}</ArticleSelector>)}
        </div>
    )
}

const ArticleSelector = styled.div`
    height: 10vw;
    width: 70hw;
    /* color: #111; */
    margin-bottom: 3px;
    border-radius: 5px;
    background-image: linear-gradient(ivory, papayawhip);
`