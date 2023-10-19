import React from "react";
import { useState } from "react";

function DeletePeople({ arr, setDelete, peopleData }) {
  const [Target, setTarget] = useState();
  const submitTarget = (x) => {
    if (x == x.id) {
      peopleData.man.splice(x.id, 1);
    } else if (x != x.id) {
      peopleData.woman.splice(x.id, 1);
    }
    setTarget(x);
  };
  return (
    <>
      {Target == undefined ? (
        <>
          <ul>
            {arr.map((person) => (
              <li
                key={person.id}
                onClick={() => {
                  submitTarget(person.id);
                }}
              >
                {person.name}
              </li>
            ))}
          </ul>
        </>
      ) : (
        setDelete(undefined)
      )}
    </>
  );
}

export default DeletePeople;
