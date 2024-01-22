import React from 'react';
import Cardnav from './CardNav';
import BodyCard from './Cardbody';
import BodyCardtagTagged from './CardFooter';

function PostCard() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <div class="card mb-4  bg-body-tertiary" style={{marginTop: "30px"}}>
              <Cardnav />
              <BodyCard />
              <BodyCardtagTagged />
            </div>
      
          </div>
        </div>
      </div>
    );
  }
  
  export default PostCard;
