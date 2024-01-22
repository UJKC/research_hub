import React from 'react';

function Cardname() {
    return (
        <div>
            <div class="row d-none d-md-flex">
          <div class="col-md-4">
            <div class="d-flex align-items-center">
              <img src="profile-photo.jpg" alt="Profile Photo" class="rounded-circle" style={{width: '40px',height: '40px'}} />
              <span class="ml-2">John Doe</span>
            </div>
          </div>
          <div class="col-md-5"></div>
          <div class="col-md-3 text-right">
            <span>Date of Posting</span>
          </div>
        </div>
  
        <div class="row d-flex d-md-none">
          <div class="col-12 text-center">
            <div class="d-flex flex-column align-items-center">
              <img src="profile-photo.jpg" alt="Profile Photo" class="rounded-circle" style={{width: '40px',height: '40px'}} />
              <span class="mt-2">John Doe</span>
            </div>
          </div>
          <div class="col-12 text-right mt-2">
            <span>Date of Posting <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></span>
          </div>
        </div>
        </div>
    );
  }
  
  export default Cardname;
