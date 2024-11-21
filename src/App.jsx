import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

  const [datas, setDatas] = useState([])
  const [loading, setLoading] = useState(true)

    useEffect(() => {
      async function fetchData() {
        try {
          setLoading(true)
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
          setDatas(response.data)
          setLoading(false)
        } catch (error) {
          console.error(error)
          setLoading(false)
        } 
      }

      fetchData()
    }, [])  

  return (
    <div>
      <h1>Api info</h1>
      {loading ? (
        <p>Loading</p>
      ) : datas.length > 0 ? (
        <ul>
          {datas.map((data) => (
            <li key={data.id}>
              <h3>{data.title}</h3>
              <p>{data.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет данных</p>
      )}
    </div>
  );
}

export default App
