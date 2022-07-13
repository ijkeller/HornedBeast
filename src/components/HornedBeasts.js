import { Component } from 'react';
// import Button from 'react-bootstrap/Button';


class HornedBeast extends Component {
    constructor(props) {
        super(props);
        console.log('Props: ')
        console.log(props);
        console.log('--------')

        this.state = {
            favorite: 0,
        }
    }


    render() {
        return (
            <div id="beast-list">
                {/* {this.props.beasts.map(beast => <h3>{beast.title}</h3>)} */}
                {this.props.beasts.map(beast => <img className="card-img" width="200px" src={beast.image_Url} alt={beast.title} />)}
                {/* {this.props.beasts.map(beast => <h3>{beast.description}</h3>)} */}
            </div>
        )
    }
}

export default HornedBeast;