import "./styles.css";

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>
        I Am Groot!!!! Groot Is {props.adjective} Groot has a resturans. we
        serve:
      </p>
      <ul style={{ textAlign: "Left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>He Really Is Groot! and the year is {props.year} in groot years!</p>
    </footer>
  );
}

const dishes = ["pasta", "tofu", "chicken tika masala"];
const dishesObjects = dishes.map((dish, i) => ({
  id: i,
  title: dish
}));

export default function App() {
  return (
    <div className="App">
      <Header name="Amit" />
      <Main adjective="amazing" dishes={dishesObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}
