import { Percent as Box, SkillTitle, SkillTittleBox } from "./Skill.style"


export const Percent = (props) =>{
    
    return (
        <div style={{display: 'flex' ,height : '100%', width: '10%', flexDirection: 'column', justifyContent: 'flex-end'}}>
                <h3 style={{color:'white'}}>{props.percentage}</h3>
                <Box className="percent" theme={{
                    percentage : props.percentage,
                    color : props.color
                }}></Box>
                <SkillTittleBox >
                    <SkillTitle>{props.skill}</SkillTitle>                    
                </SkillTittleBox>
                
        </div>
    )
}