import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {GoX} from 'react-icons/go'
import {NavStyle, Nav, NavBox, NavText, Logo, BoxLogo, Hamburger, NavButton} from './Nav.style'

function Index() {

    const [hamburg, setHamburg] = useState(true)
    const clickArive = () =>{
        const navMenu = document.getElementById('navMenu')
        navMenu.classList.add('displayMenu')
    }

    const clickLeave = () =>{
        const navMenu = document.getElementById('navMenu')
        navMenu.classList.remove('displayMenu')
    }

    const scrollToId = (elementProp, offsetProp) =>{

        const x = document.getElementsByTagName("BODY")[0];
        const a = document.getElementById(elementProp);
        const elementPosition = a.getBoundingClientRect().top;
        const position = x.getBoundingClientRect().top;
        
        window.scrollTo({
            top: elementPosition - position -offsetProp,
            behavior: "smooth"          
        })        
    }

    return (
            <Nav id="navbar" >
                <NavBox>
                    <BoxLogo>
                        <Logo></Logo>
                    </BoxLogo>
                    <NavStyle id="navMenu">
                        <NavButton onClick={()=>{
                            scrollToId('Home', 0)
                            clickLeave()
                        }} style={{cursor : "pointer"}}><NavText className="test">home</NavText></NavButton>
                        <NavButton onClick={()=>{
                            scrollToId('Skill', 70)
                            clickLeave()
                        }} style={{cursor : "pointer"}}><NavText>skill</NavText></NavButton>
                        <NavButton onClick={()=>{
                            scrollToId('Gallery', 85)
                            clickLeave()
                        }} style={{cursor : "pointer"}}><NavText>gallery</NavText></NavButton>
                        <NavButton onClick={()=>{
                            scrollToId('AboutMe', 70)
                            clickLeave()
                        }} style={{cursor : "pointer"}}><NavText>about me</NavText></NavButton>
                        <NavButton onClick={()=>{
                            scrollToId('ContactMe', 85)
                            clickLeave()
                        }} style={{cursor : "pointer"}}><NavText>contact me</NavText></NavButton>
                    </NavStyle>
                    <Hamburger id="hamburger">
                        {hamburg? <GiHamburgerMenu onClick={()=>{setHamburg(!hamburg); clickArive()}} id="hamburgerIcon" style={{color: 'white', fontSize: '2.5rem'}}></GiHamburgerMenu> : <GoX onClick={()=>{setHamburg(!hamburg); clickLeave()}
                        }  id="xIcon" style={{display: "flex", color: 'white', fontSize: '2.5rem'}} ></GoX>}    
                    </Hamburger>
                </NavBox>
            </Nav>
    )
}

export default Index

