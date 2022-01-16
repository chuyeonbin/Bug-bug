import Header from './components/header';
import './app.css';

const App = ({ loginAuth }) => {
  return <Header loginAuth={loginAuth} />;
};

export default App;
