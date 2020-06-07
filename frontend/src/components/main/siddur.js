import React from "react";
import { Link } from "react-router-dom";

export default function Siddur() {
  return (
    <>
      <h1>Siddur</h1>
      <Link to='/siddur/edit'>Edit</Link>
    </>
  );
}
