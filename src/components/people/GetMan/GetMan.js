import peopleData from "../people.json";
function GetMan() {
  return (
    <>
      <div>
        <h1>Choose a man</h1>
        <ul>
          {peopleData.man.map((person) => (
            <li key={person.id}>
              <h2>{person.name}</h2>
              <p>Возраст: {person.age}</p>
              <p>{person.shortDescription}</p>
              <p>{person.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default GetMan;
