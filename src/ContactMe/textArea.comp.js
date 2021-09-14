import {ContactMeTextArea as TextArea, ContactMeInputBox as InputBox, ContactMeInputLabel as Label} from './ContactMe.style';

const index = (props) =>{
    return (
        <InputBox theme={{
            gridProps : props.gridProps
        }}>
            <Label>{props.placeHolder}</Label>
            <TextArea placeholder={props.placeHolder}/>
        </InputBox>
        )
}

export default index;