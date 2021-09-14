import {AboutMe, AboutMeBox, AboutMeContent, AboutMeImageBox, AboutMeText, AboutMeTitle, AboutMeParagraph, AboutMeTitleBox, AboutMeImage} from './AboutMe.style'

const index = () => {
    return (
        <AboutMe id="AboutMe">
            <AboutMeBox>
                <AboutMeText>
                    <AboutMeTitleBox>
                        <AboutMeTitle>about me</AboutMeTitle>
                    </AboutMeTitleBox>
                    <AboutMeContent>
                        <AboutMeParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus semper ipsum nec bibendum. Donec pharetra ligula quis nunc ullamcorper maximus.
                        </AboutMeParagraph>
                        <AboutMeParagraph>In aliquam interdum felis nec tincidunt. Maecenas sodales, ante vitae gravida ornare, ligula nunc auctor massa, eget rutrum ipsum magna ac tellus. Maecenas iaculis euismod orci et efficitur. Donec tristique diam ipsum, ut vehicula purus tempus et. </AboutMeParagraph>
                        <AboutMeParagraph>
                        Nulla ut mi condimentum, viverra est in, dapibus libero. Curabitur posuere posuere purus, sed venenatis urna semper vitae. Nam nunc lorem, rhoncus sit amet maximus non, accumsan eu dui. Pellentesque feugiat rhoncus magna at tristique.
                        </AboutMeParagraph>
                        <AboutMeParagraph>
                        Donec vehicula lectus leo, ac efficitur nisl efficitur eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit id nibh et eleifend. Duis pharetra elit ac lorem interdum, et ultricies diam sagittis. Donec congue sagittis nisi, id efficitur augue semper at.</AboutMeParagraph>
                    </AboutMeContent>
                </AboutMeText>
                <AboutMeImageBox>
                    <AboutMeImage src="https://picsum.photos/400" alt="my pic"></AboutMeImage>
                </AboutMeImageBox>
            </AboutMeBox>
        </AboutMe>
    )
}

export default index;