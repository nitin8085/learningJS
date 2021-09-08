import './App.css';
import { useState } from 'react';
import Text from './Text'
import Button from './Button'
import InputText from './InputText'
import Assignment3 from './Assignment3';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  const [textBoxValue, setTextBoxValue] = useState('Text box default value');
  const [textMessage, setTextMessage] = useState('Answer 2 : - This is message for text component passed as a props');
  const handleClick = (e) => {
    setTextMessage(textBoxValue);
    setTextBoxValue('');
  }
  function handleChange(e){
    setTextBoxValue(e.target.value);
  }


  return (
    <div className="App">

      <Router>
        <Link to="/assignment3">Assignment - 3</Link>
        <Link to="/assignment1">Assignment - 1</Link>
        <Route path="/assignment3" component={Assignment3} />
        <Route path="/assignment1" component={() => {
          return (
            <div>
              <ul>
                <li>React Assignment  Day 1 Task 1 </li>
              </ul>
              <h1>Answer 1 : - Printing Hello World Using react js</h1>
              <Text message={textMessage}/>
              <InputText placeholder="This is placeholder" value={textBoxValue} handleChange={() => handleChange}/>
              <Button label="click Me !" onClick={()  => handleClick}/>
            </div>
          )
        }} />
      </Router>  
    </div>
  );
}

export default App;
