import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      const loadFunc = await read();
      const jsonStr = await json(loadFunc);
      return JSON.parse(jsonStr);
    })();
  }
}
