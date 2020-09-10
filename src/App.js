import React, {Component} from 'react';
import './App.scss';
import Form from "./components/Form";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <Form/>
                </div>
            </Provider>
        );
    }
};


export default App;


