import { useEffect } from "react";

const MatrixBackground = () => {
  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const container = document.getElementById('matrix-container');
    
    if (!container) return;

    const createMatrixChar = () => {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + '%';
      char.style.animationDuration = (Math.random() * 10 + 10) + 's';
      char.style.animationDelay = Math.random() * 5 + 's';
      container.appendChild(char);
      
      setTimeout(() => {
        if (char.parentNode) {
          char.parentNode.removeChild(char);
        }
      }, 25000);
    };
    
    // Create initial matrix chars
    for (let i = 0; i < 50; i++) {
      setTimeout(createMatrixChar, i * 200);
    }
    
    // Continue creating chars
    const interval = setInterval(createMatrixChar, 500);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      id="matrix-container" 
      className="matrix-bg"
      aria-hidden="true"
    />
  );
};

export default MatrixBackground;
