import React, { useState } from "react";
import peopleData from "../people.json";
import GetWomanIdS from "../GetWomanIdS/GetWomanIdS";
function GetWomenIds({ id }) {
  const [Sort, setSort] = useState("id");
  const arr = [];
  for (let i = 0; i < peopleData.woman.length; i++) {
    for (let j = 0; j < peopleData.man[id].partner.length; j++) {
      if (i == j) {
        arr.push(peopleData.woman[i]);
      }
    }
  }
  for (let i = 0; i < peopleData.woman.length; i++) {
    if (Sort == "id") {
      arr.sort((a, b) => {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
      });
      console.log(arr);
    }
    if (Sort == "age") {
      arr.sort((a, b) => {
        if (a.age < b.age) {
          return 1;
        }
        if (a.age > b.age) {
          return -1;
        }
      });
      console.log(arr);
    }
    if (Sort == "name") {
      arr.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
      });
      console.log(arr);
    }
  }
  return (
    <>
      <ul>
        {arr.map((i) => (
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
