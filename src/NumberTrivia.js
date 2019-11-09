import React, {Component} from 'react';
import axios from 'axios';

const API_URL = 'http://numbersapi.com/random/trivia'

class NumberTrivia extends Component {
    state = {
        number: null,
        isLoading: false
    };
    componentDidMount() {
        axios.get(API_URL)
            .then(result => this.setState({
                number: result.data,
                isLoading: true
            }))
            .catch(error => this.setState({
                error,
                isLoading: false
            }));
    }

    render() {
        return (
            <div>
                    <div className="container">
                        <h1>Number Trivia</h1>
                        <h3>{this.state.number}</h3>
                    </div>
                </div>
        );
    }
}

export default NumberTrivia;