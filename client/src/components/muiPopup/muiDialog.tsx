import { Button , TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export default function MuiDialog (props: {formOpen: boolean, handleCloseForm: Function, addLinks: Function}){

    return (
     <Dialog
        open={props.formOpen}
        onClose={() => props.handleCloseForm}
        PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const link = formJson.link;
            console.log(link);
            props.addLinks(link);
            props.handleCloseForm();
        },
        }}
        >  
        <DialogTitle>Редактирование ссылок</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Какую ссылку вы хотите добавить?
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="link"
            label="Ссылка"
            type="string"
            defaultValue={'https://'}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.handleCloseForm}>Отмена</Button>
          <Button type="submit">Подтвердить</Button>
        </DialogActions>
      </Dialog>
    )
}