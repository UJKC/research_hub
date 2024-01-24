import React from 'react';
import SideNav from './SideNav';
import Content from './Maincontent';

function Area() {
    return (
        <div className="d-flex flex-nowrap">
            <SideNav />
            <Content />
        </div>
  );
}
  
  export default Area;