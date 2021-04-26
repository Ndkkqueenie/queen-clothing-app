import React from 'react';

function RenderShirt({shirt}) {
    return (
      <div class="w3-col l3 s6">
        <div class="w3-container">
          <div class="w3-display-container">
            <img src={shirt.image} alt={shirt.name} style={{width:"100%"}}/>
            <span class="w3-tag w3-display-topleft">New</span>
            <div class="w3-display-middle w3-display-hover">
              <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
            </div>
          </div>
          <p>{shirt.name}<br></br><b>{shirt.price}</b></p>
        </div>
      </div>
    );
}
function Shirt(props) {

    const shirts = props.shirts.map((shirt) => {
        return (
            <div key={shirt.id}>
                <RenderShirt shirt={shirt} />
            </div>
        );
    });

    return(  
      <div class="w3-main" style={{marginLeft:"250px"}}>
        <div class="w3-hide-large" style={{marginTop:"83px"}}></div>
        <header class="w3-container w3-xlarge">
          <p class="w3-left">Shirts</p>
          <p class="w3-right">
            <i class="fa fa-shopping-cart w3-margin-right"></i>
            <i class="fa fa-search"></i>
          </p>
        </header>
          <div className="w3-row">
            {shirts}
          </div>
      </div>
    );
}

export default Shirt;