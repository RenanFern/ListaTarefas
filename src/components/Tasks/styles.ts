import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
};

export const Container = styled.div<ContainerProps>`
    color: #d7d7d7;
    width: 1230px;
    font-size: 1.5rem;

    margin: auto;

    label {
        div {
            display: flex;
        }
        margin: 1rem;
        background-color: #20212c;
        padding: 1rem;
        border-radius: 0.5rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

        text-decoration: ${(props) =>
            props.done ? 'line-through' : 'initial'};
    }

    input {
        margin-right: 5px;
        width: 25px;
        height: 25px;
    }
    .deleteTask {
        cursor: pointer;
        font-size: 2rem;
    }
`;
