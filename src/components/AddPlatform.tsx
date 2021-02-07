import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import Platform from '../lib/Platform';

export default function AddPlatform() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [path, setPath] = React.useState<string | null>(null);
  const [args, setArgs] = React.useState<string | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addPlatform = async () => {
    await Platform.create({
      name,
      path: path || undefined,
      arguments: args || undefined,
    });
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained" color="primary">
        Add Platform
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Platform</DialogTitle>
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
          Executable:{' '}
          <Input
            type="file"
            // eslint-disable-next-line
            // @ts-ignore // electron adds file variable
            onChange={(e) => setPath(e.target.files[0].path)}
          />
          <TextField
            margin="dense"
            id="arguments"
            label="Arguments"
            value={args}
            onChange={(e) => setArgs(e.target.value)}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              addPlatform();
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
