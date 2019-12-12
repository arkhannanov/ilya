import React from 'react';
import cities from './Cities.js';
import {setCurrentCity, toggleModal} from "../../../redux/header-reducer";
import {connect} from "react-redux";

class AutoCompletedText extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            suggestions: [],
            text: ''
        }
    }

    onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];

        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = cities.sort().filter(v => regex.test(v))
        }

        this.setState(() => ({
            suggestions,
            text: value
        }))
    };

    selectedText(value) {
        this.setState({
            text: value,
            suggestions: [],
        })
    }

    toggleModal = () => {
        this.props.toggleModal();
    }

    renderSuggestions = () => {
        let {suggestions} = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {
                    suggestions.map((item, index) => (
                        <li key={index} onClick={() => this.selectedText(item)}>{item}</li>))
                }
            </ul>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.setCurrentCity(this.state.text);
    }

    render() {
        const {text, suggestions} = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input id="query" type="text" onChange={this.onTextChange} value={text}/>
                    {this.renderSuggestions()}
                    <span>Предложения: {suggestions.length}</span>
                    <button type="summit" onClick={this.toggleModal}>Выбрать</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    city: state.header.city,
})


export default connect(mapStateToProps,{setCurrentCity, toggleModal})(AutoCompletedText);