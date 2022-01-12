import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import EventsExample from "./components/EventsExample";
import TodosPage from "./components/Pages/TodosPage";
import UsersPage from "./components/Pages/UsersPage";
import Page from "./components/UI/Out/Page";
import MultiSelect from "./components/UI/Input/Select/MultiSelect";
import OptionSelect from "./components/UI/Input/Forms/OptionSelect";
import UserItemPage from "./components/Pages/UserItemPage";
import TodoItemPage from "./components/Pages/TodoItemPage";

const styles = {
    NavBar: {
        display:"flex",
        justifyContent: "space-between"
    }
}

const App = () => {

    return (
        <BrowserRouter>
            <div style={styles.NavBar}>
                <NavLink to="/option">Options</NavLink>
                <NavLink to="/select">Select</NavLink>
                <NavLink to="/todos">Users</NavLink>
                <NavLink to="/users">Todo</NavLink>
            </div>
            <Routes>
                <Route path={'/option'} element={
                    <Fragment>
                        <Page>
                            <OptionSelect/>
                        </Page>
                    </Fragment>
                }/>
                <Route path={'/select'} element={
                    <Fragment>
                        <Page>
                            <MultiSelect/>
                        </Page>
                    </Fragment>
                }/>
                <Route path={'/users'} element={
                    <Fragment>
                        <UsersPage/>
                    </Fragment>
                }/>
                <Route path={'/users/:id'} element={
                    <Fragment>
                        <UserItemPage/>
                    </Fragment>
                }/>
                <Route path={'/todos/:id'} element={
                    <TodosPage/>
                }/>
                <Route path={'/todos'} element={
                    <TodoItemPage/>
                }/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;

//rsc - create new component

{/*<MultiSelect onClick={(num) => console.log('click! ', num)} variant={SelectVariant.primary} height='200px' width='300px' >*/}
{/*    <button>Кнопка</button>*/}
{/*</MultiSelect>*/}
