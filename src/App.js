import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter, Route, Router, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";
import './App.scss';
import {compose} from "redux";
import News from "./components/News/News";
import Login from "./components/Login/Login";
import Articles from "./components/Articles/Articles";
import Pagination from "./components/Pagination/Pagination";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HamburgerMenu from "./components/Header/HamburgerMenu/HamburgerMenu";
import ScrollUpButton from "react-scroll-up-button";
import './components/ScrollUpButton/ScrollUpButton.scss';
import image from './assets/images/footer-navigation.png'
import ArticleFull from "./components/Articles/ArticleFull/ActileFull";
import LoginPage from "./components/Login/LoginPage/LoginPage";
import history from './history'

class App extends Component {

    componentDidMount() {
        console.log(this.props.isAuth);
        if (this.props.isAuth === false) {

            history.push("/home");
        }

        if (this.props.isAuth === true) {

            history.push("/login");
        }
    }

    render() {

        const {articles} = this.props;
        return (
            <div className='app'>
                <ScrollUpButton ContainerClassName='ScrollUpButton__Container'/>
                <div className='app__header'>
                    <Header/>
                    <HamburgerMenu/>
                </div>
                <div className='app__content'>
                    <Route path='/home'
                           render={() => {
                               return (
                                   <div>
                                       <div className='app__news-login-container'>
                                           <News/>
                                           <Login/>
                                       </div>
                                       <Articles/>
                                   </div>)
                           }}/>

                    {articles.map(artile =>
                        <Route exact
                               path={`/artiles/${artile.id}`}
                               render={() => {
                                   return (
                                       <div>
                                           <ArticleFull title={artile.title} content={artile.content}/>
                                       </div>)
                               }}/>
                    )}

                    {<Route exact
                            path={`/login`}
                            render={() => {
                                return (
                                    <div>
                                        <LoginPage/>
                                    </div>)
                            }}/>
                    }

                    <Route exact
                           path={'/news/1' || '/news/2' || '/news/3' || '/news/4' || '/news/5' || '/news/6' || '/news/7' || '/news/8' || '/news/9' || '/news/10'}
                           render={() => {
                               return (
                                   <div>
                                   </div>)
                           }}/>
                </div>
                <Footer/>
            </div>
        )
    }
};


const mapStateToProps = (state) => ({
    articles: state.articles.articles,
    isAuth: state.login.isAuth
})


let AppContainer = compose(
    connect(mapStateToProps, {}),
    withRouter
)(App);


const SKYTRACK = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <Router history={history}>
            <AppContainer/>
            </Router>
        </Provider>
    </BrowserRouter>
}

export default SKYTRACK;


