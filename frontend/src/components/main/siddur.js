import React, { useEffect } from "react";
import { Text} from '@mantine/core';

const Siddur = ({ fetchSiddur, siddurParagraphs }) => {
  useEffect(() => {
    fetchSiddur();
  }, [fetchSiddur]);

  const paragraphNames = Object.keys(siddurParagraphs).map(key => {
    const paragraph = siddurParagraphs[key];
    return <Text children={paragraph.name} key={paragraph._id} />;
  });

  return (
    <>
      <h1>Siddur</h1>
      {paragraphNames}
    </>
  )
}

export default Siddur;
