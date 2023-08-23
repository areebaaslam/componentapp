import React, { useState } from 'react';
import Input from './Input';
const App =() =>{
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

}
export default App;