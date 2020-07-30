import styled from 'styled-components';

export const Title = styled.h3`
    background: red;
    border-radius: 4px;
    display: inline-block;
    font-size: 35px;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    margin-bottom: 16px;
    padding: 20px;

    @media (max-width: 800px) {
        font-size: 18px;
        padding: 10px;
    }
`;

export const Description = styled.a`
    display: inline-block;
    margin-left: 16px;

    @media (max-width: 800px) {
        display: block;
        margin-bottom: 16px;
        margin-left: 0;
    }
`;

export const VideoCardList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    overflow-x: auto;
    padding-bottom: 32px;
    padding-left: 0;
    
    li {
        margin-right: 16px;
    }
`;

export const VideoCardGroupContainer = styled.section`
    color: white;
    margin-bottom: 16px;
    margin-left: 5%;
    margin-right: 5%;
    min-height: 197px;
`;
