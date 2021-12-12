import { Typography } from "@mui/material";
import { TimelineContent, TimelineItem } from "@mui/lab";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DownloadIcon from '@mui/icons-material/Download';

import CustomButton from "../Button/CustomButton";
import CustomTimeLine, { CustomTimeLineSeparator } from "../TimeLine/TimeLine"

import resumeData from "../../utils/resumeData";
import myImage from "../../assets/images/Spicy-ProfilePic.jpg";

import './Profile.css';

const CustomTimeLineItem = ({title, text, link}) => (
   <TimelineItem className='timelineItem'>
        <CustomTimeLineSeparator/>
        {/* Profile Information */}
        <TimelineContent className='timelineItem_content'>
            {link ? (
                <Typography className="timelineItem_text">
                    <span>{title}: </span> 
                    <a 
                    href={link} 
                    target='_blank' 
                    rel="noreferrer">
                        {text}
                    </a>
                </Typography>
            ) : (
                <Typography className="timelineItem_text">
                    <span>{title}: </span>{text}
                </Typography>
            )}
        </TimelineContent>
   </TimelineItem>
)

export default function Profile(){
    return(
        <div className='profile container_shadow'>
            {/* Profile Title */}
            <div className='profile_name'>
                <Typography className='name'>{resumeData.name}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>
            </div>

            {/* Profile Image */}
            <figure className='profile_image'>
                <img src={myImage} alt=''/>
            </figure>

            {/* Profile Information */}
            <div className='profile_information'>
                <CustomTimeLine icon={<PersonOutlineIcon/>} >
                    <CustomTimeLineItem title='Nombre' text={resumeData.name}/>
                    <CustomTimeLineItem title='Titulo' text={resumeData.title}/>
                    <CustomTimeLineItem title='Teléfono' text={resumeData.phone}/>
                    <CustomTimeLineItem title='Email' text={resumeData.email}/>
                    {resumeData.socials.map(social => (
                        <CustomTimeLineItem 
                        key={social.name} 
                        title={social.name} 
                        text={social.description} 
                        link={social.link}
                        />
                    ))}
                </CustomTimeLine>
            </div>
            
            {/* Profile CV Button */}
            <div className='profile_CVButton'>
                <CustomButton text={"Descargar CV"} icon={<DownloadIcon/>}/>
            </div>
        </div>
    )
};