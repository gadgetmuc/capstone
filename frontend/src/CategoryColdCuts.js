import React from 'react';
import ArticleSelectorFlex from './ArticleSelector';

export default function CategoryColdCuts ({articles, shoppingListIdState, amounts, category}) {
    
    const coldCuts = articles.filter((article) => article.articlecategory === "6"); //this is hardcoded and may need to be changed in a future iteration

    const randomAmount = 0; // Math.floor(Math.random() * 4);
    
    return (
        <div>
            {coldCuts.map((item) =>
                <ArticleSelectorFlex 
                    key={item.id}
                    description={item.articledescription}
                    amount={randomAmount}>
            </ArticleSelectorFlex>)}
        </div>
    )

}

