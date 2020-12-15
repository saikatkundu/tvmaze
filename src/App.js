import axios from 'axios';
import { useState } from 'react';
import './App.css';
import ItemList from './components/ItemList';
import SearchInput from './components/SearchInput';

function App() {
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false)

  const fetchApi = (e, searchInput) => {
    e.preventDefault();
    setErrorMsg('');
    setMessage('');
    if (searchInput !== '') {
      setFetching(true);
      axios({
        url: `https://api.tvmaze.com/search/shows`,
        method: 'GET',
        params: {
          q: searchInput
        }
      }).then(res => {
        console.log('res = ', res);
        if (res.status === 200) {
          setData(res.data);
          if (res.data.length === 0)
            setMessage('No result...')
        } else {
          setErrorMsg(res.message)
        }
        setFetching(false);
      }).catch(err => {
        setErrorMsg(err)
        setFetching(false);
      })
    }
  }

  return (
    <div className="container-fluid">
      <div className="box">
        <SearchInput fetchApi={fetchApi} />
        <span className="text-danger">{errorMsg}</span>
        <span className="text-info">{message}</span>
        {
          fetching ?
            <span>Loading...</span> :
            <ItemList data={data} />
        }
      </div>
    </div>
  );
}

export default App;
