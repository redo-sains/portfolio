import { GalleryContent } from "./Gallery.style"


export const Photo = (props) =>{

    return (
        <GalleryContent theme={{image : props.img}}></GalleryContent>
    )
}