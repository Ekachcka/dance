import React from "react";
import { useState } from "react";

function UpdatePeople({ arr, setUpdate, peopleData }) {
  const [inputField, setInputField] = useState({
    id: -1,
    name: "",
    age: 0,
  });
  const [Target, setTarget] = useState();
  const submitTarget = (x) => {
    setTarget(x);
    inputField.id = arr[Target].id;
    inputField.name = arr[Target].name;
    inputField.age = arr[Target].age;
  };
  const submitButton = () => {
    if (inputField.name != peopleData[inputField.id].name) {
      peopleData[inputField.id].name = inputField.name;
    }
    if (inputField.age != peopleData[inputField.id].age) {
      peopleData[inputField.id].age = inputField.age;
    }
    console.dir(peopleData);
    setUpdate(undefined);
  };
  const inputsHandler = (e) => {
    inputField[e.target.name] = e.target.value;
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
        <>
          <div>
            <input
              type="text"
              name="name"
              onChange={inputsHandler}
              placeholder="name"
              value={inputField.name}
            />

            <br />

            <input
              type="number"
              name="age"
              onChange={inputsHandler}
              placeholder="age"
              value={inputField.age}
            />

            <br />

            <button onClick={submitButton}>Submit Now</button>
          </div>
        </>
      )}
    </>
  );
}

export default UpdatePeople;
