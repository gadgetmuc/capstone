import React from 'react';
import ArticleSelectorFlex from './ArticleSelector';


export default function CategoryVegetables ({articles, shoppingListIdState, amounts, category}) {
    
    const vegetables = articles.filter((article) => article.articlecategory === "0"); // this hardcoded and may need to be changed in a future iteration

    const randomAmount = 0; // Math.floor(Math.random() * 4);
    
    return (
        <div>
            {vegetables.map((item) =>
                <ArticleSelectorFlex 
                    key={item.id}
                    description={item.articledescription}
                    amount={randomAmount}>
            </ArticleSelectorFlex>)}
        </div>
    )

}

