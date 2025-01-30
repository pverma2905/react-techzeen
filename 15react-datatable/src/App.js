
import { useState } from 'react';
import './App.css';
import DataTable from 'react-data-table-component';


function App() {

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable:true
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable:true
    },
    {
      name: 'Age',
      selector: row => row.age,
      sortable:true
    },
  ];
  
  const data = [
      {
      id: 1,
      name: 'Akash',
      email: 'Akash@gmail.com',
      age:28
    },
    {
      id: 2,
      name: 'Akash',
      email: 'Akash@gmail.com',
      age:28
    },
    {
      id: 3,
      name: 'Bantu',
      email: 'Bantu@gmail.com',
      age:28
    },
    {
      id: 4,
      name: 'titu',
      email: 'titu@gmail.com',
      age:28
    },
    {
      id: 5,
      name: 'golu',
      email: 'golu@gmail.com',
      age:28
    },
    {
      id: 6,
      name: 'Akash',
      email: 'Akash@gmail.com',
      age:28
    },
    {
      id: 7,
      name: 'Akash',
      email: 'Akash@gmail.com',
      age:28
    },
    {
      id: 8,
      name: 'Bantu',
      email: 'Bantu@gmail.com',
      age:28
    },
    {
      id: 9,
      name: 'titu',
      email: 'titu@gmail.com',
      age:28
    },
    {
      id: 10,
      name: 'golu',
      email: 'golu@gmail.com',
      age:28
    },
    {
      id: 11,
      name: 'Akash',
      email: 'Akash@gmail.com',
      age:28
    },
    {
      id: 12,
      name: 'Akash',
      email: 'Akash@gmail.com',
      age:28
    },
    {
      id: 13,
      name: 'Bantu',
      email: 'Bantu@gmail.com',
      age:28
    },
    {
      id: 14,
      name: 'titu',
      email: 'titu@gmail.com',
      age:28
    },
    {
      id: 15,
      name: 'golu',
      email: 'golu@gmail.com',
      age:28
    },
    {
      id: 16,
      name: 'Akash',
      email: 'Akash@gmail.com',
      age:28
    },
    {
      id: 17,
      name: 'Akash',
      email: 'Akash@gmail.com',
      age:28
    },
    {
      id: 18,
      name: 'Bantu',
      email: 'Bantu@gmail.com',
      age:28
    },
    {
      id: 19,
      name: 'titu',
      email: 'titu@gmail.com',
      age:28
    },
    {
      id: 20,
      name: 'golu',
      email: 'golu@gmail.com',
      age:28
    },
  ]

  const [records, setRecords] = useState(data);

  function handleFilter(event){
    const newData = data.filter(row=>{
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }
  return (
    <>
    <div className='container mt-5'>
      <div className='text-end'><input type='text' onChange={handleFilter}/></div>
    <DataTable
			columns={columns}
			data={records}
      selectableRows
      fixedHeader
      pagination
			// expandableRows
			// expandableRowsComponent={ExpandedComponent}
		/>
    </div>
    </>
  );
}

export default App;
