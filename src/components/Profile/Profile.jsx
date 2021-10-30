import { Typography } from "@mui/material";
import CustomTimeLine, { CustomTimeLineSeparator} from "../TimeLine/TimeLine"

import './Profile.css';
import myImage from "../../assets/images/Spicy_ProfilePicIRL.jpg";
import resumeData from "../../utils/resumeData";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { TimelineContent, TimelineItem } from "@mui/lab";
import CustomButton from "../Button/CustomButton";
import DownloadIcon from '@mui/icons-material/Download';

const CustomTimeLineItem = ({title, text, link}) => (
   <TimelineItem>
    <CustomTimeLineSeparator/>
    <TimelineContent className='timeline_content'>
        {link ? (
            <Typography className="timelineItem_text">
                <span>{title}: </span>{" "} 
                <a href={link} target='_blank' rel="noreferrer">
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
            <div className='profile_name'>
                <Typography className='name'>{resumeData.name}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>
            </div>

            <figure className='profile_image'>
                <img src={myImage} alt=''/>
            </figure>

            <div className='profile_information'>
                <CustomTimeLine icon={<PersonOutlineIcon/>} >
                    <CustomTimeLineItem title='Name' text={resumeData.name}/>
                    <CustomTimeLineItem title='Title' text={resumeData.title}/>
                    <CustomTimeLineItem title='Email' text={resumeData.email}/>

                    {Object.keys(resumeData.socials).map(key => (
                        <CustomTimeLineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
                    ))}
                </CustomTimeLine>
                
                <div className='button_container'>
                    <CustomButton text={"Download CV"} icon={<DownloadIcon/>}/>
                </div>
            </div>
        </div>
    )
};