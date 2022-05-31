import Form from "./Form/index.js"
import Footer from "./Footer/index.js"
import Main from "./Main/index.js"

function App() {
  return (
    <div>
      <Main
        content={<Form />}
      />
      <Footer />
    </div>
  );
}

export default App;
