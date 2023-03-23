import styled from "styled-components";

export const Button = styled.button`
    background: #4e6984;
    cursor: pointer;
    border-radius: 30px;
    border: 3px solid #203040;
    color: white;
    font-size: 25px;
`;

export const Input = styled.input`
    padding: 10px;
    background-color: #ebeffb;
    border: none;
    outline: none;
    border-bottom: 2px dashed #000;
    color: #000;
    margin-bottom: 20px;
`;
export const Container = styled.div`
    margin: 2em auto;
    display: block;
    width: 43%;
    border: 3px dashed #8c8c8c;
    padding: 0 2em 2em 2em;
    border-radius: 20px;

    @media (max-width: 1000px) {
        margin: 1em auto;
        width: 70%;
    }
`;

export const Title = styled.h1`
    text-align: center;
    color: #3b3b3b;
`;

export const Form = styled.form`
    display: flex;
    justify-content: space-evenly;
    
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Main = styled.div`
    margin-top: 2em;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 4px 10px 8px 10px;
    border-radius: 20px;
    width: 90%;
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px dashed black;
`;

export const WeatherDetail = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const SpanOne = styled.span`
    margin: 0 inherit;
    font-size: 1.5em;
    display: block;
`;
export const SpanTwo = styled.span`
    color: gray;
    fontsize: 0.7em;
`;
export const SpanThree = styled.span`
    fontsize: 0.8em;
    margin-top: -30px;
    font-weight: bold;
`;

export const OuterFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InnerFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const H1 = styled.h1`
    font-size: 2.9rem;
    margin: unset;
`;
export const Image = styled.img`
    width: 100px;
    margin-top: 6px;
`;
