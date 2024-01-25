import React, { useState } from 'react';

function NewPost() {

    const tags = ["JavaScript", "HTML", "CSS", "Bootstrap", "React", "Node.js"];

    const DummyProjects = [
      { id: 1, name: 'Project A' },
      { id: 2, name: 'Project B' },
      { id: 3, name: 'Project C' },
    ];
    
  const [addToRepository, setAddToRepository] = useState(false);
  const [selectedProject, setSelectedProject] = useState(DummyProjects[0]);
  const [postText, setPostText] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);

  // State to manage selected tags
  const [selectedTags, setSelectedTags] = useState([]);

  // State to manage tag search
  const [searchTerm, setSearchTerm] = useState('');

  // Handle tag search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Handle tag click to toggle active state
  const handleTagClick = (tag) => {
    const index = selectedTags.indexOf(tag);
    if (index === -1) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      const newTags = [...selectedTags];
      newTags.splice(index, 1);
      setSelectedTags(newTags);
    }
  };

  const handleCheckboxChange = () => {
    setAddToRepository(!addToRepository);
  };

  const handleProjectChange = (event) => {
    const projectId = parseInt(event.target.value, 10);
    const project = DummyProjects.find((p) => p.id === projectId);
    setSelectedProject(project);
  };

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
  };

  const handleButtonClick = () => {
    // Assuming you are using the fetch API to make a POST request to the specified endpoint
    console.log("Posting")
    fetch('http://localhost:5001/newpost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        selectedTags,
        addToRepository,
        selectedProject,
        postText,
        selectedImages,
        selectedVideos,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server as needed
        console.log('Server response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;

    // Extracting image names and updating state
    const imageNames = Array.from(files).map(file => file.name);
    setSelectedImages(prevImages => [...prevImages, ...imageNames]);
  };

  const handleVideoChange = (event) => {
    const files = event.target.files;

    // Extracting video names from selected files
    const videoNames = Array.from(files).map((file) => file.name);

    // Updating state with new video names
    setSelectedVideos((prevVideos) => [...prevVideos, ...videoNames]);
  };

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
        
      <textarea class="form-control expandable-input" rows="3" value={postText} onChange={handlePostTextChange} placeholder="Type your text here..."></textarea>

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
                        <div>
      <input
        type="file"
        multiple
        onChange={handleImageChange}
      />
      <div>
        <h3>Selected Images:</h3>
        <ul>
          {selectedImages.map((imageName, index) => (
            <li key={index}>{imageName}</li>
          ))}
        </ul>
      </div>
    </div>
                    </div>

                    <div class="tab-pane show" id="videos" role="tabpanel">
                    <div>
      <input
        type="file"
        accept="video/*"
        multiple
        onChange={handleVideoChange}
      />
      <div>
        <h2>Selected Videos:</h2>
        <ul>
          {selectedVideos.map((videoName, index) => (
            <li key={index}>{videoName}</li>
          ))}
        </ul>
      </div>
    </div>
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

            <div>
      {/* Search bar */}
      <div className="form-group">
        <label htmlFor="tagSearch">Search Tags:</label>
        <input type="text" className="form-control" id="tagSearch" placeholder="Type to search tags" onChange={handleSearch} />
      </div>

      {/* Tag list */}
      <div className="tag-list">
        {tags
          .filter(tag => tag.toLowerCase().includes(searchTerm))
          .map(tag => (
            <span
              key={tag}
              className={`tag ${selectedTags.includes(tag) ? 'active' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          ))}
      </div>

      {/* Display selected tags */}
      <div className="container mt-4">
        <div className="card">
          <div className="card-header">Selected Tags</div>
          <div className="card-body">
            <ul className="list-unstyled">
              {selectedTags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div>
      <label>
        <input
          type="checkbox"
          checked={addToRepository}
          onChange={handleCheckboxChange}
        />
        Add to repository
      </label>

      <br />

      <label>
        Select Project:
        <select value={selectedProject.id} onChange={handleProjectChange}>
          {DummyProjects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
      </label>

      <p>
        Selected Project: {selectedProject.name}
        <br />
        Add to Repository: {addToRepository ? 'Yes' : 'No'}
      </p>
    </div>
    <button type="button" class="btn btn-primary" onClick={handleButtonClick}>Post</button>
      </div>
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    );
  }
  
  export default NewPost;
