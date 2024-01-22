import React, { useState, useEffect } from 'react';

function BodyCard() {
  const initialText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac neque vel tellus varius tincidunt. Integer bibendum augue nec nisl malesuada, a suscipit sapien semper. Duis vel fringilla ex, et dapibus augue. Nulla facilisi. Proin et risus vitae ligula eleifend vulputate. Nullam facilisis, nisl nec fringilla aliquet, libero enim tincidunt odio, non commodo elit leo a justo. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

  const [displayedText, setDisplayedText] = useState(() => initialText.substring(0, 150));
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    if (isExpanded) {
      setDisplayedText(initialText.substring(0, 150));
    } else {
      setDisplayedText(initialText);
    }
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setDisplayedText(initialText.substring(0, 3));
      } else {
        setDisplayedText(initialText.substring(0, 150));
      }
    };

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [initialText]);

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{displayedText}</p>
        {initialText.length > 150 && (
          <button
            className="btn btn-link"
            onClick={toggleText}
          >
            {isExpanded ? 'See Less' : 'See More'}
          </button>
        )}
      </div>
    </div>
  );
}

export default BodyCard;
