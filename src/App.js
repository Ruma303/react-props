import secondCardImage from "./img/amirr-zolfaqari-HDh6sSBxjQI-unsplash.jpg";


//$ Prima della destrutturazione
/* const MyComponent = (props) => {
    console.log(props)
    console.log(props.name)
    console.log(props.age)
    return (<>

        <h2>{'Hello'.toUpperCase()}, my name is {props.name}.</h2>
        <p> I am {props.age} years old.</p>
        <img
            src={props.img}
            className="img-class"
            alt={`Foto di ${props.name}`}
        />
    </>)
} */

//$ Dopo la destrutturazione
/* console.log("children: ", children); */



//const MyComponent = (props) => {
//const { name, age, img } = props;  //$ Destrutturazione
const MyComponent = ({ name, age, img, children }) => {
    let myStyle = {
        color: name === 'Mario' ? 'red' : 'blue',
        //display: name === undefined ? 'none' : 'block',
    }
    return (
        <>
            {/* $ Destrutturazione */}
            <h2 style={myStyle}>  {"Hello".toUpperCase()}, my name is
                {name ? ` ${name}` : ' Tizio'}. </h2>
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
            <MyComponent name="Luisa" age={29} />
 */}
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
            {/* <MyComponent {...firstCard} />
            <MyComponent {...secondCard} /> */}


            {/* Props.children */}
            {/* <MyComponent {...firstCard}>
                <> I love coding! </>
            </MyComponent>
            <MyComponent {...secondCard}>
                <>I'm a designer!</>
            </MyComponent> */}



            {/* Array Mapping */}
            {/* {array.map(user => {
                return <MyComponent {...user} />
            })} */}

            {/* INDEX SCONSIGLIATO */}
            {/* {array.map((user, index) => {
                return <MyComponent {...user} key={user.index} />
            })} */}

            {/* INDEX CONSIGLIATO */}
            {/* {array.map((user, index) => {
                return <MyComponent {...user} key={user.id} />
            })} */}


            {/* Destrutturazione nell'array mapping */}
            {array.map(({ id, name, age, img }) => {
                return <MyComponent
                    key={id}
                    name={name}
                    age={age + 10}
                    img={img}
                />
            })}
        </div>
    );
}
export default App;

/* const firstCard = {
    name: "Mario",
    age: 35,
    img: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
}
const secondCard = {
    name: "Luisa",
    age: 29,
    img: secondCardImage
    //'img/amirr-zolfaqari-HDh6sSBxjQI-unsplash.jpg'

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
    {
        id: 3,
        name: "Luisa",
        age: 29,
        img: secondCardImage,
    },
    {
        id: 4,
        name: "Luisa",
        age: 29,
        img: secondCardImage,
    },
    {
        id: 5,
        name: "Luisa",
        age: 29,
        img: secondCardImage,
    },
    {
        id: 6,
        name: "Luisa",
        age: 29,
        img: secondCardImage,
    },
];


