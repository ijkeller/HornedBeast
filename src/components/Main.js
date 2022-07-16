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
                <div className='card-grid'>
                {this.state.beastsList.map(beast =>
                    <HornedBeast
                    image_url={beast.image_url}
                    title={beast.title}
                    description={beast.description}
                    keyword={beast.keyword}
                    horns={beast.horns}
                />
                )}
                </div>
            </main>
        )
    }
}

export default Main;