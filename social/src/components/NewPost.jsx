import React from 'react';

function NewPost() {
    return (
        <div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  New Post
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
      <textarea class="form-control expandable-input" rows="3" placeholder="Type your text here..."></textarea>

      <ul class="nav nav-tabs mt-3" id="attachmentTabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="images-tab" data-toggle="tab" href="#images" role="tab">Images</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="videos-tab" data-toggle="tab" href="#videos" role="tab">Videos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="documents-tab" data-toggle="tab" href="#documents" role="tab">Documents</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="webpages-tab" data-toggle="tab" href="#webpages" role="tab">Webpages</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="links-tab" data-toggle="tab" href="#links" role="tab">Links</a>
                    </li>
                </ul>


                <div class="tab-content mt-2">
                    <div class="tab-pane fade show active" id="images" role="tabpanel">
                        <p>Images content goes here...</p>
                    </div>

                    <div class="tab-pane show" id="videos" role="tabpanel">
                        <p>Videos content goes here...</p>
                    </div>

                    <div class="tab-pane fade" id="documents" role="tabpanel">
                        <p>Documents content goes here...</p>
                    </div>

                    <div class="tab-pane fade" id="webpages" role="tabpanel">
                        <p>Webpages content goes here...</p>
                    </div>

                    <div class="tab-pane fade" id="links" role="tabpanel">
                        <p>Links content goes here...</p>
                    </div>
                </div>

            </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    );
  }
  
  export default NewPost;
