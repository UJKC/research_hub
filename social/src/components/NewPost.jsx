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
  const [base64Images, setBase64Images] = useState([]);

  const [selectedVideos, setSelectedVideos] = useState([]);

  const [documents, setDocuments] = useState([]);
  const [documentNames, setDocumentNames] = useState([]);

  const [links, setLinks] = useState([]);
  const [inputValue, setInputValue] = useState('');

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

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleButtonClick = async () => {
    // Assuming you are using the fetch API to make a POST request to the specified endpoint
      
    console.log("Posting")
    fetch('http://localhost:5002/newpost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        images: base64Images,
        videos: selectedVideos,
        documents: documents,
        selectedTags,
        addToRepository,
        selectedProject,
        postText,
        links,
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

  const handleRemoveImage = (index) => {
    setSelectedImages((prevSelectedImages) =>
      prevSelectedImages.filter((_, i) => i !== index)
    );
    setBase64Images((prevBase64Images) =>
      prevBase64Images.filter((_, i) => i !== index)
    );
  };
  
    const handleImageChange = (e) => {
      const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      const file = files[i];

      reader.onloadend = () => {
        setSelectedImages((prevSelectedImages) => [...prevSelectedImages, file]);
        setBase64Images((prevBase64Images) => [...prevBase64Images, reader.result]);
      };

      reader.readAsDataURL(file);
    }
    };

    

  const handleVideoChange = async (e) => {
    const files = e.target.files;

    // Convert selected videos to base64
    const base64Promises = Array.from(files).map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve({ name: file.name, base64: event.target.result });
        };
        reader.readAsDataURL(file);
      });
    });

    const base64Videos = await Promise.all(base64Promises);

    // Update the state with selected videos
    setSelectedVideos(base64Videos);
  };

  const handledocChange = async (event) => {
    const files = event.target.files;

    // Convert each file to base64
    const newDocuments = Array.from(files).map((file) => {
      return {
        name: file.name,
        base64: URL.createObjectURL(file),
      };
    });

    setDocuments([...documents, ...newDocuments]);
    setDocumentNames([...documentNames, ...Array.from(files).map(file => file.name)]);
  };

  const handleLinkInput = () => {
    // Adding the current input value to the links array
    setLinks(prevLinks => [...prevLinks, inputValue]);
    // Clearing the input field
    setInputValue('');
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
        <h3>Selected Images (Recommended Select One Please):</h3>
        <ul>
        {selectedImages.map((image, index) => (
          <div key={index}>
            <img src={base64Images[index]} alt={`selected-${index}`} />
            <button onClick={() => handleRemoveImage(index)}>Remove</button>
          </div>
        ))}
        </ul>
      </div>
    </div>
                    </div>

                    <div class="tab-pane show" id="videos" role="tabpanel">
                    <div>
      <input type="file" multiple onChange={handleVideoChange} />

      <div>
        <h3>Selected Videos (only 1):</h3>
        <ul>
          {selectedVideos.map((video, index) => (
            <li key={index}>{video.name}</li>
          ))}
        </ul>
      </div>

      {selectedVideos.length > 0 && (
        <div>
          <h3>Uploaded Videos:</h3>
          <ul>
            {selectedVideos.map((video, index) => (
              <li key={index}>{video.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>

                    <div class="tab-pane fade" id="documents" role="tabpanel">
                    <div>
      <input type="file" multiple onChange={handledocChange} />
      <div>
        <h2>Selected Document Names:</h2>
        <ul>
        {documentNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
        </ul>
      </div>
    </div>
                    </div>

                    <div class="tab-pane fade" id="webpages" role="tabpanel">
                        <p>Webpages content goes here...</p>
                    </div>

                    <div class="tab-pane fade" id="links" role="tabpanel">
                    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a link"
      />
      <button onClick={handleLinkInput}>Add Link</button>

      {/* Displaying the entered links */}
      <div>
        <h2>Entered Links:</h2>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
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
