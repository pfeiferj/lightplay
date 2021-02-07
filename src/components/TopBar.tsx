import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { update as updateElementSize } from '../redux/elementSize';
import AddGame from './AddGame';
import AddPlatform from './AddPlatform';
import type { State } from '../redux/store';

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

export default function TopBar(props: { name: string }) {
  const styles = useStyles();
  const { name } = props;
  const dispatch = useDispatch();
  const sizeMultiplier = useSelector<State, number>(
    (state) => state.elementSize.value
  );

  const updateSize = (_: unknown, value: number | number[]) => {
    dispatch({ type: updateElementSize.type, payload: value as number });
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
