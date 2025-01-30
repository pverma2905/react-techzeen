import React from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";

const CountriesTables = () => {

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v2/all');
      setCountries(response.data)
      setFilteredCountries(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const columns = [
    {
      name: "Country Name",
      selector: row => row.name,
      sortable: true

    }, {
      name: "Country Native Name",
      selector: row => row.nativeName,
      sortable: true
    }, {
      name: "Country Capital",
      selector: row => row.capital,
      sortable: true

    }, {
      name: "Country Name",
      selector: row => <img width={50} height={50} src={row.flag} />
    },
    // {
    //     name:"Action",
    //     cell:(row)=><button className='btn btn-primary' onClick={()=>alert(row.alpha2Code)}>Edit</button>
    // },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex gap-2">
          <button className="btn btn-primary btn-sm" onClick={() => handleEdit(row)}>Edit</button>
          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(row)}>Delete</button>
          <button className="btn btn-info btn-sm" onClick={() => handleView(row)}>View</button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      // button: true,
    },
  ]




  useEffect(() => {
    getCountries()
  }, [])

  useEffect(() => {
    const result = countries.filter((country) => {
      return country.name.toLowerCase().match(search.toLowerCase());
    })
    setFilteredCountries(result)
  }, [search])

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("User Data", 14, 15);
    const tableColumn = ["ID", "Name", "Email", "Age"];
    const tableRows = [];

    console.log("filll", filteredCountries)
    console.log("coun", countries)
    countries.forEach((user) => {
      tableRows.push([user.id, user.name, user.email, user.age]);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("userdata.pdf");
  };

  const handleEdit = (row) => {
    alert(`Editing: ${row.name}`);
  };

  const handleDelete = (row) => {
    alert(`Deleting: ${row.name}`);
  };

  const handleView = (row) => {
    alert(`Viewing: ${row.name}`);
  };

  return (
    <DataTable
      title="Countries List"
      columns={columns}
      data={filteredCountries}
      pagination
      fixedHeader
      fixedHeaderScrollHeight='450px'
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      actions={
        <div className="d-flex gap-2">
          <button className='btn btn-sm btn-info' onClick={exportPDF}>Export Pdf</button>
          <CSVLink data={countries} filename={"countries.csv"} className="btn btn-success me-2">
            Export CSV
          </CSVLink>

        </div>
      }
      subHeader
      subHeaderComponent={<input type='text' placeholder='Search here' className='w-25 form-control' value={search} onChange={(e) => setSearch(e.target.value)} />}
      subHeaderAlign="right"
    />

  )
}

export default CountriesTables