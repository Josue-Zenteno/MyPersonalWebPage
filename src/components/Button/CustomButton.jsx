import {Button} from '@mui/material';
import Resume_es from "../../assets/documents/Resume_es.pdf"
import './CustomButton.css'

export default function CustomButton({text, icon}){
    return(
        // Button
        <Button className="custom_btn" component="a" href={Resume_es} download={Resume_es} title="Josue-Zenteno">
            <span className="btn_text">{text} {icon}</span>
        </Button>
    );
};