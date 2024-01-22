import React, { useState } from 'react';

function BodyCardPost() {
  const initialText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac neque vel tellus varius tincidunt. Integer bibendum augue nec nisl malesuada, a suscipit sapien semper. Duis vel fringilla ex, et dapibus augue. Nulla facilisi. Proin et risus vitae ligula eleifend vulputate. Nullam facilisis, nisl nec fringilla aliquet, libero enim tincidunt odio, non commodo elit leo a justo. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

  const [displayedText, setDisplayedText] = useState(() => {
    if (window.innerWidth >= 768) {
      return initialText.substring(0, 380);
    } else {
      return initialText.substring(0, 150);
    }
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    if (isExpanded) {
      setDisplayedText(() => {
        if (window.innerWidth >= 768) {
          return initialText.substring(0, 380);
        } else {
          return initialText.substring(0, 150);
        }
      });
    } else {
      setDisplayedText(initialText);
    }
    setIsExpanded(!isExpanded);
  };

  // Update word count on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      setDisplayedText(initialText.substring(0, 380));
    } else {
      setDisplayedText(initialText.substring(0, 150));
    }
  });

  return (
    <div>
        <p className="card-text">{displayedText}</p>
        {initialText.length > 500 && (
          <button
            className="btn btn-link"
            onClick={toggleText}
          >
            {isExpanded ? 'See Less' : 'See More'}
          </button>
        )}
        <hr />
      </div>
  );
}

export default BodyCardPost;
