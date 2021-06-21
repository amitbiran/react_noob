import "./styles.css";

function Header() {
  return (
    <header>
      <h1>Eve's Kitchen</h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      <p>I Am Groot!!!!</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>He Really Is Groot</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
