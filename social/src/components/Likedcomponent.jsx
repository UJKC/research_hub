import React, { useState } from 'react';

const Liked = () => {

  return (
    <div>
    <div class="row d-none d-md-flex">
        <div class="col-md-2">
          <button class="btn btn-primary btn-sm">Liked <span class="badge badge-light">2/12</span></button>
        </div>
        <div class="col-md-2">
          <button class="btn btn-info btn-sm">Comment <span class="badge badge-light">2/12</span></button>
        </div>
        <div class="col-md-6">
          <span class="badge badge-secondary">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Tagged
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
          </span>
        </div>
        <div class="col-md-2">
          <button class="btn btn-warning btn-sm">Bookmark</button>
        </div>
      </div>

      <div class="row d-md-none">
        <div class="col-3">
          <button class="btn btn-primary btn-sm">Liked <span class="badge badge-light">3/12</span></button>
        </div>
        <div class="col-3">
          <button class="btn btn-info btn-sm">Comment <span class="badge badge-light">3/12</span></button>
        </div>
        <div class="col-3">
          <span class="badge badge-secondary"><div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Tagged
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div></span>
        </div>
        <div class="col-3">
          <button class="btn btn-warning btn-sm">Bookmark</button>
        </div>
      </div>

    </div>
  );
};

export default Liked;
