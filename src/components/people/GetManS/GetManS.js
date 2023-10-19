import React from "react";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import AddPeople from "../AddPeople/AddPeople";
import UpdatePeople from "../UpdatePeople/UpdatePeople";
import DeletePeople from "../DeletePeople/DeletePeople";

const people = [
  { id: 0, name: "All", index: "A" },
  { id: 1, name: "Woman", index: "W" },
  { id: 2, name: "Man", index: "M" },
];
const old = [
  { id: 0, name: "All", index: "A" },
  { id: 1, name: ">25", index: "O" },
  { id: 2, name: "<=25", index: "Y" },
];
let arr = [];
function GetManS({ peopleData }) {
  const [Sex, setSex] = useState(people[0]);
  const [Age, setAge] = useState(old[0]);
  const [Add, setAdd] = useState();
  const [Update, setUpdate] = useState();
  const [Delete, setDelete] = useState();
  let p = [];
  if (Sex.index == "M") {
    p = peopleData.man;
  } else if (Sex.index == "W") {
    p = peopleData.woman;
  } else if (Sex.index == "A") {
    p = peopleData.man.concat(peopleData.woman);
  }
  if (Age.index != "A") {
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
  } else {
    arr = p;
  }

  return (
    <>
      <div>
        <h1>Choose a man</h1>
        <ul>
          {arr.map((person) => (
            <li key={person.id}>
              <a
                href={`/${person.partner != undefined ? "M" : "W"}/${
                  person.id
                }`}
              >
                {person.name}
              </a>
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
        <button
          onClick={() => {
            setAdd("m");
          }}
        >
          add man
        </button>
        <button
          onClick={() => {
            setAdd("w");
          }}
        >
          add woman
        </button>
        {Add != undefined ? (
          <AddPeople Add={Add} setAdd={setAdd} peopleData={peopleData} />
        ) : (
          <></>
        )}
        <div>
          <button
            onClick={() => {
              setUpdate("a");
            }}
          >
            Update
          </button>
          {Update != undefined ? (
            <UpdatePeople
              Update={Update}
              setUpdate={setUpdate}
              peopleData={peopleData}
              arr={arr}
            />
          ) : (
            <></>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              setDelete("a");
            }}
          >
            Delete
          </button>
          {Delete != undefined ? (
            <DeletePeople
              Update={Delete}
              setUpdate={setDelete}
              peopleData={peopleData}
              arr={arr}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default GetManS;
