import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import AddGame from './AddGame';
import AddPlatform from './AddPlatform';

const useStyles = makeStyles({
  Divider: {
    height: '52px',
    width: '100%',
  },
  AddButton: {
    marginLeft: '8px',
  },
  Title: {
    color: 'white',
    flexGrow: 1,
    textAlign: 'center',
  },
  SizeSlider: {
    width: '100px',
  },
});

export default function TopBar(props: {
  name: string;
  sizeUpdate?: { (sizeMultiplier: number): void };
}) {
  const DEFAULT_SIZE = 2;
  const styles = useStyles();
  const { name, sizeUpdate } = props;
  const [sizeMultiplier, setSizeMultiplier] = React.useState(DEFAULT_SIZE);

  const updateSize = (_: unknown, value: number | number[]) => {
    setSizeMultiplier(value as number);
    if (sizeUpdate) {
      sizeUpdate(value as number);
    }
  };
  return (
    <div>
      <AppBar position="fixed" color="inherit">
        <Toolbar variant="dense">
          <Typography className={styles.Title} variant="h6" noWrap>
            {name}
          </Typography>
          <Slider
            min={0.1}
            max={10}
            value={sizeMultiplier}
            step={0.1}
            onChange={updateSize}
            className={styles.SizeSlider}
          />
          <div className={styles.AddButton}>
            <AddGame />
          </div>
          <div className={styles.AddButton}>
            <AddPlatform />
          </div>
        </Toolbar>
      </AppBar>
      <div className={styles.Divider} />
    </div>
  );
}

TopBar.defaultProps = {
  sizeUpdate: () => {},
};
