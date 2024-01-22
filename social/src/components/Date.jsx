import React from 'react';

const CurrentDateTime = () => {
  const currentDateTime = new Date();
  const formattedDateTime = currentDateTime.toLocaleString();

  // Calculate the time difference in milliseconds
  const timeDifference = Date.now() - currentDateTime.getTime();

  // Check the conditions
  let displayText = '';
  if (timeDifference < 24 * 60 * 60 * 1000) {
    // If the time is not past 24hrs, return the time
    displayText = currentDateTime.toLocaleTimeString();
  } else if (timeDifference < 48 * 60 * 60 * 1000) {
    // If the day is just past 24hrs but not 48hrs, return "yesterday"
    displayText = 'Yesterday';
  } else if (timeDifference < 7 * 24 * 60 * 60 * 1000) {
    // If the day is past 48hrs but not a week, return "past week"
    displayText = 'Past week';
  } else if (timeDifference < 30 * 24 * 60 * 60 * 1000) {
    // If it's past 1 month, return "1 month"
    displayText = '1 month';
  } else if (timeDifference < 365 * 24 * 60 * 60 * 1000) {
    // If it's past 1 year, return "1 year"
    displayText = '1 year';
  } else {
    // If it's more than a year, return the formatted date and time
    displayText = formattedDateTime;
  }

  return (
    <p>{displayText}</p>
  );
};

export default CurrentDateTime;
