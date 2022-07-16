import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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

    handleClick = (e) => {
        this.setState({favorite: this.state.favorite+1})
        console.log(this.state.favorite)
    }

    render() {
        return (
            <div className='card-grid'>
                {this.props.beasts.map(beast =>
                    <img key={beast._id}
                        className="card-img"
                        width="200px"
                        src={beast.image_url}
                        alt={beast.title}/>
                )}
                <Button version='Primary' onClick={this.handleClick}>Vote for this Beast (&hearts; = {this.state.favorite})</Button>
            </div>
        )
    }
}

export default HornedBeast;