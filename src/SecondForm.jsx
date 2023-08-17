import React, { useState } from 'react';
import Papa from 'papaparse';

const SecondForm = () => {
    const [data, setData] = useState([]);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        Papa.parse(file, {
            header: true,
            complete: (results) => {
                setData(results.data);

                const xValues = [];
                const yValues = [];
                const zValues = [];

                data.forEach(entry => {
                    const x = parseFloat(entry.X);
                    const y = parseFloat(entry.Y);
                    const z = parseFloat(entry.Z);

                    if (!isNaN(x)) xValues.push(x);
                    if (!isNaN(y)) yValues.push(y);
                    if (!isNaN(z)) zValues.push(z);
                });

                const maxX = Math.max(...xValues);
                const minX = Math.min(...xValues);
                const maxY = Math.max(...yValues);
                const minY = Math.min(...yValues);
                const maxZ = Math.max(...zValues);
                const minZ = Math.min(...zValues);

                console.log("Max X:", maxX);
                console.log("Min X:", minX);
                console.log("Max Y:", maxY);
                console.log("Min Y:", minY);
                console.log("Max Z:", maxZ);
                console.log("Min Z:", minZ);

            },

        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div style={{ marginTop: "30px" }}>
                <form onSubmit={handleSubmit}>
                    <input type="file" accept='.csv' onChange={handleFileUpload} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default SecondForm;