import React from 'react';
import ArticleSelectorFlex from './ArticleSelector';

export default function CategoryBodyCare ({articles, shoppingListIdState, amounts, category}) {
    
    const bodyCare = articles.filter((article) => article.articlecategory === "11"); //this is hardcoded and may need to be changed in a future iteration

    const randomAmount = 0; // Math.floor(Math.random() * 4);
    
    return (
        <div>
            {bodyCare.map((item) =>
                <ArticleSelectorFlex 
                    key={item.id}
                    description={item.articledescription}
                    amount={randomAmount}>
            </ArticleSelectorFlex>)}
        </div>
    )

}

