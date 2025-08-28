import React, { useState, useCallback, useEffect } from 'react';

function getRandomString(length = 10) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }
  return result;
}

const containerStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f7fa',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  padding: '20px',
};

const cardStyle = {
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  padding: '40px 60px',
  maxWidth: '400px',
  width: '100%',
  textAlign: 'center',
};

const headingStyle = {
  marginBottom: '20px',
  fontSize: '28px',
  color: '#333',
  fontWeight: '600',
};

const stringStyle = {
  marginBottom: '30px',
  fontSize: '22px',
  letterSpacing: '1.2px',
  fontWeight: '500',
  color: '#007acc',
  minHeight: '28px',
  wordBreak: 'break-word',
};

const buttonStyle = {
  backgroundColor: '#007acc',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  padding: '12px 25px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '600',
  transition: 'background-color 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#005fa3',
};

const RandomStringGenerator = () => {
  const [randomString, setRandomString] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const generateString = useCallback(() => {
    const newString = getRandomString();
    setRandomString(newString);
  }, []);

  useEffect(() => {
    generateString();
  }, [generateString]);

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Random String Generator</h2>
        <div style={stringStyle}>{randomString}</div>
        <button
          style={isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
          onClick={generateString}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Generate New String
        </button>
      </div>
    </div>
  );
};

export default RandomStringGenerator;
