// Кожевников СЮ выбор проекта из дерева

import React from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Stack, IconButton} from '@mui/material';
import ProjectDialog from './muiDialog';
import styled from '@mui/system/styled';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';

const ImpulseButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,  
  height: 40,
  padding: 2,
  margin: 2,
  border: '0.5px solid',
  lineHeight: 0.5,
  backgroundColor: '#147298',
  borderColor: '#0070AC',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#147298',
    borderColor: '#1BA1D6',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#075985',
    borderColor: '#075985',
  },
  '&:focus': {
    // boxShadow: '0 0 0 0.1rem rgba(7,89,163,0.5)',
  },
});


export default function SelectProjects({projects, changeState} : any) {

    const [formOpen, setFormOpen] = React.useState(false);
    const [project, setProject] = React.useState(projects[0]);
    const handleCloseForm = () => {
          setFormOpen(false);
      }
      const handleOpenForm = () => {
          setFormOpen(true);
      }
      const changeProps = (value : any) => {
        setProject(value)
        changeState(value)
        handleCloseForm()
      }

  return (

    <Box sx={{ flexGrow: 0, width:250, backgroundColor: '#147298'}}>
            {/* <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 250 , height:60 }}> */}
            <Container >
            <Stack spacing={1} direction="row">
              {/* <IconButton size="small" onClick={handleOpenForm}>     <PublishedWithChangesOutlinedIcon fontSize="small"/></IconButton> */}
              <ImpulseButton variant="text" onClick={handleOpenForm} sx={{maxHeight: 30, color: 'white'}} > {project.name} </ImpulseButton>
            </Stack>
            </Container>
            <ProjectDialog projects={projects} formOpen={formOpen} handleCloseForm={handleCloseForm} changeProps={changeProps}/>
    </Box>
  );
}
