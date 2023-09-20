import React from "react";
import peopleData from "../people.json";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

const people = [
  { id: 0, name: "Man", index: "M" },
  { id: 1, name: "Woman", index: "W" },
];
const old = [
  { id: 0, name: "<=25", index: "Y" },
  { id: 1, name: ">25", index: "O" },
];
let arr = [];
function GetManS() {
  const [Sex, setSex] = useState(people[0]);
  const [Age, setAge] = useState(old[0]);

  let p;
  if (Sex.index == "M") {
    p = peopleData.man;
  } else if (Sex.index == "W") {
    p = peopleData.woman;
  }
  arr = [];
  for (let i = 0; i < p.length; i++) {
    if (Age.index == "Y") {
      if (p[i].age <= 25) {
        arr.push(p[i]);
      }
    }
    if (Age.index == "O") {
      if (p[i].age > 25) {
        arr.push(p[i]);
      }
    }
  }

  return (
    <>
      <div>
        <h1>Choose a man</h1>
        <ul>
          {arr.map((person) => (
            <li key={person.id}>
              <a href={`/${Sex.index}/${person.id}`}>{person.name}</a>
            </li>
          ))}
        </ul>
        <Listbox value={Sex} onChange={setSex}>
          <Listbox.Button>{Sex.name}</Listbox.Button>
          <Listbox.Options>
            {people.map((person) => (
              <Listbox.Option key={person.id} value={person}>
                {person.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        <Listbox value={Age} onChange={setAge}>
          <Listbox.Button>{Age.name}</Listbox.Button>
          <Listbox.Options>
            {old.map((person) => (
              <Listbox.Option key={person.id} value={person}>
                {person.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </>
  );
}

export default GetManS;
