import { Content, Header } from "./styled";

const Main = ({ content, title }) => {
    return (<Content>
        {title}
        <Header>Kalkulator walutowy</Header>
        {content}
    </Content>)
};

export default Main;
