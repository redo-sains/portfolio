import styled from 'styled-components'

export const Skill = styled.div`
    
    background: rgba(0,0,0,1);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
`

export const SkillBox = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
    width: 95%;
    position: relative;

`
export const SkillPercent = styled.div`

    border-left: 2px solid white;
    border-bottom: 2px solid white;
    border-bottom-left-radius: 5px;
    width: 70%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;

    @media screen and (max-width : 768px){
        width : 90%;
        height: 90%;
    }

    @media screen and (max-width : 546px){
        width : 100%;
        height: 80%;
    }
    

`
export const Percent = styled.div`

    height: ${props => props.theme.percentage};
    width: 100%;
    background-color: ${props => props.theme.color};
    transition: ease-in .5s;
    
`

export const SkillTitle = styled.h3`

    color: white;
    position : absolute;
    bottom: 0;
    transform: translateY(200%);
    font-size: 1.5rem;
    @media screen and (max-width : 768px){
        transform: translateY(150%);
        font-size: 1rem;
    }

    @media screen and (max-width : 546px){
        transform: translateY(100%);
    }
    @media screen and (max-width : 360px){
        font-size: .75rem;
        transform: translateY(75%);
    }
`

export const SkillTittleBox = styled.div`

    display: flex;
    justify-content: center;
`

