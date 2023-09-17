import React from "react";
import peopleData from "../people.json";
function GetManS() {
  return (
    <>
      <div>
        <h1>Choose a man</h1>
        <ul>
          {peopleData.man.map((person) => (
            <li key={person.id}>
              <a href={`/M/${person.id}`}>{person.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default GetManS;
