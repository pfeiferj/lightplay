import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import Game from '../lib/Game';

export default function AddGame() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [path, setPath] = React.useState(undefined);
  const [cover, setCover] = React.useState(undefined);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addGame = async () => {
    await Game.create({ name, path, cover });
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained" color="primary">
        Add Game
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Game</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            fullWidth
          />
          Game:{' '}
          <Input
            type="file"
            // eslint-disable-next-line
            // @ts-ignore // electron adds file variable
            onChange={(e) => setPath(e.target.files[0].path)}
          />
          <br />
          Cover:{' '}
          <Input
            type="file"
            // eslint-disable-next-line
            // @ts-ignore // electron adds file variable
            onChange={(e) => setCover(e.target.files[0].path)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              addGame();
            }}
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
