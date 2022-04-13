import React, { useEffect, useState } from "react";
import { Paragraph } from "./edit_paragraph";
import { Upload } from 'tabler-icons-react'
import { showNotification } from '@mantine/notifications';
import { Pagination } from '@mantine/core';

const SiddurEdit = ({ fetchSiddur, siddurParagraphs, updateParagraph, error, clearErrors, loggedIn }) => {
  const [activePage, setPage] = useState(Object.keys(siddurParagraphs)[0]);

  useEffect(() => {
    if (siddurParagraphs.length === 0) fetchSiddur();
  }, [fetchSiddur]);

  useEffect(() => {
    if (error === 'Unauthorized') {
      showNotification({
        message: 'Unable to update paragraph. Please log in.',
        color: 'red',
        icon: <Upload />,
        position: "top-center",
        onClose: () => clearErrors(),
      });
    }
  });

  const handlePageChange = (page) => {
    setPage(page);
    window.scrollTo(0, 0);
  }

  const pagination = <Pagination page={activePage} onChange={handlePageChange} total={Math.ceil(Object.keys(siddurParagraphs).length / 10)} />;

  const paragraphs = Object.keys(siddurParagraphs).map((key, i) => {
    if (i + 1 * 10 > activePage * 10 && i < activePage * 10 + 10) {
      const paragraph = siddurParagraphs[key];
      console.log(1)
      return <Paragraph paragraph={paragraph} updateParagraph={updateParagraph} loggedIn={loggedIn} key={paragraph._id} />;
    } else {
      return null;
    }
  });

  return (
    <>
      <h1>Siddur Edit</h1>
      {pagination}
      {paragraphs}
      {pagination}
    </>
  )
}

export default SiddurEdit;
