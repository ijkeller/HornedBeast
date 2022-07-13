import { Component } from 'react';


class HornedBeast extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            favorite: 0,
        }
      }

      
      render() {
        return (
        <div id="beast-list">
            {this.props.beasts.map(beast => <img className="card-img" width="200px" src={beast.imgUrl} alt={beast.title} />)}
        </div>
    )}
}

export default HornedBeast;