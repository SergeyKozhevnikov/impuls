import React from 'react';
import './animations/animations.css'
import data from '../editPopup/data';
import { Drawer, IconButton, Container } from '@mui/material';
import MuiHistRecord from './muiHistRecord';
import { WorkHistory } from '@mui/icons-material';

export default function MuiHistChngs() {
    const [isDrawerOpen, setisDrawerOpen] = React.useState(false);
    const recordArr = data.hist;
    return (    
            <>
                <IconButton
                className='fade-in'
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setisDrawerOpen(true)}>
                <WorkHistory/>
                </IconButton>
                <Drawer anchor={'right'} sx={{zIndex: 1400}} PaperProps={{ sx:{width: {md:'30%', sm: '70%'}}}} open={isDrawerOpen} onClose={() => setisDrawerOpen(false)}>
                        <Container disableGutters sx={{
                            paddingLeft: '10px',
                            overflowY: 'auto',
                            display: 'block',
                            margin: 0,                            
                        }}>
                            <Container disableGutters>
                                {recordArr.map((record) => (
                                    <MuiHistRecord {...record} key={recordArr.indexOf(record)}/>
                                ))}
                            </Container>
                        </Container>      
                </Drawer>
            </>
    );
}

 