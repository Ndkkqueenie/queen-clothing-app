import React from 'react';

function RenderDress({dress}) {
    return (
      <div class="w3-col l3 s6">
        <div class="w3-container">
          <div class="w3-display-container">
            <img src={dress.image} alt={dress.name} style={{width:"100%"}}/>
            <div class="w3-display-middle w3-display-hover">
              <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
            </div>
          </div>
          <p>{dress.name}<br></br><b>{dress.price}</b></p>
        </div>
      </div>
    );
}
function Dress(props) {

    const dresses = props.dresses.map((dress) => {
        return (
            <div key={dress.id}>
                <RenderDress dress={dress} />
            </div>
        );
    });

    return(  
      <div class="w3-main" style={{marginLeft:"250px"}}>
        <div class="w3-hide-large" style={{marginTop:"83px"}}></div>
        <header class="w3-container w3-xlarge">
          <p class="w3-left">Dresses</p>
          <p class="w3-right">
            <i class="fa fa-shopping-cart w3-margin-right"></i>
            <i class="fa fa-search"></i>
          </p>
        </header>
          <div className="w3-row">
            {dresses}
          </div>
      </div>
    );
}

export default Dress;