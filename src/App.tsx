import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EventsExample from "./components/EventsExample";
import TodosPage from "./components/TodosPage";
import UsersPage from "./components/UsersPage";
import Page from "./components/UI/Out/Page";
import MultiSelect from "./components/UI/Input/Select/MultiSelect";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                {/*<NavLink>*/}

                {/*</NavLink>*/}
            </div>
            <Routes>
                <Route path={'/'} element={
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
                <Route path={'/todos'} element={
                    <TodosPage>
                        {/*<EventsExample/>*/}
                    </TodosPage>
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
