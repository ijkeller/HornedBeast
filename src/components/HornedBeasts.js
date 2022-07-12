import { Component } from 'react';


class HornedBeast extends Component {
    constructor(props) {
        super(props);
        console.log(props);
      }

      
      render() {
        return (
        <div className='card card-shadow'>
            <h2 className='card-title'>{this.props.title}</h2>
            <img className="card-img" src={this.props.imgUrl} alt={this.props.title}/>
            <p className='card-body'>
                {this.props.description}
            </p>
        </div>
    )}
}

export default HornedBeast;