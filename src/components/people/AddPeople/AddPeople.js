import React from "react";
import { useState } from "react";

function AddPeople({ Add, setAdd, peopleData }) {
  const [inputField, setInputField] = useState({
    name: "",
    age: 0,
    shortDescription: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet. Non dolorem libero rem modi animi ab exercitationem ullam ut sapiente vero qui laudantium soluta vel Quis blanditiis non libero exercitationem. Ea recusandae fugiat rem vitae consequatur est placeat aliquam aut voluptatum minus.",
  });
  const submitButton = () => {
    if (Add == "m") {
      inputField.id = peopleData.man.length;
      inputField.partner = [0, 2, 4];
      peopleData.man.push(inputField);
    } else if (Add == "w") {
      inputField.id = peopleData.woman.length;
      peopleData.woman.push(inputField);
    }
    console.dir(peopleData);
    setAdd(undefined);
  };
  const inputsHandler = (e) => {
    setInputField({ [e.target.name]: e.target.value });
  };
  return (
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

      <input
        type="text"
        name="shortDescription"
        onChange={inputsHandler}
        placeholder="shortDescription"
        value={inputField.shortDescription}
      />

      <br />

      <input
        type="text"
        name="description"
        onChange={inputsHandler}
        placeholder="description"
        value={inputField.description}
      />

      <br />
      <button onClick={submitButton}>Submit Now</button>
    </div>
  );
}

export default AddPeople;
