import React from 'react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import makeStyles from '@material-ui/styles/makeStyles';
import { useSelector } from 'react-redux';
import GameWrapper from '../lib/Game';
import type { State } from '../redux/store';

interface GameProps {
  game: GameWrapper;
}

const useStyles = makeStyles<unknown, { sizeMultiplier: number }>(() => {
  return {
    Card: {
      float: 'left',
      marginBottom: '8px',
      marginRight: '8px',
      width: ({ sizeMultiplier }) => `${sizeMultiplier * 135}px`,
      height: ({ sizeMultiplier }) =>
        `calc(${sizeMultiplier * 190}px + ${sizeMultiplier + 0.5}em)`,
      textAlign: 'center',
    },
    Cover: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
    CoverArea: {
      width: '100%',
      height: ({ sizeMultiplier }) =>
        `calc(${sizeMultiplier * 190}px - ${sizeMultiplier * 2 + 1}em)`,
    },
    Button: {
      fontSize: ({ sizeMultiplier }) => `${sizeMultiplier}em`,
    },
    Name: {
      marginBottom: '4px',
      marginTop: '4px',
      fontSize: ({ sizeMultiplier }) => `${sizeMultiplier}em`,
    },
  };
});

export default function Game(props: GameProps) {
  const { game } = props;
  const sizeMultiplier = useSelector<State, number>((state) => {
    return state.elementSize.value;
  });
  const styles = useStyles({ sizeMultiplier });

  const launchGame = () => {
    game.launch();
  };

  return (
    <Card className={styles.Card}>
      <div className={styles.Name}>{game.name}</div>
      <div className={styles.CoverArea}>
        {game.cover && (
          <img
            className={styles.Cover}
            aria-label={game.name}
            src={game.cover}
          />
        )}
      </div>
      <IconButton onClick={launchGame}>
        <PlayArrowIcon className={styles.Button} />
      </IconButton>
    </Card>
  );
}
