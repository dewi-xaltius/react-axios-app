import './App.css';
import useAPI from './useAPI';

function App() {
  // const URL = "https://jsonplaceholder.typicode.com/posts";
  const URL = "https://jsonplaceholder.typicode.com/users";
  const { data, loading, error } = useAPI(URL);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts!</p>;
  
  return (
    <div className="App">
      <h1>Users</h1>
      <div>
        {data.map(user => (
          // <button key={post.id}>{post.title}</button>
          <button key={user.id}>{user.username}</button>
        ))}
      </div>
    </div>
  );
}

export default App;