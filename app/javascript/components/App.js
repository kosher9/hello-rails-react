import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Provider } from "react-redux";
import HelloWorld from "./HelloWorld";
import store from "../configureStore";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={"Home"}/>

                        <Route path="/hello" element={<HelloWorld greeting={"Life"}/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App
