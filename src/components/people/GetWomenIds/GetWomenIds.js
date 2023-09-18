import React, { useState } from "react";
import doSort from "../../../functions/doSort/doSort";
import GetWomanIdS from "../GetWomanIdS/GetWomanIdS";
function GetWomenIds({ id }) {
  const [Sort, setSort] = useState("id");

  return (
    <>
      <ul>
        {doSort(Sort, id).map((i) => (
          <li key={i.id}>
            <GetWomanIdS id={i.id} />
          </li>
        ))}
      </ul>
      <button onClick={() => setSort("id")}>Sort bu id</button>
      <button onClick={() => setSort("age")}>Sort bu age</button>
      <button onClick={() => setSort("name")}>Sort bu name</button>
      <p>{Sort}</p>
    </>
  );
}

export default GetWomenIds;
