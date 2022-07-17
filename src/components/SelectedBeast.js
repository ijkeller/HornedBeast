import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends Component {

    render() {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.SelectedBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className='selected-beast' src={this.props.SelectedBeast.image_url} alt={this.props.SelectedBeast.title} />
                    <p>{this.props.SelectedBeast.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}

export default SelectedBeast;