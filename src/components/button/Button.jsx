import styled from 'styled-components';

const Button = styled.button`
    border: 1px solid var(--white);
    border-radius: 5px;
    box-sizing: border-box;
    color: var(--white);
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    outline: none;
    padding: 16px 24px;
    text-decoration: none;
    transition: border-color .3s;

    &:hover, &:focus {
        border-color: var(--primary);
        opacity: .75;
    }
`;

export default Button;
