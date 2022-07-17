import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import list from '../data.json';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import { render } from '@testing-library/react';
import Modal from 'react-bootstrap/Modal';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBeast: null, currentPic: null, currentDescription: null, modalShowing: false
    }
  }

  handleShow = () => this.state.modalShowing(true)
  handleClose = () => this.state.modalShowing(false);

  handleSelectedBeast = (clickedBeast) => {
    this.setState({currentBeast: this.props.currentBeast})
  }



  render() {
    return (
      <div className="App">
        <Header />
        <SelectedBeast currentBeast={SelectedBeast} currentPic={currentPic} currentDescription={currentDescription} modalShowing={modalShowing} />
        <Main handleSelectedBeast={handleSelectedBeast} beastsList={list} />
        <Footer />
      </div>
    );
  }
}

export default App;
