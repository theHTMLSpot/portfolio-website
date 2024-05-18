import React, { useEffect, useState } from 'react';
import austronaut from '../assets/6300_2_02.jpg';



function Paragraph() {
    const [titleText, setTitleText] = useState('');
    const [titleIndex, setTitleIndex] = useState(0);
  
    useEffect(() => {
      const title = "Hi, I am Ethan. And welcome to My Coding World!";
  
      const titleTimer = setInterval(() => {
        if (titleIndex < title.length) {
          setTitleText(prev => prev + title.charAt(titleIndex));
          setTitleIndex(prev => prev + 1);
        } else {
          clearInterval(titleTimer);
        }
      }, 100);
  
      return () => {
        clearInterval(titleTimer);
      };
    }, [titleIndex]); // Ensure the useEffect runs only when titleIndex changes
  
    return (
      <div className='paragraph'>
        <div className="typingAnimationContainer">
          <h1 className="typingAnimation">
            {titleText}
          </h1>
        </div>
  
        <div className='Paragraph'>
          <p>
            Hi, I'm 12 years old and I love coding. Right now, I'm learning React, which is a cool JavaScript library for building user interfaces. Check out my websites to see what I've been working on and how much I'm growing in web development!
          </p>
        </div>
        <img src={austronaut} alt='' id='img'/>
      </div>
    );
  }
  
  export default Paragraph;