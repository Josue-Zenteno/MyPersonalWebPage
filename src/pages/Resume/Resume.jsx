import { Grid, Typography } from '@mui/material'

import resumeData from '../../utils/resumeData';
import './Resume.css'

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