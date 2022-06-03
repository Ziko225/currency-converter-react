import "./style.css";

const Main = ({ content }) => (
    <main className="main">
        <h1 className="article__header">Kalkulator walutowy</h1>
        {content}
        <p>kurs z dnia 10.05.2022</p>
    </main>
)
export default Main