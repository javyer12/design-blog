import './App.css';
import ThemeContext from './Frontend/Context/ThemeContext';

import Home  from './Frontend/Container/Home.js';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value = 'blue'>
     <Home/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
