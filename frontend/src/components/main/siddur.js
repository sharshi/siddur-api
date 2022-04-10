import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Paragraph } from "./paragraph";

const Siddur = ({ fetchSiddur, siddurParagraphs, updateParagraph }) => {
  useEffect(() => {
    fetchSiddur();
  }, [fetchSiddur]);

  const paragraphs = Object.keys(siddurParagraphs).map(key => {
    const paragraph = siddurParagraphs[key];
    return <Paragraph paragraph={paragraph} updateParagraph={updateParagraph} key={paragraph._id} />;
  });

  return (
    <>
      <h1>Siddur</h1>
      {paragraphs}
    </>
  )
}

export default Siddur;
