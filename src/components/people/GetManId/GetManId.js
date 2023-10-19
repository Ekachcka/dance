function GetManId({ id, peopleData }) {
  let person = peopleData.man[id];
  return (
    <>
      <div>
        <h1>Мужчины</h1>
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

export default GetManId;
