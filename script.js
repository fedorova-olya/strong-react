const getResource = async (url) => {
  const res = await fetch(url),
    some = await res.json();
  return some;
}

getResource('https://jsonplaceholder.typicode.com/posts/1')
  .then((json) => console.log('Success', json))
  .catch(error => console.error('Error', error))
