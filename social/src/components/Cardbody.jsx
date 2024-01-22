import React, { useState } from 'react';

function BodyCard() {
  const initialText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac neque vel tellus varius tincidunt. Integer bibendum augue nec nisl malesuada, a suscipit sapien semper. Duis vel fringilla ex, et dapibus augue. Nulla facilisi. Proin et risus vitae ligula eleifend vulputate. Nullam facilisis, nisl nec fringilla aliquet, libero enim tincidunt odio, non commodo elit leo a justo. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

  const [displayedText, setDisplayedText] = useState(() => initialText.substring(0, 380));
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    if (isExpanded) {
      setDisplayedText(initialText.substring(0, 380));
    } else {
      setDisplayedText(initialText);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{displayedText}</p>
        {initialText.length > 380 && (
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
