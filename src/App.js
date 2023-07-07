import secondCardImage from "./img/amirr-zolfaqari-HDh6sSBxjQI-unsplash.jpg";
/* const MyComponent = (props) => { */
const MyComponent = ({ name, age, img, children }) => {
  /* console.log("children: ", children); */
  /* const { name, age, img } = props; */ //$ Destrutturazione
  /* console.log(props);
    console.log(props.name);
    console.log(props.age); */
  return (
    <>
      {/* $ Interpolare Props */}
      {/* <h2>{'Hello'.toUpperCase()}, my name is {props.name}.</h2>
        <p> I am {props.age} years old.</p>
        <img
            src={props.img}
            className="img-class"
            alt={`Foto di ${props.name}`}
        /> */}
      {/* $ Destrutturazione */}
      <h2>{"Hello".toUpperCase()}, my name is {name}. </h2>
      <p> I am {age} years old.</p>
      <img src={img} className="img-class" alt={`Foto di ${name}`} />
      <em>{children}</em>
    </>
  );
};
function App() {
 /*  {
    { console.log(props) }
  } */
  return (
    <div className="App">
      <h1>Studiamo le Props</h1>

      {/* Valori assegnati direttamente agli attributi */}
      {/* <MyComponent name="Mario" age={30 + 5} />
        <MyComponent name="Luisa" age={29} /> */}

      {/* Valori provenienti da oggetti */}
      {/* <MyComponent
            name={firstCard.name}
            age={firstCard.age}
            img={firstCard.img}
        />
        <MyComponent
            name={secondCard.name}
            age={secondCard.age}
            img={secondCard.img}
        /> */}


      {/* Spread Operator */}
      {/*  <MyComponent {...firstCard} />
        <MyComponent {...secondCard} /> */}



      {/* Props.children */}
      {/* <MyComponent {...firstCard}>
          <> I love coding! </>
        </MyComponent>
        <MyComponent {...secondCard}>
            <>I'm a designer!</>
        </MyComponent> */}



        {/* Array Mapping */}
        {array.map(user => {
            return <MyComponent {...user} key={user.img}/>
        })}

        {/* INDEX SCONSIGLIATO */}
        {/* {array.map((user, index) => {
            return <MyComponent {...user} key={user.index}/>
        })} */}

        {/* INDEX CONSIGLIATO */}
        {/* {array.map((user, index) => {
            return <MyComponent {...user} key={user.id}/>
        })} */}
    </div>
  );
}
export default App;
/*
const firstCard = {
    name: "Mario",
    age: 35,
    img: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
}
const secondCard = {
    name: "Luisa",
    age: 29,
    img: secondCardImage
}
 */
// % Array Mapping
const array = [
    {
      id: 1,
      name: "Mario",
      age: 35,
      img: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    },
    {
      id: 2,
      name: "Luisa",
      age: 29,
      img: secondCardImage,
    },
];

