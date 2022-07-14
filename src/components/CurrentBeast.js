import { Component } from 'react';

class CurrentBeast extends Component {

    render() {
        return (
            <div className='main-display'>
                <h2>{this.props.currentBeast.title}</h2>
                <img className='current-beast' src={this.props.currentBeast.image_url} />
                <p>{this.props.currentBeast.description}</p>
            </div>
        )
    }
}

export default CurrentBeast;