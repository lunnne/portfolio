import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';


export default function TypeWriter({ text }) {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState('');
  const { ref: typeRef, inView: typeRefIsVisible } = useInView();


  useEffect(()=>{
      index.current = 0;
      setCurrentText('')
  },[typeRefIsVisible])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentText((value) => value + text.charAt(index.current));
      index.current += 1
    }, 90);
    return () => {
        clearTimeout(timeoutId) 
    }
  }, [currentText, text]);
  return <span ref={typeRef}>{typeRefIsVisible? <span>{currentText}</span>:''}</span>;
}