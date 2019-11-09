import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import './Alarm.css';
import {database} from './Firebase.js';



class Alarm extends Component {
    state = {
        data: null,
    };

    componentDidMount() {
        database.ref('/').on('value', (snapshot) => {
            this.setState({
                data: snapshot.val()
            });
        });
    }

    toggleAlarm = () => {
        this.setState(prevState => ({
                data: {
                    ...this.state.data,
                    alarmActivated: !prevState.data.alarmActivated,
                },            })
            , () => {
                database.ref('/').update(this.state.data)
            }
        );
    };

    render() {
        const {data} = this.state;
        if (!data) {
            return <div>Loading data from server...</div>
        }
        return (
            <div>
                <div className="container">
                    <h2 className="display-4">Currently the alarm is: {data.alarmActivated ? 'ON' : 'OFF'} </h2>
                    <p className="lead">Amount of motion detected: {data.countMotions} </p>
                    <div className="row">
                        <div className="col">
                            <Button onClick={this.toggleAlarm}
                                    variant={data.alarmActivated ? 'danger' : 'success'}
                                    size="lg">{data.alarmActivated ? 'SET OFF' : 'SET ON'}</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Alarm;