import React, {Component} from 'react';
import axios from "axios";
import './Weather.css'

const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&APPID=b4001bd05417792a509cff3ba291f92b";

class Weather extends Component {
    state = {
        name: null,
        description: null,
        temp_min: null,
        temp_max: null,
        wind: null,
        isLoading: false,
    }

    componentDidMount() {
        axios.get(API_URL)
            .then(response => this.setState({
                name: response.data.name,
                description: response.data.weather[0].description,
                temp_min: response.data.main.temp_min,
                temp_max: response.data.main.temp_max,
                wind: response.data.wind.speed + ' m/s',
                isLoading: true
            }))
            .catch(error => this.setState({
                error,
                isLoading: false,
            }));
    }

    render() {

        return (
            <div>
                <h1>Weather Information</h1>
                <div class="container-weather">
                  <dl className="row">
                    <dt className="col-sm-3">City</dt>
                    <dd className="col-sm-9">{this.state.name}</dd>

                    <dt className="col-sm-3">Description</dt>
                    <dd className="col-sm-9">{this.state.description}</dd>

                    <dt className="col-sm-3">Temperature min</dt>
                    <dd className="col-sm-9">{this.state.temp_min}</dd>

                    <dt className="col-sm-3">Temperature max</dt>
                    <dd className="col-sm-9">{this.state.temp_max}</dd>

                    <dt className="col-sm-3">Wind</dt>
                    <dd className="col-sm-9">{this.state.wind}</dd>
                </dl>
            </div>
            </div>
        );
    }
}

export default Weather;