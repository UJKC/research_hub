import React from 'react';
import SideNav from './SideNav';
import Content from './Maincontent';

function Area() {
    return (
        <div style={{display: "flex"}}>
            <SideNav />
            <Content />
        </div>
  );
}
  
  export default Area;