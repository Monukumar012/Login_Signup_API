import './App.css';
import {Route, Routes} from 'react-router-dom'
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import HomePage from './routes/HomePage';

function App() {
  return (
    <div className="App">
        {/* <h1>Hello</h1> */}

        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/login' Component={LoginPage}/>
          <Route path='/register' Component={RegisterPage}/>
        </Routes>

    </div>
  );
}

export default App;
