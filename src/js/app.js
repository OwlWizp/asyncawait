import GameSavingLoader from './GameSavingLoader.js';

export default (async () => {
  const loadFunc = await GameSavingLoader.load();
})();