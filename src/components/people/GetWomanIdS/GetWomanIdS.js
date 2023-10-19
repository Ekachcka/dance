import React from "react";
function GetWomanIdS({ id, peopleData }) {
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
