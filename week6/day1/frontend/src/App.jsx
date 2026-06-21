// Uncomment one at a time
import Card from "./components/Card";
// import Card from "./components/Xcard";

function App() {
  return (
    <>
      {/* <Header/> */}
      <main className="flex flex-wrap gap-4 justify-center">

        <Card
          name="Conquerer mateen"
          age={25}
          department="Engineering"
          city="Duhok"
        />

        <Card
          name="Lord Snow"
          age={17}
          department="Marketing"
          city="Erbil"
        > Test </Card>

        <Card
          name="Sam Ismail"
          age={19}
          department="Sales"
          city="Mosul"
        > Test </Card>

      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App