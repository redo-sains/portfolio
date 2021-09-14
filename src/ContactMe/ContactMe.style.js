import styled from 'styled-components'

export const ContactMe = styled.div`

    
    background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7));
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
`

export const ContactMeTitle = styled.h1`
    
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

export const ContactMeBox = styled.div`

    margin: 1rem 0;
    width: 50%;
    display: grid;
    column-gap: 0.15rem;
    grid-template-columns: repeat(2,minmax(1rem,1fr));
    @media screen and (max-width : 768px){
        grid-template-columns: repeat(1,minmax(1rem,1fr));
    }
    @media screen and (max-width : 576px){
        width: 80%;
    }
    @media screen and (max-width : 360px){
        width: 95%;
    }

`

export const ContactMeInputBox = styled.div`

    grid-column: ${props => props.theme.gridProps};
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    height: 100%;
    @media screen and (max-width : 768px){
        grid-column: 1/-1;
    }
`
export const ContactMeInputLabel = styled.label`

    margin: 0.5rem 0;
    display: flex;
    justify-content: start;
    color: white;

    @media screen and (max-width: 538px){
        font-weight: 200;
    }

`

export const ContactMeInput = styled.input`
    
    padding: .7rem 0.5rem;
    background: transparent;
    border: 1px solid rgba(255,255,255, 0.1);
    border-radius: 3px;
    outline-color: white;
    color: white;
    transition: .5s;
    border-radius: 5px;
    box-shadow: inset 0 0 2px rgba(0,0,0,1);
    font-size: 1.2rem;
    
    &::placeholder{
        color: rgba(255,255,255, 0.3);
        font-size: .8rem;
    }

    &:hover{
        transition: .5s;
        box-shadow: inset 0 0 3px rgba(255,255,255,1);
        border: 1px solid rgba(255,255,255, 0.3);
    }

`

export const ContactMeTextArea = styled.textarea`

    height: 100px;
    background: transparent;
    box-shadow: inset 0 0 2px rgba(0,0,0,1);
    border: 1px solid rgba(255,255,255, 0.1);
    border-radius: 3px;
    outline-color: white;
    color: white;
    transition: .5s;
    border-radius: 5px;
    font-size: 1.2rem;
    padding: .7rem 0.5rem;
    &::placeholder{
        color: rgba(255,255,255, 0.3);
        font-size: .8rem;
    }

    &:hover{
        transition: .5s;
        box-shadow: inset 0 0 3px rgba(255,255,255,1);
        border: 1px solid rgba(255,255,255, 0.3);
    }
`