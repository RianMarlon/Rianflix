import styled from 'styled-components';

const FooterBase = styled.footer`
    background: var(--black);
    border-top: 2px solid var(--primary);
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 20px;
    padding-bottom: 20px;
    color: var(--white);
    text-align: center;
    @media (max-width: 800px) {
        margin-bottom: 50px;
    }

    a > img {
        max-width: 100px;
    }
`;

export default FooterBase;
