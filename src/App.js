const MyComponent = (props) => {
    console.log(props);
    console.log(props.name);
    console.log(props.age);
    return (
    <>
        <h2>Hello, my name is {props.name}. </h2>
        <p> I am {props.age} years old.</p>
        <img src={props.img}/>
    </>
    )
}
function App() {
    {/* { console.log(props) } */}
  return (
    <div className="App">
        <h1>Studiamo le Props</h1>
        {/* <MyComponent name="Mario" age={35} />
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
    img: "https://unsplash.com/it/foto/J4zZNfjbppE"
}
const secondCard = {
    name: "Luisa",
    age: 29,
    img: "img/amirr-zolfaqari-HDh6sSBxjQI-unsplash.jpg"
}

//appunti img e alt