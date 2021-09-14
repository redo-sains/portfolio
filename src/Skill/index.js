import {Skill, SkillBox, SkillPercent} from './Skill.style'
import {Percent} from './Percent.comp'
import {useRef, useEffect} from "react"
import { useIntersection } from 'react-use'

const Index = () => {

    const skillRef = useRef(null) 
    const intersection = useIntersection(skillRef,{
        root: null,
        rootMargin: "-40px",
        threshold: 0.6
    })

    useEffect(() => {
        const box = document.querySelectorAll('.percent')

        
        if(skillRef.current != null){
            intersection && intersection.intersectionRatio < 0.6 ?  box.forEach(box=>
                box.classList.add("zeroPercent")
            ) : box.forEach(box => box.classList.remove('zeroPercent')
                
            )
        }
        
    }, [intersection])

    return (
        <Skill id="Skill" >
            <SkillBox>
                <SkillPercent ref={skillRef}>
                    <Percent color='red' percentage='80%' skill='Html'/>
                    <Percent color='green' percentage='70%' skill='JavaScript'/>
                    <Percent color='white' percentage='60%' skill='PHP'/>
                    <Percent color='yellow' percentage='80%' skill='Css'/>
                    <Percent color='purple' percentage='70%' skill='ReactJs'/>
                </SkillPercent>
            </SkillBox>
        </Skill>
    )
}

export default Index