import React, {useState} from 'react';
import styled from 'styled-components/macro';
import makeAnExportableFunctionOutOfThisHardcodedShoppingListItems from './data/hardcodedShoppinglistsContent';


export default function ProfilePage({listName, shoppingListId, userId, loggedIn, users, changeLoggedInState, appMode, whichShoppingListIsChosen, chooseShoppingList}) {

    const [loggedInUserId, setLoggedInUserId] = useState(0);

    const [loggedInUserName, setLoggedInUserName] = useState(undefined);

    const [loggedInUserPassword, setLoggedInUserPassword] = useState(undefined);

    const [greetUser, setGreetUser] = useState('Please login.');


    // The data like amounts and prices are mocked, since the respective database table was misconfigured in the first place 
    // and thus does not work properly.

    const allOfTheShoppingLists = makeAnExportableFunctionOutOfThisHardcodedShoppingListItems();

    let shoppingListNamesOfThisUser = ['Wochenendeinkauf', 'Ausflug', 'Bürobedarf']; 

    // console.log(loggedIn);


    function groupItemsByShoppingListId(arrayOfShoppingListObjects, property) {
        return arrayOfShoppingListObjects.reduce(function (acc, obj) {
            var key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
                acc[key].push(Object.values(obj['listname']));
            }
            return acc;
        }, {});
    }

    // console.log(groupItemsByShoppingListId(allOfTheShoppingLists, 9))

    function checkIfUserIsRegistered() {

        console.log(loggedInUserName, loggedInUserPassword);
        const userNameIndexInUsers = element => element['username'] === loggedInUserName;
        const userPasswordIndexInUsers = element => element['password'] === loggedInUserPassword;
        // const userIndex = users[users.findIndex(userNameIndexInUsers)['id']];
        // console.log(users);



        
        if (loggedInUserName && loggedInUserPassword) {
            if (users.findIndex(userNameIndexInUsers) === -1 || users.findIndex(userPasswordIndexInUsers) === -1) {
                setGreetUser('Please try again.');
            } else if (users.findIndex(userNameIndexInUsers) === users.findIndex(userPasswordIndexInUsers)) {
                setGreetUser(`Hallo ${loggedInUserName}!`);
                changeLoggedInState(true);
                console.log(loggedIn);
            }
        }
    }

    
    const handleUserNameInput = event => {
        // if (event.target.value) 
        setLoggedInUserName(event.target.value);
    }
    
    const handleUserPasswordInput = event => {
        setLoggedInUserPassword(event.target.value);
    }
    
    
    return(
        <div>
            <ProfileForm className={loggedIn === true ? 'hide_login' : ''}>
                <label htmlFor="username" />
                <Input name="username" onChange={handleUserNameInput} required type="text" placeholder="please enter your name" />
                <label htmlFor="password" />
                <Input name="password" onChange={handleUserPasswordInput} required type="password" placeholder="please enter your password" />
                <SubmitButton onClick={() => checkIfUserIsRegistered()}>log in</SubmitButton>
            </ProfileForm>
            <LoggedInMessage className={appMode === 2 ? 'show_user_name' : ''}>{greetUser}</LoggedInMessage>
            <ChooseShoppingListH3 className={appMode === 2 && loggedIn === true ? 'logged_in' : ''}>Please choose a shopping list:</ChooseShoppingListH3>
            <ChooseShoppingList className={appMode === 2 && loggedIn == false ? 'hide_choose_shoppinglist' : ''}>
                {Object.values(shoppingListNamesOfThisUser).map((element) =>
                        <div>
                            <ChooseShoppingListButton  className={appMode === 2 && whichShoppingListIsChosen !== 'nothing selected' ? 'hide_choose_shoppinglist' : ''} onClick={() => chooseShoppingList(element)}>{element}</ChooseShoppingListButton>
                        </div>
                )}
                <ChooseAnotherShoppingListButton onClick={() => chooseShoppingList('nothing selected')} className={appMode === 2 && whichShoppingListIsChosen !== 'nothing selected' ? 'change_shopping_list' : ''}>change current shoppinglist</ChooseAnotherShoppingListButton>
            </ChooseShoppingList>
        </div>

    );
}

const ProfileForm = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.hide_login {
        display: none;
        margin-top: 0px;
    }

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
    text-align: center;
    color: #111;
    &.show_user_name {
        visibility: visible;
    }
`

const ChooseShoppingListH3 = styled.h3`
    visibility: hidden;
    text-align: center;
    color: #111;
    &.logged_in {
        visibility: visible;
    }
`

const ChooseShoppingList = styled.div`
    display: initial;
    margin-left: 37px;
    margin-right: 37px;    
    display: flex;
    flex-flow: column wrap;
    width: 300px;
    font-size: 1.3rem;
    color: #111;
    &.hide_choose_shoppinglist {
        display: none;
    }

`

const ChooseShoppingListButton = styled.button`
    margin-top: 5px;
    height: 1.7rem;
    width: 300px;
    border-radius: 5px;
    font-size: 1.2rem;
    color: #111;
    background-color: ivory;
    justify-content: center;
    align-items: center;
    &.hide_choose_shoppinglist {
        display: none;
}
`

const ChooseAnotherShoppingListButton = styled.button`
    display: none;
    height: 1.7rem;
    width: 300px;
    border-radius: 5px;
    font-size: 1.2rem;
    color: #111;
    background-color: orange;
    justify-content: center;
    align-items: center;
    &.change_shopping_list {
        display: initial;
    }
`