import styled from 'styled-components'

export const Gallery = styled.div`

    background-image: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.9),rgba(0,0,0,0.8), rgba(0,0,0,0.7), rgba(0,0,0,0.6),rgba(0,0,0,0.5), rgba(0,0,0,0.4), rgba(0,0,0,0.3), rgba(0,0,0,0.28));
    background-color: whitesmoke;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GalleryBox = styled.div`

    height: 90%;
    width: 80%;
    @media screen and (max-width : 585px){
        width: 60%;
    }
    @media screen and (max-width : 360px){
        width: 90%;
    }
`

export const GalleryTitle = styled.h1`
    
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    color : white;
    text-transform: uppercase;
    @media screen and (max-width: 538px){
        font-weight: 400;
    }
`

export const GalleryContentBox = styled.div`

    height: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
    grid-auto-rows: 10rem;
    grid-gap: 1.22rem;
    margin: 1rem 0;
    
`

export const GalleryContent = styled.div`

    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 90%;
    background-position: center;
    background-image: url(${props => props.theme.image});
    transition: background-size 300ms ease-in;

    &:hover{
        transition: background-size 300ms ease-out;
        transition-property: background-size;
        background-size: 100%;
    }
`