import React, { useState, useEffect } from 'react';
import Game from '../lib/Game';
import GameComponent from './Game';
import AddPlatform from './AddPlatform';
import AddGame from './AddGame';

async function loadGames(setGames: { (games: Game[]): void }) {
  const games = await Game.getAll();
  setGames(games);
}

export default function Library() {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    loadGames(setGames).catch((e) => console.error(e));
  }, []);
  const gamesRendered = games.map((game) => (
    <GameComponent key={`game-${game.id}`} game={game} />
  ));
  return (
    <div>
      <AddGame />
      <AddPlatform />
      {gamesRendered}
    </div>
  );
}
