import {useState, useEffect} from 'react'

const fetchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => {
      setError(true);
    })
  }, [url])


  return {data, error}
}

export default fetchData;
