import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: 0,
        }
    }

    handleClick = (e) => {
        this.setState({ favorite: this.state.favorite + 1 })
    }

    render() {
        return (
            <>
                <Card className='card' >
                    <Card.Img className="card-img" width="200px" variant="top" src={this.props.image_url} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <span>&hearts; = {this.state.favorite}</span>
                        <Card.Text>{this.props.description}
                        </Card.Text>
                        <Button className='btn btn-primary' onClick={this.handleClick}>Vote for this beast</Button>
                    </Card.Body>
                </Card>
                {/* <img key={this.props._id}
                    className="card-img"
                    width="200px"
                    src={this.props.image_url}
                    alt={this.props.title} />
                <Button version='primary' onClick={this.handleClick}>Vote for this beast (&hearts; = {this.state.favorite})</Button> */}
            </>
        )
    }
}

export default HornedBeast;