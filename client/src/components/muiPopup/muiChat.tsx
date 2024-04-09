import React from 'react';
import data from '../editPopup/data';
import { Drawer, IconButton, Container, Divider, TextField } from '@mui/material';
import MuiMessage from './muiMessage';
import { Chat } from '@mui/icons-material';



export default function MuiChat() {
    const [isDrawerOpen, setisDrawerOpen] = React.useState(false);
    const [messageArr, setMessages] = React.useState(data.messages);
    const sendMessage = (event: any) => {
        if (event.key === "Enter" && event.target.value !== "") {
            event.preventDefault();
            setMessages([...messageArr, {
                id: messageArr.length + 1,
                author: "Илья Красненков",
                date_sent: new Date(),
                text: event.target.value,
                avatar: "https://avatars.mds.yandex.net/get-yapic/23186/enc-fcff59d213e265d10a2cccb679221e95c9b92a7e71c02c7c269cd6e384249449/islands-retina-middle"
            }])
            event.target.value = "";
        }
    }
    return (    
            <>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}>
                <Chat onClick={() => setisDrawerOpen(true)}/>
                </IconButton>
                <Drawer anchor={'right'} PaperProps={{ sx:{width: '30%'}}} open={isDrawerOpen} onClose={() => setisDrawerOpen(false)}>
                        <Container disableGutters sx={{
                            paddingLeft: '10px',
                            overflowY: 'auto',
                            display: 'block',
                            margin: 0,                            
                        }}>
                            <Container disableGutters>
                                {messageArr.map((message) => (
                                    <MuiMessage {...message} key={messageArr.indexOf(message)}/>
                                ))}
                            </Container>
                        </Container>
                        <Container sx={{marginTop: 'auto', marginBottom: '10px'}}>
                            <Divider orientation='horizontal' variant='fullWidth' flexItem/>
                            <TextField 
                                onKeyDown={(event) => sendMessage(event)}
                                id="standard-textarea"
                                placeholder="Введите сообщение"
                                multiline
                                fullWidth
                                variant="outlined">
                                </TextField>
                        </Container>           
                </Drawer>

            </>
    );
}

 