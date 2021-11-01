import {Button} from '@mui/material';

import './CustomButton.css'

export default function CustomButton({text, icon}){
    return(
        // Button
        <Button 
        className="custom_btn" 
        endIcon={icon ? (<div className="btn_icon_container">{icon}</div>) : null}>
            <span className="btn_text">{text}</span>
        </Button>
    );
};