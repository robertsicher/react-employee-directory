import Nav from './components/navbar';
import Card from './components/card';
import Container from'./components/container';
import PersonList from './api/api.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <Container />
      <PersonList />
      
    </div>
  );
}

export default App;
