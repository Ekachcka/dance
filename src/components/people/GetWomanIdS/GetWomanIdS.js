import React from "react";
import peopleData from "../people.json";
function GetWomanIdS({ id }) {
  let person = peopleData.woman[id];
  return (
    <>
      <div>
        <a href={`/W/${person.id}`}>{person.name}</a>
      </div>
    </>
  );
}

export default GetWomanIdS;
