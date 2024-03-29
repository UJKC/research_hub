import React from 'react';
import SideNav from './SideNav';
import Content from './ProfileContents';

function Area() {
    return (
        <div className="d-flex flex-nowrap">
            <SideNav />
            <Content />
        </div>
  );
}
  
  export default Area;