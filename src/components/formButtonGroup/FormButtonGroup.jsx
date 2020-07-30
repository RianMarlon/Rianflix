import styled from 'styled-components';

const FormButton = styled.div`
    display: flex;
    flex-direction: row;

    button {
        align-self: flex-start;
        border-radius: 6px;
        color: var(--white);
        display: inline-block;
        font-size: 1rem;
        margin-right: 15px;
        padding: 10px 20px;
        transition: 0.5s opacity linear;
    }
    
    button:focus {
        outline: none;
    }

    button:hover {
        opacity: 0.5;
    }
`;

export default FormButton;
