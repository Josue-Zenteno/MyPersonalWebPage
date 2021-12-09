import { Grid, Typography } from '@mui/material'
import resumeData from '../../utils/resumeData';
//import SpicyBanner from '../../assets/images/Spicy_Banner.png'
import SpicyBannerLight from '../../assets/images/Spicy_Banner_Light.png'
import './Home.css'

export default function Home(){
    return (
        <Grid container  className='section pb_45 pt_20'>
            <Grid item className='section_title mb_30'>
                <span></span>
                <Typography variant='h6' className='section_title_text'>
                    ¿Quién soy?
                </Typography>
            </Grid>

            <Grid item>
                <img src={SpicyBannerLight} alt='SpicBanner' className='Banner pb_45'>
                </img>
            </Grid>

            <Grid item >
                <Typography variant='body2' className='aboutme_text'>
                    {resumeData.about}
                </Typography>
            </Grid>
        </Grid>
    );
}