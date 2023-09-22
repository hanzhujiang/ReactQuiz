
import React, { useState } from 'react';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {
const [user,setUser] = useState(
  {
    userFirstname: 'Coder',
    userLastname: 'Byte',
    userPhone: '8885559999'
  }
 );
 const handleChange = (e) => {
 const {name, value} = e.target;
 setUser({
    ...user,
    [name]: value
 })
 }
 const validate = (user) => {
   return Object.values(user).some(item=>item==='')
 }
 const handleSubmit = (e) =>{
  e.preventDefault();
  if(validate(user)){
    alert('inputs cannot be empty!')
    return;
  }

  addEntryToPhoneBook(user);
  setUser({
    userFirstname: '',
    userLastname: '',
    userPhone: ''
  });
 }
   return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        placeHolder='Enter Your First Name'
        name='userFirstname'
        value={user.userFirstname} 
        onChange={handleChange}
        type='text'
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        placeHolder='Enter Your Last Name'
        name='userLastname'
        value={user.userLastname} 
        onChange={handleChange}
        type='text' 
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone'
        placeHolder='Enter Your Phone' 
        name='userPhone' 
        value={user.userPhone} 
        onChange={handleChange}
        type='text'
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable({phoneBook}) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
      {phoneBook.sort((x,y)=>x.userLastname.localeCompare(y.userLastname)).map((user,i) => 
        (
          <tr key={i}>
          <td style={style.tableCell}>{user.userFirstname}</td>
          <td style={style.tableCell}>{user.userLastname}</td>
          <td style={style.tableCell}>{user.userPhone}</td>
        </tr>
        ) 
      )}
      </tbody> 
    </table>
  );
}

function FormApp(props) {
const [phoneBook,setPhoneBook]=useState([]);
const addEntryToPhoneBook = (newUser) => {
  setPhoneBook([...phoneBook,newUser]);
}
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook}/>
      <InformationTable  phoneBook={phoneBook}/>
    </section>
  );
}

export default FormApp;

