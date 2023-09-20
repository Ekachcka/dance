import React from "react";
import peopleData from "../people.json";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

const people = [
  { id: 0, name: "Man", index: "M", unavailable: false },
  { id: 1, name: "Woman", index: "W", unavailable: false },
];
function GetManS() {
  const [Sex, setSex] = useState(people[0]);

  let p;
  if (Sex.index == "M") {
    p = peopleData.man;
  } else if (Sex.index == "W") {
    p = peopleData.woman;
  }

  return (
    <>
      <div>
        <h1>Choose a man</h1>
        <ul>
          {p.map((person) => (
            <li key={person.id}>
              <a href={`/${Sex.index}/${person.id}`}>{person.name}</a>
            </li>
          ))}
        </ul>
        <Listbox value={Sex} onChange={setSex}>
          <Listbox.Button>{Sex.name}</Listbox.Button>
          <Listbox.Options>
            {people.map((person) => (
              <Listbox.Option
                key={person.id}
                value={person}
                disabled={person.unavailable}
              >
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
