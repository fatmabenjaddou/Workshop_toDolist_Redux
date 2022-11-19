import './App.css';
import { TaskList } from './components/TaskList/TaskList';
import { Add } from './components/Add/Add';
import { Route, Routes } from 'react-router-dom';
import Edit from './components/Edit/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
        path='/'
        element={
          <>
      <Add/>
      <TaskList/>
      </>
      }
        />
        <Route
        path='/edit/:id'element={<Edit/>}
        />
      </Routes>
      
    </div>
  );
}

export default App;



