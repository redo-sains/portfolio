import styled from 'styled-components'


export const Home = styled.section`

    background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5),rgba(0,0,0,0.6),rgba(0,0,0,0.7),rgba(0,0,0,0.8),rgba(0,0,0,0.9),rgba(0,0,0,1)), url('https://picsum.photos/1200/900');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    align-items: center;

`

export const HomeWelcome = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height : 50%;
    width: 100%;
    @media screen and (max-width : 768px){
        height : 55%;
    }

    @media screen and (max-width : 546px){
        height : 60%;
    }
    @media screen and (max-width : 368px){
        height : 70%;
    }
`

export const HomeText = styled.h1`

    color: white;
    text-transform: uppercase;
    margin: 0;
    font-size: 3rem;
    font-weight: 1000;
    @media screen and (max-width : 768px){
        font-size: 2.5rem;
        font-weight: 800;
    }

    @media screen and (max-width : 546px){
        font-size: 2rem;
        font-weight: 600;
    }

`

export const ProfilePicture = styled.img`

    border-radius: 50%;
    width: 150px;
    height: 150px;
    @media screen and (max-width : 768px){
        width: 135px;
        height: 135px;
    }

    @media screen and (max-width : 546px){
        width: 120px;
        height: 120px;
    }
`

export const HomeButton = styled.button`

    
    text-decoration : none;
    background-color: ${props => props.theme.color1};
    color: ${props => props.theme.color3};
    border-radius: 2px;
    padding: 0.7rem 1.5rem;
    text-transform: uppercase;
    outline: 1px solid ${props => props.theme.color2};
    transition: ease-in 0.25s;
    margin: 0 1rem;
    border: none;
    cursor: pointer;

    &:hover{
        
        transform: scale(1.1);
        transition: ease-out 0.5s;
        outline: 1px solid ${props => props.theme.color1};
        background-color: ${props => props.theme.color2};
        color: ${props => props.theme.color4};
        
    }

    @media screen and (max-width : 768px){
        padding: 0.6rem 1.25rem;
    }

    @media screen and (max-width : 546px){
        padding: 0.5rem 1rem;
    }
`
