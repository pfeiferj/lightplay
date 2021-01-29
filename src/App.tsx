import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Game from './lib/Game';

async function loadGames(setGames: { (games: Game[]): void }) {
  const games = await Game.getAll();
  setGames(games);
}

async function saveGame(
  name: string,
  path: string,
  platform: string,
  games: Game[],
  setGames: { (games: Game[]): void }
) {
  const game = await Game.create({ name, path, platform });
  setGames([...games, game]);
}
const Hello = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [gameName, setGameName] = useState('');
  const [gamePath, setGamePath] = useState('');
  const [gamePlatform, setGamePlatform] = useState('');
  useEffect(() => {
    loadGames(setGames).catch((e) => console.error(e));
  }, []);
  const gamesRendered = games.map((game) => (
    <p key={game.name}>{game.name + game.path + game.platform}</p>
  ));
  return (
    <div>
      <h2>Add Game</h2>
      <form
        action="#"
        onSubmit={() =>
          saveGame(gameName, gamePath, gamePlatform, games, setGames)
        }
      >
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
