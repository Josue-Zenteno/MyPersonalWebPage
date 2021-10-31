import { Grid, Typography } from '@mui/material'
import CustomTimeLine, {CustomTimeLineSeparator} from '../../components/TimeLine/TimeLine'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

import resumeData from '../../utils/resumeData';
import './Resume.css'
import { TimelineItem, TimelineContent } from '@mui/lab';

export default function Resume(){
    return(
        <>
            {/* About me*/}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <Typography variant='h6' className='section_title_text'>
                        About me
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutme_text'>
                        {resumeData.about}
                    </Typography>
                </Grid>
            </Grid>

            {/* Education and Experiences*/}
            <Grid container className='section'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <Typography variant='h6' className='section_title_text'>
                        Resume
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className='resume_timeline'>
                        {/* Working history */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeLine title='Work Experience' icon={<WorkIcon/>}>
                                {resumeData.experiencies.map(experience => (
                                    <TimelineItem>
                                        <CustomTimeLineSeparator/>
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'>
                                                {experience.title}
                                            </Typography>
                                            <Typography variant='caption' className='timeline_date'>
                                                {experience.date}
                                            </Typography>
                                            <Typography variant='body2' className='timeline_description'>
                                                {experience.description}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeLine>
                        </Grid>

                        {/* Education history */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeLine title='Education' icon={<SchoolIcon/>}>
                                {resumeData.educations.map(education => (
                                    <TimelineItem>
                                        <CustomTimeLineSeparator/>
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'>
                                                {education.title}
                                            </Typography>
                                            <Typography variant='caption' className='timeline_date'>
                                                {education.date}
                                            </Typography>
                                            <Typography variant='body2' className='timeline_description'>
                                                {education.description}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeLine>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Services */}
            <Grid container className='section'>
                
            </Grid>

            {/* Skills and Contact  */}
            <Grid container className='section'>
                
            </Grid>
        </>
    );
};
