class getService {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
}
getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

  if(!res.ok) {
    throw new Error(`fetch ${url} error, status ${res.status}`)
  }

    return await res.json();
  };
  getAllCharacters() {
    return this.getResource(`/characters?page=5&pageSize=10`)
  }
  getCharacter(id) {
    return this.getResource(`/characters/${id}`)
  }
}

const got = new getService();

got.getAllCharacters()
  .then(res => {
    res.forEach(el => console.log(el.name))
  });

got.getCharacter(269)
  .then(res => console.log(res));
