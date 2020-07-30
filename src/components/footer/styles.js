import styled from 'styled-components';

const FooterBase = styled.footer`
    background: var(--black);
    border-top: 2px solid var(--primary);
    color: var(--white);
    padding-bottom: 20px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 20px;
    text-align: center;
    
    @media (max-width: 800px) {
        margin-bottom: 50px;
    }

    a > img {
        max-width: 100px;
    }
`;

export default FooterBase;
