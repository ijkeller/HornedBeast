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

    render() {

        if (this.state.beastsList) {

            console.log('this.state.beastsList')
            console.log(this.state.beastsList)
            console.log('------------')
        }
        return (

            <main>
                <CurrentBeast currentBeast={this.state.currentBeast} />
                <div className='card-grid' >
                    {this.state.beastsList.map(x =>
                        <HornedBeast
                            beastsImg={x.image_url}
                            title={x.title}
                            id={x._id}
                        />
                    )}
                </div>
            </main>
        )
    }
}

export default Main;