import React, { useState } from 'react';
import './GenerateTableApp.css';

function Table({ renderData }) {
  const [row, column] = renderData;
  return (
    <div className='table-wrapper'>
      <table>
        <tbody>
          {Array.from({ length: row }, () => 0).map((_, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {Array.from({ length: column }, () => 0).map(
                  (_, columnIndex) => {
                    return <td key={columnIndex}>{columnIndex * row + 1 + rowIndex}</td>;
                  }
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function GenerateTableApp() {
  const [row, setrow] = useState('');
  const [column, setcolumn] = useState('');
  const [renderArray, setrenderArray] = useState([]);

  const handleSubmit = () => {
    setrenderArray([row, column]);
  };

  return (
    <div>
      <div>
        rows:{' '}
        <input
          name='rows'
          id='row-input'
          type='text'
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
      <Table renderData={renderArray} />
    </div>
  );
}
