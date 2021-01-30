import React from 'react';
import GameModel from '../lib/Game';

export default function Game(props: { gameModel: GameModel }) {
  const { gameModel } = props;
  return <div>{gameModel.name}</div>;
}
