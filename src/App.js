import logo from './logo.svg';
import './App.css';
import withClearCache from "./ClearCache";

const ClearCacheComponent = withClearCache(MainApp);

function App() {
  return <ClearCacheComponent />;
}

function MainApp(props) {
  return (
    <div className="App">
        Test clear cache after build reactjs
    </div>
  );
}
export default App;
