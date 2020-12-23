import React from 'react';
import ArticleSelectorFlex from './ArticleSelector';

export default function CategoryVegetables ({articles, shoppingListIdState, amounts, category}) {
    
    const fruit = articles.filter((article) => article.articlecategory === "1"); //this is hardcoded and may need to be changed in a future iteration

    const randomAmount = 0; // Math.floor(Math.random() * 4);
    
    return (
        <div>
            {fruit.map((item) =>
                <ArticleSelectorFlex 
                    key={item.id}
                    description={fruit.articledescription}
                    amount={randomAmount}>
            </ArticleSelectorFlex>)}
        </div>
    )

}

