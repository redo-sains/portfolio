import React, {useRef, useEffect} from 'react'
import { useIntersection } from 'react-use';
import {Home, HomeWelcome as Welcome, HomeText, HomeButton, ProfilePicture} from './Home.style'

const Index = () => {

    const homeRef = useRef(null), textRef  = useRef(null); 
    const intersection = useIntersection(homeRef, {
        root: null,
        rootMargin : "0px",
        threshold: 0.9
    })

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        const navbarStyled = getComputedStyle(navbar);

        if(homeRef.current!= null){
            intersection && intersection.intersectionRatio > 0.9 ? navbar.style.cssText = `
                background-color : transparent;
            ` 
            : navbar.style.cssText = `
                background-color : royalblue;
                height: calc(${navbarStyled.height} * 1.2);
                box-shadow: 0px 3px 5px rgba(0,0,0,0.5);
            `
        }
    },[intersection])

    const button1 = {
        color1 : 'royalblue',
        color2 : 'transparent',
        color3 : 'white',
        color4 : 'royalblue'
    }

    const button2 = {
        color1 : 'transparent',
        color2 : 'royalblue',
        color3 : 'royalblue',
        color4 : 'white'
    }

    return (
        <Home id="Home" ref={homeRef}>
            <Welcome>
                <HomeText ref={textRef}>my portfolio <span style={{color : 'royalblue', fontWeight : '300'}}>Website</span></HomeText>
                <div>
                    <ProfilePicture src='https://picsum.photos/150/150' alt="Profile"></ProfilePicture>
                </div>
                <div>
                    <HomeButton id="button" theme={button1} onClick={()=>{
                        window.location.href='/#'
                    }}>Button</HomeButton>
                    <HomeButton theme={button2} onClick={()=>{
                        window.location.href='/#'
                    }} >Button2</HomeButton>
                </div>
            </Welcome>
        </Home>
    )
}

export default Index
