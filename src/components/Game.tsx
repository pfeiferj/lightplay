import React from 'react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import makeStyles from '@material-ui/styles/makeStyles';
import GameWrapper from '../lib/Game';

type Int = number;
interface GameProps {
  game: GameWrapper;
  sizeMultiplier: Int; // eslint-disable-line react/no-unused-prop-types
}

const useStyles = makeStyles<unknown, GameProps>(() => {
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
  const styles = useStyles(props);

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
