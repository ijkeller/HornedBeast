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
            <div className='card-grid'>
                {this.props.beasts.map(beast =>
                    <img key={beast._id}
                        className="card-img"
                        width="200px"
                        src={beast.image_url}
                        alt={beast.title}
                        onClick={() => beast.selectBeast(beast)} />
                )}
            </div>
        )
    }
}

export default HornedBeast;