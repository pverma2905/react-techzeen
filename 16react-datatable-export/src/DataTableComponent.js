import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";


const DataTableComponent = () => {
    const [data, setData] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(5);
    const [sortField, setSortField] = useState("id");
    const [sortOrder, setSortOrder] = useState("asc");
  
    useEffect(() => {
      fetchData();
    }, [page, perPage, sortField, sortOrder]);
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/users`, {
          params: {
            _page: page,
            _limit: perPage,
            _sort: sortField,
            _order: sortOrder,
          },
        });
        setData(response.data);
        setTotalRows(parseInt(response.headers["x-total-count"], 10));
      } catch (error) {
        console.error("Error fetching data", error);
      }
      setLoading(false);
    };
  
    const handleSort = (column, sortDirection) => {
      setSortField(column.selector);
      setSortOrder(sortDirection);
    };
  
    const handlePageChange = (page) => {
      setPage(page);
    };
  
    const handlePerRowsChange = (newPerPage, page) => {
      setPerPage(newPerPage);
      setPage(page);
    };
  
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );
  
    const exportPDF = () => {
      const doc = new jsPDF();
      doc.text("User Data", 14, 15);
      const tableColumn = ["ID", "Name", "Email", "Age"];
      const tableRows = [];
      
      data.forEach((user) => {
        tableRows.push([user.id, user.name, user.email, user.age]);
      });
  
      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 20,
      });
  
      doc.save("userdata.pdf");
    };

    
  
    const columns = [
      { name: "ID", selector: (row) => row.id, sortable: true },
      { name: "Name", selector: (row) => row.name, sortable: true },
      { name: "Email", selector: (row) => row.email },
      { name: "Age", selector: (row) => row.age, sortable: true },
    ];
  return (
    <div className="container mt-4">
    <h3>React Data Table with JSON Server</h3>
    <input
      type="text"
      placeholder="Search by name..."
      className="form-control mb-3"
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
    />

    <DataTable
      columns={columns}
      data={filteredData}
      progressPending={loading}
      pagination
      paginationTotalRows={totalRows}
      paginationServer
      paginationPerPage={perPage}
      paginationRowsPerPageOptions={[5, 10, 20]}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      onSort={handleSort}
      sortServer
    />

    <div className="mt-3">
      <CSVLink data={data} filename={"data.csv"} className="btn btn-success me-2">
        Export CSV
      </CSVLink>
      <button onClick={exportPDF} className="btn btn-danger">
        Export PDF
      </button>
    </div>
  </div>
  )
}

export default DataTableComponent