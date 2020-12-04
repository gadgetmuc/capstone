import React from 'react';



export default function ArticleSelector ({ article }) {
    return (
        <div>            
            <ArticleSelector>
                <span>{article.description}</span>
                <span>Anzahl</span>
                <button onClick={() => {alert("-")}}>-</button>
                <button onClick={() => {alert("+")}}>+</button>
            </ArticleSelector>
        </div>
    )
}
