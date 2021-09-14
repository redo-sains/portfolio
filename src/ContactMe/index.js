import {ContactMe, ContactMeBox, ContactMeTitle} from './ContactMe.style'
import ContactInput from './Input.comp'
import TextArea from './textArea.comp'

const index = () =>{
    return (
    <form>
        <ContactMe id="ContactMe">
            <ContactMeTitle>
                contact me
            </ContactMeTitle>
            <ContactMeBox>
                <ContactInput gridProps="1/2" placeHolder="First Name" Type="Text"/>
                <ContactInput gridProps="2/3" placeHolder="Last Name" Type="Text"/>
                <ContactInput gridProps="1/-1" placeHolder="Email" Type="Email"/>
                <ContactInput gridProps="1/-1" placeHolder="Message" Type="Text"/>
                <TextArea gridProps="1/-1" placeHolder="Additional details" />        
            </ContactMeBox>
        </ContactMe>
    </form>
    )
}

export default index