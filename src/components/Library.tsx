import React, { useState, useEffect } from 'react';
import Game from '../lib/Game';
import GameComponent from './Game';
import Layout from './Layout';

async function loadGames(setGames: { (games: Game[]): void }) {
  const games = await Game.getAll();
  setGames(games);
}

export default function Library() {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    loadGames(setGames).catch((e) => console.error(e));
  }, []);
  const [sizeMultiplier, setSizeMultiplier] = useState(2);
  const gamesRendered = games.map((game) => (
    <GameComponent
      key={`game-${game.id}`}
      game={game}
      sizeMultiplier={sizeMultiplier}
    />
  ));
  return (
    <Layout sizeUpdate={setSizeMultiplier} name="Library">
      {gamesRendered}
    </Layout>
  );
}
