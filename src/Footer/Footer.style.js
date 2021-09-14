import styled from 'styled-components'

export const Footer = styled.div`

    position: relative;
    background-image: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1));
`

export const FooterBox = styled.div`

    padding: 1.5rem 5rem;

    @media screen and (max-width : 768px){
        padding: 1rem 2rem;
    }

    @media screen and (max-width : 538px){
        padding: 1rem 1rem;
    }
`

export const FooterText = styled.div`

    font-size: clamp(0.7rem, 1.5vw, 5rem);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    

`

export const Copyright = styled.div`

    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 0;
    width: 100%;
    background: rgba(255,255,255,0.1);
    font-size: clamp(0.55rem, 1.5vw, 5rem);
    @media screen and (max-width : 768px){
        padding: 0.6rem 0;
    }
    @media screen and (max-width : 538px){
        padding: 0.4rem 0;
    }

`

export const CopyrightIcon = styled.div`

    margin-right: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterIconBox = styled.div`
    
    display: flex;
    justify-content: center;
    font-size: 2rem;
    margin-top: 1rem ;
    color: white;
    @media screen and (max-width : 768px){
        font-size: 1.5rem;
    }
    @media screen and (max-width : 538px){
        font-size: 1rem;
    }
`

export const FooterIcon = styled.div`

    display: flex;
    justify-content: space-between;
    width: 30%;
    
    &:nth-child(1){

        cursor: pointer;

    }

    @media screen and (max-width : 360px){
        width: 40%;
    }

    
`