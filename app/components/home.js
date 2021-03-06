import React, { Component } from 'react';
import CrimeDetails from './detail';
import PoliticiansList from './../lists/politicians.json';
import MeTooList from './../lists/me-too.json';
import AthletesList from './../lists/athletes.json';
import ActorsList from './../lists/actors.json';
import MusiciansList from './../lists/musicians.json';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCrimeDetails: false,
            person: null,
            list: null
        };

        this.viewCrimeDetails = this.viewCrimeDetails.bind(this);
        this.backToHome = this.backToHome.bind(this);
    }

    getListItems(list) {
        return list.people.map(person => {
            return <li key={person.name.replace(' ', '_').toLowerCase()}>
                       {person.name}
                       <a onClick={()=> this.viewCrimeDetails(event, person, list)}>View Crime Details</a>
                   </li>;
        });
    }

    viewCrimeDetails(event, person, list)
    {
        event.preventDefault();

        this.setState({
            showCrimeDetails: true,
            person: person,
            list: list
        });
    }

    backToHome(event) {
        this.setState({showCrimeDetails: false});
    }

    render() {
        return (
            <div>
                {this.state.showCrimeDetails ?
                    <React.Fragment>
                        <button className="back-to-home" type="button" onClick={this.backToHome}>Back</button>
                        <CrimeDetails
                            person={this.state.person}
                            list={this.state.list}
                        />
                    </React.Fragment>

                    :
                    <React.Fragment>
                        <div className="list-preview">
                            <div className="list-heading">
                                <span>{MeTooList.heading}</span>
                            </div>
                            <ul>
                                {this.getListItems(MeTooList)}
                            </ul>
                        </div>
                        <div className="list-preview">
                            <div className="list-heading">
                                <span>{ActorsList.heading}</span>
                            </div>
                            <ul>
                                {this.getListItems(ActorsList)}
                            </ul>
                        </div>
                        <div className="list-preview">
                            <div className="list-heading">
                                <span>{PoliticiansList.heading}</span>
                            </div>
                            <ul>
                                {this.getListItems(PoliticiansList)}
                            </ul>
                        </div>
                        <div className="list-preview">
                            <div className="list-heading">
                                <span>{AthletesList.heading}</span>
                            </div>
                            <ul>
                                {this.getListItems(AthletesList)}
                            </ul>
                        </div>
                        <div className="list-preview">
                            <div className="list-heading">
                                <span>{MusiciansList.heading}</span>
                            </div>
                            <ul>
                                {this.getListItems(MusiciansList)}
                            </ul>
                        </div>
                    </React.Fragment>

                }

            </div>
        );
    }


}