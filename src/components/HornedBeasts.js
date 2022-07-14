import { Component } from 'react';
// import Button from 'react-bootstrap/Button';

class HornedBeast extends Component {
    constructor(props) {
        super(props);
        // console.log('Props: ')
        // console.log(props);
        // console.log('--------')

        this.state = {
            favorite: 0,
        }
    }

    render() {
        return (
            <div key={this.props.id} id={this.props.title}>
                <img key={this.props.id} className="card-img" width="200px" src={this.props.beastsImg} alt={this.props.title} />
            </div>
        )
    }
}

export default HornedBeast;