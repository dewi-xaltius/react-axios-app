import './App.css';
import useApi from './useApi';

function App() {
  const { data, loading, error } = useApi("https://jsonplaceholder.typicode.com/posts");
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posits!</p>;
  
  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
