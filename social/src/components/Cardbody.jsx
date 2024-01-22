import React from 'react';
import BodyCardPost from './crdBodyPost';
import BodyCardtag from './cardTag';

function BodyCard() {

  return (
    <div className="card">
      <div className="card-body">
        <BodyCardPost />
        <BodyCardtag />
      </div>
    </div>
  );
}

export default BodyCard;
