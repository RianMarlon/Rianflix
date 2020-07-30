/* eslint-disable linebreak-style */
import styled from 'styled-components';

const VideoCardContainer = styled.a`
    align-items: flex-end;
    background-image: ${({ url }) => `url(${url})`};
    background-position: center;
    background-size: cover;
    border: 2px solid;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    display: flex;
    flex: 0 0 298px;
    height: 197px;
    overflow: hidden;
    padding: 16px;
    position: relative;
    transition: opacity .3s;
    text-decoration: none;
    width: 298px;

    &:hover,
    &:focus {
        opacity: .5;
    }
    
    &:not(:first-child) {
        margin-left: 20px;
    }
`;

export default VideoCardContainer;
