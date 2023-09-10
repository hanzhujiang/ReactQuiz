import React, { useState } from 'react';
import './GenerateTableApp.css';

function Table({renderData}) {
    let row =renderData[0];
    let column=renderData[1];
  return (
    <div>
      <table>
        <tbody>
            {Array.from({ length: row }, () => 0).map((ii,rowIndex)=>{
                return (
                    <tr >
                    {Array.from({ length: column }, () => 0).map((item,index)=>{
                        return <td>{index*row + 1 +rowIndex }</td>
                    })}
                </tr>
                )
            })}

        </tbody>
      </table>
    </div>
  );
}


export default function GenerateTableApp() {
  const [row, setrow] = useState('');
  const [column, setcolumn] = useState('');
  const [renderArray, setrenderArray] = useState([])

  const handleSubmit = () => {
    console.log("ddd",[row,column]);
    setrenderArray([row,column])
  };

  return (
    <div>
      <div>

       rows: <input
          name='rows'
          id='row-input'
          type='number'
          value={row}
          onChange={(e) => setrow(e.target.value)}
        ></input>
      </div>
      <div>
        column: 
        <input
          name='column'
          id='column-input'
          type='text'
          value={column}
          onChange={(e) => setcolumn(e.target.value)}
        ></input>
      </div>

      <button onClick={handleSubmit}>Submit</button>
      {renderArray.length&&<Table renderData={renderArray} />}
    </div>
  );
}
