import styled from 'styled-components';

const CategoriaWrapper = styled.div`
    margin-bottom: 40px;
    margin-top: 50px;
    
    h1 {
        font-size: 2.25rem;
    }

    a {
        align-self: flex-start;
        display: inline-block;
        font-size: 1.2rem;
        margin-top: 40px;
    }

    a:hover {
        color: var(--primary);
    }

    ul {
        padding-left: 0;
        list-style: none;
    }

    .cadastrar, .limpar {
        font-weight: 400;
        cursor: pointer;
        padding: 14px 18px;
        border: none;
    }

    .cadastrar {
        background-color: #4169E1;
    }

    .limpar {
        background-color: #4F4F4F;
    }

    @media(max-width: 800px) {
        margin-bottom: 40px;
        margin-top: 80px;
    
        h1 {
            font-size: 1.9rem;
        }
    }
`;

export default CategoriaWrapper;
