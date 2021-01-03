import React, {useState} from 'react';
import styled from 'styled-components/macro';
import makeAnExportableFunctionOutOfThisHardcodedShoppingListItems from './data/hardcodedShoppinglistsContent';


export default function ProfilePage({listName, shoppingListId, userId, }) {


    // These are mocked-up data since the respective database table was misconfigured in the first place and thus does not work properly.

    console.log(makeAnExportableFunctionOutOfThisHardcodedShoppingListItems());

    const allOfTheShoppingLists = makeAnExportableFunctionOutOfThisHardcodedShoppingListItems();

    console.log(allOfTheShoppingLists);

    const shoppingListNamesOfThisUser = groupItemsByShoppingListId(allOfTheShoppingLists, 'user_id')

    function groupItemsByShoppingListId(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
            var key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
                acc[key].push(Object.values(obj["listname"]));
            }
            return acc;
        }, {});
    }

    console.log(shoppingListNamesOfThisUser);

    return(
        <div>
            <ProfileForm>
                <h1>Please log in</h1>
                <label htmlFor="username" />
                <Input name="username" required type="text" placeholder="please enter your name" />
                <label htmlFor="password" />
                <Input name="password" required type="password" placeholder="please enter your password" />
                <SubmitButton onClick={() => setLoggedIn(1)}>log in</SubmitButton>
                <LoggedInMessage className={loggedIn === 1 ? 'logged_in' : ''}>Hallo Gadget!</LoggedInMessage>
            </ProfileForm>
            <section>
                {Object.values(shoppingListNamesOfThisUser).map((element) => 
                        <div>
                            <button>{element}</button>
                        </div>
                )};
            </section>
        </div>

    );
}

const ProfileForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    margin: 5px;
    background-color: ivory;
    border-radius: 5px;
    background-color: ivory;
    color: #111;
    font-size: 1.2rem;
`

const SubmitButton = styled.button`
    margin: 5px;
    border-radius: 5px;
    width: 100px;
    height: 40px;
    background-color: ivory;
    color: #111;
`

const LoggedInMessage = styled.h2`
    visibility: hidden;
    color: #111;
    &.logged_in {
        visibility: visible;
    }

`