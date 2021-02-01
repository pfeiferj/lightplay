import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Game from '../lib/Game';
import Platform from '../lib/Platform';

export default function AddGame() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [path, setPath] = React.useState<string | null>(null);
  const [cover, setCover] = React.useState<string | null>(null);
  const [platforms, setPlatforms] = React.useState<Platform[]>([]);
  const [selectedPlatform, setSelectedPlatform] = React.useState<number | null>(
    null
  );

  React.useEffect(() => {
    Platform.getAll()
      .then((platformModels) => setPlatforms(platformModels))
      .catch((e) => {
        console.error(e);
      });
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addGame = async () => {
    await Game.create({
      name,
      path: path || undefined,
      cover: cover || undefined,
      platform: selectedPlatform || undefined,
    });
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
          <FormControl fullWidth>
            <InputLabel id="PlatformLabel">Platform</InputLabel>
            <Select
              labelId="PlatformLabel"
              id="platform"
              value={selectedPlatform}
              onChange={(e) =>
                setSelectedPlatform(parseInt(e.target.value as string, 10))
              }
            >
              {platforms.map((platform) => (
                <MenuItem key={`platform-${platform.id}`} value={platform.id}>
                  {platform.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
