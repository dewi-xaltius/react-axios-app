import './App.css';
import useApi from './useApi';

function App() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const { data, loading, error } = useApi(URL);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts!</p>;
  
  return (
    <div className="App">
      <h1>Posts</h1>
      <div>
        {data.map(post => (
          <button key={post.id}>{post.title}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
