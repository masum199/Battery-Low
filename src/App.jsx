
import './App.css';
import React, { useState } from 'react';
import Papa from 'papaparse';


function App() {
const [firstInput, setFirstInput] = useState(undefined)
const [secondInput, setSecondInput]=useState(undefined)
const [showFirstSection, setShowFirstSection] = useState(true);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);


  const HandleFirstSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const projectName = form.projectName.value;
    const projectDescription = form.projectDescription.value;
    const client = form.client.value;
    const contractor = form.contractor.value;
    const inputValue = {projectName, projectDescription, client,contractor}
    setFirstInput(inputValue)
    setShowFirstSection(false)
    setShowSecondSection(true)
    
  }

  // second form functions
  const [data, setData] = useState([]);
    const [maxX, setMaxX] = useState(undefined);
    const [minX, setMinX] = useState(undefined);
    const [maxY, setMaxY] = useState(undefined);
    const [minY, setMinY] = useState(undefined);
    const [maxZ, setMaxZ] = useState(undefined);
    const [minZ, setMinZ] = useState(undefined);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        Papa.parse(file, {
            header: true,
            complete: (results) => {
                setData(results.data);

                const xValues = [];
                const yValues = [];
                const zValues = [];

                results.data.forEach(entry => {
                    const x = parseFloat(entry.X);
                    const y = parseFloat(entry.Y);
                    const z = parseFloat(entry.Z);

                    if (!isNaN(x)) xValues.push(x);
                    if (!isNaN(y)) yValues.push(y);
                    if (!isNaN(z)) zValues.push(z);
                });

                setMaxX(Math.max(...xValues));
                setMinX(Math.min(...xValues));
                setMaxY(Math.max(...yValues));
                setMinY(Math.min(...yValues));
                setMaxZ(Math.max(...zValues));
                setMinZ(Math.min(...zValues));
            },
        });
    };

    const handleSubmit = (e) => {
      e.preventDefault()
        setShowSecondSection(false)
        setShowThirdSection(true)
        const form = e.target
        const first = form.first.value
        const second = form.second.value
        const third  = form.third.value
        const fourth = form.fourth.value
        const fifth = form.fifth.value
        const sixth = form.sixth.value
        const secondformInput = {first, second, third, fourth,fifth,sixth}
        setSecondInput(secondformInput)
        
    };
    

  return (
    <section>
      {showFirstSection && <div className='main-container'>
      <form onSubmit={HandleFirstSubmit} className='form1'>
       <div>
      <span>ProjectName</span> <input className='' type="text" name='projectName' placeholder='Project Name' required />
       </div>
          <div>
          <span>&nbsp;&nbsp;Description </span><input type="text" name="projectDescription" placeholder='Project Description' id="" required/>
          </div>
          <div>
         <span>&nbsp;&nbsp;Client</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="client" placeholder='client' id="" required/>
          </div>
          <div>
          <span>&nbsp;&nbsp;Contractor</span><input type="text" name="contractor" placeholder='contractor' id="" required/>
          </div>
          <input type="submit" value="submit" className='button'/>
        </form>
      </div>}


       

    
     {/* second form */}
        {
          showSecondSection && <div className=' '>
          <div style={{ marginTop: "30px" }} className='main-container'>
              <form onSubmit={handleSubmit} className='form2'>
                  <input type="text" value={firstInput !== undefined ? firstInput.projectName : ""} readOnly required/>
                  <input type="text" value={firstInput !== undefined ? firstInput.projectDescription : ""} readOnly required/>
                  <input type="text" value={firstInput !== undefined ? firstInput.client : ""} readOnly required/>
                  <input type="text" value={firstInput !== undefined ? firstInput.contractor : ""} readOnly required/>
                  <input type="file" accept='.csv' onChange={handleFileUpload} />
                  <input type="text" name="first" defaultValue={maxX !== undefined ? maxX : ""} id="" required/>
                  <input type="text" name="second" defaultValue={minX !== undefined ? minX : ""} id="" required/>
                  <input type="text" name="third" defaultValue={maxY !== undefined ? maxY : ""} id="" required/>
                  <input type="text" name="fourth" defaultValue={minY !== undefined ? minY : ""} id="" required/>
                  <input type="text" name="fifth" defaultValue={maxZ !== undefined ? maxZ : ""} id="" required/>
                  <input type="text" name="sixth" defaultValue={minZ !== undefined ? minZ : ""} id="" required/>
                  <input type="submit" value="submit" />
              </form>
          </div>
      </div>
        }


        {/* table section */}
        {
          showThirdSection && <div className='main-container'>
          <div>
    <table className='table'>
      <thead>
        <tr>
          <th className=''>ProjectName</th>
          <th>Description</th>
          <th>Client</th>
          <th>Contractor</th>
          <th>Max-X</th>
          <th>Min-X</th>
          <th>Max-Y</th>
          <th>Min-Y</th>
          <th>Max-Z</th>
          <th>Min-Z</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{firstInput !== undefined ? firstInput.projectName : ""}</td>
          <td>{firstInput !== undefined ? firstInput.projectDescription : ""}</td>
          <td>{firstInput !== undefined ? firstInput.client : ""}</td>
          <td>{firstInput !== undefined ? firstInput.contractor : ""}</td>
          <td>{maxX !== undefined ? maxX : secondInput.first}</td>
          <td>{minX !== undefined ? minX : secondInput.second}</td>
          <td>{maxY !== undefined ? maxY : secondInput.third}</td>
          <td>{minY !== undefined ? minY : secondInput.fourth}</td>
          <td>{maxZ !== undefined ? maxZ : secondInput.fifth}</td>
          <td>{minZ !== undefined ? minZ : secondInput.sixth}</td>
        </tr>
      </tbody>
    </table>
  </div>
          </div>
        }
    
      </section>
  );
}

export default App;