import React, {useState} from 'react';
import styled from 'styled-components/macro';


export default function ArticleSelector ({ article }) {
    return (
        <div>            
            <ArticleSelectorFlex>
                <span className="articledescription">{article.description}</span>
                <span className="amount">Anzahl</span>
                <button onClick={() => {alert("-")}}>-</button>
                <button onClick={() => {alert("+")}}>+</button>
            </ArticleSelectorFlex>
        </div>
    )
}


const ArticleSelectorFlex = styled.div`
    display: flex;
    justify-content: center;
    color: red;
    }


`