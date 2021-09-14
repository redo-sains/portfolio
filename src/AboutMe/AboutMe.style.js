import styled from 'styled-components'

export const AboutMe = styled.div`

    display: flex;
    justify-content: center;    
    background-image: linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.24), rgba(0,0,0,0.22), rgba(0,0,0,0.2));
    background-color: whitesmoke;
`

export const AboutMeBox = styled.div`

    display: flex;
    height: 100%;
    margin: 3rem 0;
    width: 85%;

    @media screen and (max-width : 768px){

        width: 95%;
    }

    @media screen and (max-width: 680px){
        justify-content: space-between;
    }

`

export const AboutMeText = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    @media screen and (max-width: 680px){
        width: 60%;
    }
    @media screen and (max-width: 550px){
        width: 100%;
    }
`

export const AboutMeTitleBox = styled.div `

    display: flex ;
    align-items: center;
    justify-content: center;  
    height: 10%;
`

export const AboutMeTitle = styled.h1`

    text-transform: uppercase;

    @media screen and (max-width: 538px){
        font-weight: 400;
    }
`

export const AboutMeParagraph = styled.p`

    text-align: left;
    font-size: clamp(0.8rem,1.2vw,2rem);
`

export const AboutMeContent = styled.div`
    
`

export const AboutMeImageBox = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;    
    width: 50%;
    @media screen and (max-width: 768px){
        justify-content: right;
    }

    @media screen and (max-width: 680px){
        width: 30%;
    }

    @media screen and (max-width: 550px){
        display: none;
    }
`

export const AboutMeImage = styled.img`

    width: 400px;
    height: 400px;

    @media screen and (max-width : 1000px){
        width: 350px;
        height: 350px;
    }
    @media screen and (max-width : 900px){
        width: 300px;
        height: 300px;
    }
    @media screen and (max-width: 680px){
        width: 200px;
        height: 200px;
    }
        

`

