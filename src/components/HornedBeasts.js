import { Component } from 'react';


class HornedBeast extends Component {
    constructor(props) {
        super(props);
        console.log(props);
      }

      
      render() {
        return (
        <div id="beast-list">
            {this.props.beasts.map(beast => <img className="card-img" width="200px" src={beast.imgUrl} alt={beast.title} />)}
        </div>
    )}
}

export default HornedBeast;