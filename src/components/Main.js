import { Component } from 'react';
import HornedBeast from './HornedBeasts';
import CurrentBeast from './CurrentBeast';
import list from '../data.json';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            currentBeast: {},
            beastsList: list,
        };
    }

    selectCurrentBeast = (beast) => {
        this.setState({ currentBeast: beast });
    }

    render() {
        console.log('currentBeast')
        console.log(this.state.currentBeast);
        console.log('------------')

        return (

            <main>
                <CurrentBeast currentBeast={this.state.currentBeast} />
                <HornedBeast
                    beasts={this.state.beastsList}
                    selectBeast={this.selectCurrentBeast}
                />
            </main>
        )
    }
}

export default Main;