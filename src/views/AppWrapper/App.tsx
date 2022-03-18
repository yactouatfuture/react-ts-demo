import './App.css';
import AppLink from '../../components/AppLink';

const App = () => {
  return (
    <div>
      <h1>react-ts-demo</h1>
      <AppLink label="Component A" path="/a" /> |{" "}
      <AppLink label="Component B" path="/b" />
    </div>
  )
};

export default App;
