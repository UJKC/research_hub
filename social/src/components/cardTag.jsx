import React, { useState } from 'react';

const BodyCardtag = () => {
  // Sample attachments data
  const attachments = [
    { type: 'website', link: 'https://example.com' },
    { type: 'document', link: 'https://example.com/document.pdf' },
    { type: 'link', link: 'https://example.com/external-link' },
    // Add more attachments as needed
  ];

  // State to manage whether "See More" is clicked
  const [seeMoreClicked, setSeeMoreClicked] = useState(false);

  // Function to handle "See More" button click
  const handleSeeMoreClick = () => {
    setSeeMoreClicked(!seeMoreClicked);
  };

  return (
    <div class='row'>

        {/* Attachments Container */}
        <div className="attachments-container mt-3">
          {attachments.map((attachment, index) => (
            // Show all attachments if "See More" is clicked, otherwise show only the first two
            (seeMoreClicked || index < 2) && (
              <p key={index}>
                <a href={attachment.link} target="_blank" rel="noopener noreferrer">
                  {attachment.type} attachment
                </a>
              </p>
            )
          ))}
        </div>

        <div>
        {/* See More Button */}
        {attachments.length > 2 && (
          <button className="btn btn-link" onClick={handleSeeMoreClick}>
            {seeMoreClicked ? 'See Less' : 'See More'}
          </button>
        )}
        </div>
    </div>
  );
};

export default BodyCardtag;
