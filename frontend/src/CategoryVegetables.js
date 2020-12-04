import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';


export default function CategoryVegetables ({articles}) {

    console.log("das ist ein console.log");

    // const hardCodedVegetableArticlesArray = [{vegetable : "potatoes", amount : 1}, {vegetable : "carrots", amount : 0}, {vegetable : "cucumbers", amount : 2}, {vegetable : "tomatoes", amount : 3}];

    // const hardCodedVegetableArticles = hardCodedVegetableArticlesArray.reduce((acc, cur) => ({...acc, [cur.vegetable] : cur.amount}));

    // console.log(hardCodedVegetableArticles)

    const vegetables = articles.filter((article) => article.articlecategory === "vegetables");
    console.log(vegetables);

    

    return (
        <div>
            {vegetables.map(vegetable => <ArticleSelector key={vegetable.articleId}>{vegetable.articledescription}</ArticleSelector>)}
        </div>
    )
}

const ArticleSelector = styled.div`
    height: 10vw;
    width: 70hw;
    background-color: hotpink;
`