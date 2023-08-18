
import './App.css';
import React, { useState } from 'react';
import Papa from 'papaparse';


function App() {
const [firstInput, setFirstInput] = useState(undefined)
  const HandleFirstSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const projectName = form.projectName.value;
    const projectDescription = form.projectDescription.value;
    const client = form.client.value;
    const contractor = form.contractor.value;
    const inputValue = {projectName, projectDescription, client,contractor}
    setFirstInput(inputValue)
    
  }
  console.log(firstInput);


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
        e.preventDefault();
    };

  return (
    <section>
      <div className='main-container'>
      <form onSubmit={HandleFirstSubmit} className='form1'>
       <div style={{display:"flex" }}>
      <span>p</span> <input className='' type="text" name='projectName' placeholder='Project Name' required />
       </div>
          <input type="text" name="projectDescription" placeholder='Project Description' id="" />
          <input type="text" name="client" placeholder='client' id="" />
          <input type="text" name="contractor" placeholder='contractor' id="" />
          <div>
          </div>
          <input type="submit" value="submit" className='button'/>
        </form>
      </div>


       

    
     {/* second form */}
        <div className=''>
            <div style={{ marginTop: "30px" }} className='second-container'>
                <form onSubmit={handleSubmit} className='form2'>
                    <input type="text" value={firstInput !== undefined ? firstInput.projectName : ""} readOnly/>
                    <input type="text" value={firstInput !== undefined ? firstInput.projectDescription : ""} readOnly/>
                    <input type="text" value={firstInput !== undefined ? firstInput.client : ""} readOnly/>
                    <input type="text" value={firstInput !== undefined ? firstInput.contractor : ""} readOnly/>
                    <input type="file" accept='.csv' onChange={handleFileUpload} />
                    <input type="text" name="" defaultValue={maxX !== undefined ? maxX : ""} id="" />
                    <input type="text" name="" defaultValue={minX !== undefined ? minX : ""} id="" />
                    <input type="text" name="" defaultValue={maxY !== undefined ? maxY : ""} id="" />
                    <input type="text" name="" defaultValue={minY !== undefined ? minY : ""} id="" />
                    <input type="text" name="" defaultValue={maxZ !== undefined ? maxZ : ""} id="" />
                    <input type="text" name="" defaultValue={minZ !== undefined ? minZ : ""} id="" />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    
      </section>
  );
}

export default App;