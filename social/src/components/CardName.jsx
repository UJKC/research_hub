import React from 'react';
import '../styles/name.css'
import CurrentDateTime from './Date';

function Cardname() {
    return (
        <div class="row">
        <div class="col-md-4">
          <div class="d-none d-md-flex align-items-center">
            <div class="profile-circle"></div>
            <span class="ml-2">John Doe</span>
          </div>
          <div class="d-flex align-items-center justify-content-md-start justify-content-center d-md-none">
            <div class="profile-circle"></div>
            <span class="mt-2">John Doe</span>
          </div>
        </div>
        <div class="col-md-5"></div>
        <div class="col-md-3 text-right d-none d-md-block">
          <CurrentDateTime />
        </div>
      </div>

    );
  }
  
  export default Cardname;
