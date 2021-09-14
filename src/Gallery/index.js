import {Gallery, GalleryBox, GalleryTitle, GalleryContentBox} from './Gallery.style'
import { Photo } from './photo.comp'

 const index = () => {
    return (
        <>
            <Gallery id="Gallery">
                <GalleryBox>
                    <GalleryTitle>
                        gallery
                    </GalleryTitle>
                    <GalleryContentBox>
                        <Photo img="https://picsum.photos/600/400"/>
                        <Photo img="https://picsum.photos/600/400"/>
                        <Photo img="https://picsum.photos/600/400"/>
                        <Photo img="https://picsum.photos/600/400"/>
                        <Photo img="https://picsum.photos/600/400"/>
                        <Photo img="https://picsum.photos/600/400"/>
                    </GalleryContentBox>
                </GalleryBox>
            </Gallery>
        </>
    )
}

export default index;