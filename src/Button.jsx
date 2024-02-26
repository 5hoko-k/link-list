import React from 'react';

const MyButton = () => {
  const buttonStyles = {
    backgroundColor: '#003e03',
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: '16px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    outline: 'none',
  };

  const handleClick = () => {
    // Perform any actions you need when the button is clicked
    // This could include opening a new window or redirecting to the Buy Me a Coffee page
    window.open('https://www.buymeacoffee.com/anithril', '_blank');
  };

  return (
    <button style={buttonStyles} onClick={handleClick}>
      ☕ Support Anithril
    </button>
  );
};

export default MyButton;
