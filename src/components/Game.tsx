import React from 'react';
import GameModel from '../lib/Game';

export default function Game(props: { gameModel: GameModel }) {
  const { gameModel } = props;
  if (gameModel.cover) {
    return (
      <div>
        <img aria-label={gameModel.name} src={gameModel.cover} />
      </div>
    );
  }
  return <div>{gameModel.name}</div>;
}
