import secondCardImage from './img/amirr-zolfaqari-HDh6sSBxjQI-unsplash.jpg'
const MyComponent = (props) => {
    console.log(props);
    console.log(props.name);
    console.log(props.age);
    return (
    <>
        <h2>{'Hello'.toUpperCase()}, my name is {props.name}.</h2>
        <p> I am {props.age} years old.</p>
        <img
            src={props.img}
            className="img-class"
            alt={`Foto di ${props.name}`}
        />
    </>
    )
}
function App() {
    {/* { console.log(props) } */}
  return (
    <div className="App">
        <h1>Studiamo le Props</h1>
        {/* <MyComponent name="Mario" age={30 + 5} />
        <MyComponent name="Luisa" age={29} /> */}
        <MyComponent
            name={firstCard.name}
            age={firstCard.age}
            img={firstCard.img}
        />
        <MyComponent
            name={secondCard.name}
            age={secondCard.age}
            img={secondCard.img}
        />
    </div>
  );
}

export default App;

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

//appunti img e alt