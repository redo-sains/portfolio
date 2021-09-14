import {Footer, Copyright, CopyrightIcon, FooterText, FooterBox, FooterIconBox, FooterIcon} from './Footer.style'
import {FaFacebook, FaGooglePlus, FaInstagram, FaLinkedin, FaRegCopyright, FaTwitter} from 'react-icons/fa'


export const index = () => {
    return (
        <Footer>
            <FooterBox>
                <FooterText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac lacus elit. Aliquam at erat at mauris convallis accumsan. Praesent hendrerit eros a nibh interdum, a varius justo luctus. Integer sit amet mi non tellus sollicitudin consectetur sed et mauris. Mauris fermentum, turpis ac rhoncus convallis, eros velit iaculis tortor, lacinia consequat sapien orci eget nisl. Ut in tortor ac.
                </FooterText>
                <FooterIconBox>
                    <FooterIcon>
                        <FaFacebook id="Facebook"></FaFacebook>
                        <FaInstagram id="Instagram"></FaInstagram>
                        <FaTwitter id="Twitter"></FaTwitter>
                        <FaLinkedin id="Linkedin"></FaLinkedin>
                        <FaGooglePlus id="GooglePlus"></FaGooglePlus>
                    </FooterIcon>
                </FooterIconBox>
            </FooterBox>
            <Copyright>
                <CopyrightIcon ><FaRegCopyright /></CopyrightIcon>
                Copyright 2020 Portpolio Website. Created By Redo Sains.
            </Copyright >
        </Footer >
    )
}

export default index;