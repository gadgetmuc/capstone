import React from 'react';
import ArticleSelectorFlex from './ArticleSelector';

export default function CategoryVegetables ({articles, amounts, shoppingListIdState}) {
    
    
    const vegetables = articles.filter((article) => article.articlecategory === "0");

    const itemsInShoppingList = amounts.filter((item) => item.shoppinglistid === shoppingListIdState);

    console.log(itemsInShoppingList);

    const vegetablesAmountsArray = [];
    // .map((vegetable) => {
    //     if (amounts.shoppinglistid === {shoppingListId}) {
    //     } 
    // });
    

        return (
            <div>
                {vegetables.map((vegetable) =>
                    <ArticleSelectorFlex 
                        key={vegetable.id}
                        description={vegetable.articledescription}
                        amount = {amounts.amount}>
                </ArticleSelectorFlex>)}
            </div>
        )

}

