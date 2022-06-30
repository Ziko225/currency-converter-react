import Form from "./Form/index.js";
import Footer from "./Footer/index.js";
import Main from "./Main/index.js";
import Time from "./Clock/index.js";

function App() {
  return (
    <div>
      <Main
        title={<Time />}
        content={<Form />}
      />
      <Footer />
    </div>
  );
};

export default App;