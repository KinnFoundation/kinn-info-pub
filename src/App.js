import './index.css';
import { Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar.js'
//import Main from './components/Main.js'
import ToolList from './components/ToolList';
import CollectionMinter from './components/CollectionMinter';
import MassMinter from './components/MassMinter';
import Updater from './components/ARC19Updater';
import MassSend from './components/MassSend';
import MassOut from './components/MassOut';
import Manage from './components/Manage';
import Blast from './components/Blast';
import About from './components/About';
import Games from './components/Games';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={< About />} />
        <Route exact path="/tools" element={< ToolList />} />
        <Route exact path="/add-collection" element={< CollectionMinter />} />
        <Route exact path="/minter" element={< MassMinter />} />
        <Route exact path="/update" element={< Updater />} />
        <Route exact path="/send" element={< MassSend />} />
        <Route exact path="/out" element={< MassOut />} />
        <Route exact path="/manage" element={< Manage />} />
        <Route exact path="/blast" element={< Blast />} />
        <Route exact path="/games" element={< Games />} />
      </Routes>
    </div>
  );
}

export default App;
