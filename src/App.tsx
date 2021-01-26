import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Connection from './models/index';
import GameModel from './models/game';
import Game from './lib/Game';

async function loadGames(setGames: { (games: GameModel[]): void }) {
  const connection = await Connection;
  const games = (await connection.manager.find(GameModel)).map((game) => ({
    ...game,
  }));
  setGames(games);
}

function saveGame(
  e: React.FormEvent<HTMLFormElement>,
  games: GameModel[],
  setGames: { (games: GameModel[]): void }
) {
  console.log(e.target);
}
const Hello = () => {
  const [games, setGames] = useState<GameModel[]>([]);
  const [gameName, setGameName] = useState('');
  const [gamePath, setGamePath] = useState('');
  const [gamePlatform, setGamePlatform] = useState('');
  useEffect(() => {
    loadGames(setGames).catch((e) => console.error(e));
  }, [true]);
  const gamesRendered = games.map((game) => (
    <p key={game.name}>{game.name + game.path + game.platform}</p>
  ));
  return (
    <div>
      <h2>Add Game</h2>
      <form action="#" onSubmit={(e) => saveGame(e, games, setGames)}>
        Name:
        <input
          aria-label="Name"
          type="text"
          value={gameName}
          onInput={(e) => setGameName(e.currentTarget.value)}
        />
        Path:
        <input
          aria-label="Path"
          type="text"
          value={gamePath}
          onInput={(e) => setGamePath(e.currentTarget.value)}
        />
        Platform
        <input
          aria-label="Platform"
          type="text"
          value={gamePlatform}
          onInput={(e) => setGamePlatform(e.currentTarget.value)}
        />
        <button aria-label="submit" type="submit" />
      </form>
      <h2>Library</h2>
      {gamesRendered}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
