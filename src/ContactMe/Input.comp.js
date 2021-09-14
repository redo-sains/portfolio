import {ContactMeInput as Input, ContactMeInputBox as InputBox, ContactMeInputLabel as Label} from './ContactMe.style';

const index = (props) =>{
    return (
        <InputBox theme={{
            gridProps : props.gridProps
        }}>
            <Label>{props.placeHolder}</Label>
            <Input placeholder={props.placeHolder} />
        </InputBox>
        )
}

export default index;