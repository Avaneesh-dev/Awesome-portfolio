import React from 'react';
import { Grid, Typography, CssBaseline, Container, Card, CardContent, List, ListItem, ListItemIcon, Icon, Divider } from '@mui/material';
import './AboutMe.css'
export default function AboutMe() {
  const aboutList = ['Full Stack web and mobile development', 'Interactive Front End as per the design', 
'React and React Native', 'Redux for state management', 'Building REST API', 'Managing database' ];
  return (
    <Grid>
        <Typography variant='h4' textAlign={"center"} sx={{fontFamily:"Poppins Bold", mt:5}}>
        About Me
        </Typography>
        <Typography textAlign={"center"} sx={{fontFamily:"Poppins Light"}}>
        Why Choose Me?
        </Typography>
        <CssBaseline />
        <Divider sx={{my:5}} variant='middle' />
        <Container>
            <Card>
                <CardContent>
                    <Typography>
                        Full stack web and mobile developer with background knowledge of MERN stacks with
                        redux, along with a knack of building applications with utmost efficiency. 
                        Strong professional with a BTech willing to be an asset for an organization.
                    </Typography>
                    <Typography variant='h6' sx={{marginTop: 10 }}>
                        Here are a few highlights:
                    </Typography>
                    <List>
                        {aboutList.map((me) => (
                        <ListItem key={me}>
                            <ListItemIcon>
                                <Icon className="fa fa-circle" sx={{color: 'darkorange'}} />
                            </ListItemIcon>
                            <Typography>{me}</Typography>
                        </ListItem>
                        ))}
                    </List>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {''}
                            Hire Me{" "}
                        </button>
                        <a href='myResume.pdf' download='Avaneesh myResume.pdf'>
                            <button className="btn highlighted-btn ml-5">Get Resume</button>
                        </a>
                    </div>
                </CardContent>
            </Card>
        </Container>
    </Grid>
  )
}
