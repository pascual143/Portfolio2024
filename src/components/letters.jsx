import React from "react";
import "../styles.css";

const Letters = () => {
  return (
    <>
      <div id="top" className="element letters_div grid-flow-row gap-4 p-5">
        <h1 className="letters_h1 col-span-2 font-sans font-serif justify-start	content-center">
          Hello!, I´m Pascual Vila.
        </h1>
        <br />
        <h1 className="letters_h1 content-center justify-center justify-between">I am a programmer with training in different areas.</h1>
        <br />
        <h1 className="letters_h1 content-center justify-center justify-between">I like working as a team and learning new things.</h1>
      </div>
    </>
  );
};

export default Letters;
