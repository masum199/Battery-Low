import { useState } from 'react';
import './App.css';
import SecondForm from './SecondForm';


function App() {
const [firstInput, setFirstInput] = useState([])


  const HandleFirstSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const projectName = form.projectName.value;
    const projectDescription = form.projectDescription.value;
    const client = form.client.value;
    const contractor = form.contractor.value;
    const inputValue = {projectName, projectDescription, client,contractor}
    setFirstInput(inputValue)
    console.log(firstInput);

  }

  return (
    <div className='main-container'>
     <div>
     <div className='form-container'>
        <form onSubmit={HandleFirstSubmit}>
        <div className='form-container'>
          <input type="text" name='projectName' placeholder='Project Name' required />
          <input type="text" name="projectDescription" placeholder='Project Description' id="" />
          <input type="text" name="client" placeholder='client' id="" />
          <input type="text" name="contractor" placeholder='contractor' id="" />
          </div>
          <input type="submit" value="submit" id='submit1'/>
        </form>
      </div>
      <SecondForm firstInput={firstInput}/>
     </div>
      </div>
  );
}

export default App;