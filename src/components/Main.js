import { Component } from 'react';
import HornedBeast from './HornedBeasts';
import list from 'https://codefellows.github.io/code-301-guide/curriculum/class-02/lab/assets/data.json';

class Main extends Component {

    constructor() {
        console.log(list)
        super();
        this.state = {
            currentBeast: { image_url: null },
            beastsList: list,
        }
    }

    //     function localStorageCreate() {
    //     let saveImages = JSON.stringify(images);
    //     localStorage.setItem('images', saveImages);
    // }

    // function localStorageRead() {
    //     let retrieveImages = localStorage.getItem('images');
    //     return JSON.parse(retrieveImages);
    // }

render() {
    return(
    <main className = 'card-grid' >
        <HornedBeast beasts={this.state.beastsList} />
    </main>
)}
}

export default Main;