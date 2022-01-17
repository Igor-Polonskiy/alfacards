import {useState} from 'react';
import { useDispatch } from 'react-redux';


import CardField from './components/CardField';


import './App.css';


function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();


  return (
    <div className='App'>
      <CardField/>
    </div>
  );
}

export default App;
