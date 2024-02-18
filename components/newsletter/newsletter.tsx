import React from "react";
import { useRef } from 'react';
import styles from "./newsletter.module.css";


export default function Newsletter() {
    // const inputRef = useRef<HTMLInputElement>(null);
    // inputRef.current!.value = '';

    return (
    <>
        <div id="newsletter" className="newsletter-container">
            {/* <input id="newsletter-input" type="text" placeholder="Enter email here..." ref={inputRef}></input>
            <button id="submit-newsletter" onClick={()=>{inputRef.current.innerHTML = "";}}>Enter</button> */}
        </div>
    </>
    );
}