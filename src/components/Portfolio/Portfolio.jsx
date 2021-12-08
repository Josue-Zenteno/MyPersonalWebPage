import { useState } from 'react';
import { Grid, Tabs, Tab, Typography, CardActionArea, Card, CardMedia, CardContent, Grow, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import resumeData from '../../utils/resumeData'

import './Portfolio.css'

export default function Portfolio(){

    const [tabValue, setTabValue] = useState('All');
    const [projectDialog, setProjectDialog] = useState(false);

    return(
        <Grid container className='section pb_45 pt_45'>
            {/* Title */}
            <Grid item className='section_title mb_20'>
                <span></span>
                <Typography variant='h6' className='section_title_text'>
                    Portfolio
                </Typography>
            </Grid>
           
            {/* TabBar */}
            <Grid item xs={12}>
                {/* Tabs */}
                <Tabs 
                value={tabValue} 
                indicatorColor='white' 
                className='customTabs mb_20' 
                onChange={(event, newValue) => setTabValue(newValue)}>
                    <Tab label='All' value='All' className={tabValue === 'All' ? 'customTabs_item active' : 'customTabs_item'} />

                    {[...new Set(resumeData.projects.map(project => project.tag))].map(
                        tag => (
                        <Tab label={tag} 
                        value={tag} 
                        className={tabValue === tag ? 'customTabs_item active' : 'customTabs_item'}/>
                    ))}
                </Tabs>
            
                {/* Projects */}
                <Grid item xs={12}>
                    <Grid container spacing={3} >
                        {resumeData.projects.map(project => (
                            <>
                                {tabValue === project.tag || tabValue === 'All' ? (
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Grow in timeout={1000}>
                                            <Card className='customCard' onClick={() => setProjectDialog(project)}>
                                                <CardActionArea>
                                                    <CardMedia 
                                                    className='customCard_image' 
                                                    image={project.image}
                                                    title={project.title}/>
                                                    <CardContent>
                                                        <Typography variant='body2' className='customCard_title'>
                                                            {project.title}
                                                        </Typography>
                                                        <Typography variant='caption' className='customCard_caption'>
                                                            {project.caption}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grow>
                                    </Grid>
                                ) : null}
                            </>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            
            {/* Project Dialog */}
            <Dialog 
            open={projectDialog} 
            onClose={() => setProjectDialog(false)}
            className='projectDialog'>
                <DialogTitle onClose={() => setProjectDialog(false)}>
                    {projectDialog.title}
                </DialogTitle>
                <img src={projectDialog.image} alt='' className='projectDialog_image'/>
                <DialogContent>
                    <Typography className='projectDialog_description'>
                        {projectDialog.description}
                    </Typography>
                </DialogContent>
                <DialogActions className='projectDialog_actions'>
                    {projectDialog?.links?.map(link => (
                        <a href={link.link} target='_blank' rel='noreferrer' className='projectDialog_icon'>
                            {link.icon}
                        </a>
                    ))}
                </DialogActions>
            </Dialog>
        </Grid>
    );
};