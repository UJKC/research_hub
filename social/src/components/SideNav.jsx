import React from 'react';
import '../styles/sidenav.css'

function SideNav() {
    return (
        <div class="col-md-3 col-lg-2 side-nav p-3 bg-body-tertiary">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <span class="fs-4">Sidebar</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-body-emphasis">
          Profile
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-body-emphasis">
          Chats
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-body-emphasis">
          Repository
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-body-emphasis">
          help
        </a>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu text-small shadow">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  );
}
  
  export default SideNav;