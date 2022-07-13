import { Component } from 'react';
import HornedBeast from './HornedBeasts';
import axios from 'axios';
import list from '../data.json';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentBeast: {},
            beastsList: list,
        };
    }

    // retrieveData = () => {
    //     let list = [];
    //     axios.get('https://codefellows.github.io/code-301-guide/curriculum/class-02/lab/assets/data.json')
    //         .then(response => {
    //             list = JSON.stringify(response)
    //             // console.log('JSON response: ')
    //             // console.log(list);
    //             // console.log('------------')
    //             console.log('JSON.parse(list): ')
    //             console.log(JSON.parse(list));
    //             console.log('------------')
    //             list = JSON.parse(list)
    //             console.log('new list.data')
    //             console.log(list.data);
    //             console.log('------------')
    //         });
    // }


    //     function localStorageCreate() {
    //     let saveImages = JSON.stringify(images);
    //     localStorage.setItem('images', saveImages);
    // }

    // function localStorageRead() {
    //     let retrieveImages = localStorage.getItem('images');
    //     return JSON.parse(retrieveImages);
    // }

    render() {

        if (this.state.beastsList) {

            console.log('this.state.beastsList')
            console.log(this.state.beastsList)
            console.log('------------')
        }
        return (

            <main className='card-grid' >
                {this.state.beastsList && <p>{this.state.beastsList[0].title}</p>}
                <HornedBeast beasts={this.state.beastsList} />

            </main>
        )
    }
}

export default Main;