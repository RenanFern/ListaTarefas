import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    border: 1px solid #555;
    border-radius: 0.5rem;
    width: 1230px;
    font-size: 2rem;
    color: #fff;
    padding: 1rem;

    margin: 2rem auto;

    div {
        margin-top: 5px;
        margin-right: 5px;
    }

    input {
        background-color: transparent;
        flex: 1;
        border: none;
        outline: none;
        color: #fff;
        font-size: 1.25rem;

        &::placeholder {
            color: #fff;
        }
    }
`;
