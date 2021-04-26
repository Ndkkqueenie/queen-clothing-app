import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <div class="w3-main" style={{marginLeft:"250px"}}>
        <div class="w3-container w3-black w3-padding-32">
          <h1>Subscribe</h1>
          <p>To get special offers and VIP treatment:</p>
          <p><input class="w3-input w3-border" type="text" placeholder="Enter e-mail" style={{width:"100%"}}/></p>
          <button type="button" class="w3-button w3-red w3-margin-bottom">Subscribe</button>
        </div>
        <footer class="w3-padding-64 w3-light-grey w3-small w3-center" id="footer">
          <div class="w3-row-padding">
            <div class="w3-col s4">
              <h4>Contact</h4>
              <p>Questions? Go ahead.</p>
              <form action="/action_page.php" target="_blank">
                <p><input class="w3-input w3-border" type="text" placeholder="Name" name="Name" required/></p>
                <p><input class="w3-input w3-border" type="text" placeholder="Email" name="Email" required/></p>
                <p><input class="w3-input w3-border" type="text" placeholder="Subject" name="Subject" required/></p>
                <p><input class="w3-input w3-border" type="text" placeholder="Message" name="Message" required/></p>
                <button type="submit" class="w3-button w3-block w3-black">Send</button>
              </form>
            </div>

            <div class="w3-col s4">
              <h4>About</h4>
              <p><a href="#aboutus">About us</a></p>
              <p><a href="#support">Support</a></p>
              <p><a href="#store">Find store</a></p>
              <p><a href="#shipment">Shipment</a></p>
              <p><a href="#payment">Payment</a></p>
              <p><a href="#gift">Gift card</a></p>
              <p><a href="#return">Return</a></p>
              <p><a href="#help">Help</a></p>
            </div>

            <div class="w3-col s4 w3-justify">
              <h4>Store</h4>
              <p><i class="fa fa-fw fa-map-marker"></i> Queen Clothing Store</p>
              <p><i class="fa fa-fw fa-phone"></i> +2348167192941</p>
              <p><i class="fa fa-fw fa-envelope"></i> queendalin.nduka@gmail.com</p>
              <h4>We accept</h4>
              <p><i class="fa fa-fw fa-cc-amex"></i> MasterCard Debit Card</p>
              <p><i class="fa fa-fw fa-credit-card"></i> FCMB Credit Card</p>
              <br></br>
              <i class="fa fa-facebook-official w3-hover-opacity w3-large"></i>
              <i class="fa fa-instagram w3-hover-opacity w3-large"></i>
              <i class="fa fa-snapchat w3-hover-opacity w3-large"></i>
              <i class="fa fa-pinterest-p w3-hover-opacity w3-large"></i>
              <i class="fa fa-twitter w3-hover-opacity w3-large"></i>
              <i class="fa fa-linkedin w3-hover-opacity w3-large"></i>
            </div>
          </div>
        </footer>

        <div class="w3-black w3-center w3-padding-24">HTML template by  
          <a href="https://www.w3schools.com/w3css/default.asp" 
            title="W3.CSS"  
            class="w3-hover-opacity">   w3.css</a>  Vue app by 
          <a href="https://queendalin-dev.netlify.app"
            title="Queendalin" 
            class="w3-hover-opacity">   Queendalin Ezenwa</a>
        </div>
      </div>
    )
  }
}

export default Footer;