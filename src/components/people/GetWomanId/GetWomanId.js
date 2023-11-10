function GetWomanId({ id, peopleData }) {
  let person = peopleData.people[id];
  return (
    <>
      <div>
        <ul>
          {
            <li key={person.id}>
              <h2>{person.name}</h2>
              <p>Возраст: {person.age}</p>
              <p>{person.shortDescription}</p>
              <p>{person.description}</p>
            </li>
          }
        </ul>
      </div>
    </>
  );
}

export default GetWomanId;
