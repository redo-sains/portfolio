import styled from 'styled-components'


export const Nav = styled.nav`

    height: 5rem;  
    width: 100%;
    position: fixed;
    transition: 0.5s;
    z-index: 99;
    @media screen and (max-width: 768px){
        height: 4rem;
    }

    @media screen and (max-width: 548px){
        height: 3.5rem;
    }
    @media screen and (max-width: 548px){
        height: 3.25rem;
    }

`

export const NavBox = styled.div`

    margin: 0 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    
    
    @media screen and (max-width: 768px){
        margin: 0 2rem;
    }

    @media screen and (max-width: 548px){
        margin: 0 1rem;
    }

`

export const Logo = styled.h1`  

    &::after{
        content: "redo";
        text-transform: uppercase;
        color: white;
        font-weight: 1000;
        font-size: 3rem;
    }

    @media screen and (max-width: 768px){
            &::after{
            content: "re";
        }
    }

    @media screen and (max-width: 548px){
            &::after{
            content: "r";     
        }
    }


`

export const NavStyle = styled.div`

    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: ease-in 1s;

    @media screen and (max-width: 768px){
        opacity: 0.5;
        width: 100%;
        height: 70vh;
        flex-direction: column;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        padding-top: 10%;
        transform: translateY(-120%);
        
    }

    @media screen and (max-width: 548px){
        
        height: 80vh;
    }
`

export const NavButton = styled.button`
    cursor: pointer;
    border: none;
    background: transparent;
`

export const NavText = styled.h3 `

    text-transform: capitalize;
    text-decoration: none;
    color: white;
    font-weight: 1000;
    letter-spacing: 0.2rem;
    transition: ease-in 0.2s;
    &:hover{
        transition: ease-out 0.25s;
        color: royalblue;
    }
`

export const BoxLogo = styled.div`

    display: flex;
    align-items: center;
    height: 100%;
`

export const Hamburger = styled.div`

    display: none;

    @media screen and (max-width: 768px){
        display: flex;
        
    }

    @media screen and (max-width: 548px){
        display: flex;
    }

`



