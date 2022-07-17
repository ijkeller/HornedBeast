import { Component } from 'react';
import HornedBeast from './HornedBeasts';

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <main>
                <div className='card-grid'>
                {this.props.beastsList.map(beast =>
                    <HornedBeast
                    image_url={beast.image_url}
                    title={beast.title}
                    description={beast.description}
                    keyword={beast.keyword}
                    horns={beast.horns}
                    handleSelectedBeast={this.props.handleSelectedBeast}
                />
                )}
                </div>
            </main>
        )
    }
}

export default Main;