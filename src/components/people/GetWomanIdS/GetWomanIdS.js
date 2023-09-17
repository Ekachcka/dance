import React from "react";
import peopleData from "../people.json";
function GetWomanIdS({ id }) {
  let person = peopleData.woman[id];
  return (
    <>
      <div>
        <a href={`/W/${person.id}`}>
          {person.id} {person.name} {person.age}
        </a>
      </div>
    </>
  );
}

export default GetWomanIdS;
