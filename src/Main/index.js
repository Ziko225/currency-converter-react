import { Content, Header, Bottom } from "./styled";

const Main = ({ content, title }) => {
    return (<Content>
        {title}
        <Header>Kalkulator walutowy</Header>
        {content}
        <Bottom>kurs z dnia 10.05.2022</Bottom>
    </Content>)
};

export default Main;
