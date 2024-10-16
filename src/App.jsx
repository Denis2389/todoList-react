
import { useEffect, useState } from "react"
import { fetchArticles } from "./services/api";

const App = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const getData = async() => {
            const { data } = await fetchArticles;
            console.log(data.hits)
            setArticles(data.hits)
        }
        getData()
    }, []);
    return (
      <div>
        <h1>HTTP</h1>
        <ul>
          {articles.map((item) => (
            <li key={item.objectID}>
              <a href={item.url} target="_blank">{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default App