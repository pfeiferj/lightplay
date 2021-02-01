import React from 'react';
import GameWrapper from '../lib/Game';

export default function Game(props: { game: GameWrapper }) {
  const { game } = props;

  const launchGame = () => {
    game.launch();
  };

  if (game.cover) {
    return (
      <div>
        <img aria-label={game.name} src={game.cover} />
      </div>
    );
  }
  // @TODO temporary interaction, add launch button
  // eslint-disable-next-line
  return <div onClick={launchGame}>{game.name}</div>;
}
