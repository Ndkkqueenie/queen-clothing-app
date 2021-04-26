import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Shirt from './components/ShirtComponent';
import Dress from './components/DressComponent';
import Footer from './components/Footer';
import { SHIRTS } from './shared/shirts';
import { DRESSES } from './shared/dresses';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shirts: SHIRTS,
      dresses: DRESSES
    };
  }
  render () {
    const onReload = (event) => {
      event.preventDefault(event);
      window.location.reload(false);
    };
    const Sidebar = () => {
      return(
        <div>
          <header className="w3-bar w3-top w3-hide-large w3-black w3-xlarge"> 
            
            <nav class="navbar navbar-dark bg-dark">
              <div class="container-fluid">
              <div className="navbar-brand w3-bar-item w3-padding-24 w3-wide"><img alt="Queen logo" style={{width: "40px"}} src="./assets/logo.png" /></div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
            </nav>
            <div class="collapse" id="navbarToggleExternalContent">
              <div className="w3-sidebar w3-bar-block bg-dark">
              <h2 onClick={onReload} style={{marginLeft: "80%", color: "#ffffff"}}>X</h2>
                <div className="w3-padding-64 w3-large" style={{fontWeight:"bold", color: "#ffffff"}}>
                  
                  <Link className="w3-bar-item w3-button"  to='/shirt'>Shirts</Link>
                  <Link className="w3-bar-item w3-button"  to='/dress'>Dresses</Link>
                </div>
              </div>
            </div>
          </header>

          <nav className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style={{zIndex: 3, width:"250px"}} id="mySidebar">
            <div className="w3-container w3-display-container w3-padding-16">
              <h3 className="w3-wide">
                <b><img alt="Queen logo" style={{width: "40px"}} src="./assets/logo.png" /></b>
              </h3>
            </div>
            <div className="w3-padding-64 w3-large w3-text-grey" style={{fontWeight:"bold"}}>
              <Link className="w3-bar-item w3-button"  to='/shirt'>Shirts</Link>
              <Link className="w3-bar-item w3-button"  to='/dress'>Dresses</Link>
            </div>
      
            <a href="#newsletter" className="w3-bar-item w3-button w3-padding">Newsletter</a>
          </nav>
          
        </div>
      );
    }
    return (
      <Router>
        <div>
          <Sidebar />
          <Switch>
            <Route path="/shirt">
              <Shirt shirts={this.state.shirts} />
            </Route>
            <Route path="/dress">
              <Dress dresses={this.state.dresses} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
