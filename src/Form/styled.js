import styled, { css } from "styled-components";

export const Input = styled.input`
    text-align: center;
    height: 100%;
    width: 180px;
    margin: 10px;
    border-width: 0.1px;
    border-radius: 20px;
    &:disabled {
        background-color: #ddd;
        color: black;
    }
`;

export const Select = styled.select`
    text-align: center;
    width: 60px;
    height: 100%;
    border-width: 1px;
    background-color: white;
    border-radius: 15px;
    cursor:pointer;
    ${({ grey }) => grey && css`
        background-color: #ddd;
    `}
`;

export const Block = styled.div`
    height: 30px;
    padding: 10px;
`;