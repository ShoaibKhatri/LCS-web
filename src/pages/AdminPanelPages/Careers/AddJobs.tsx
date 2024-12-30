/** @format */

import React, { useState } from "react";
import DataTable from "../../../components/AdminTable"; // Adjust the import path as needed

const AddJobs: React.FC = () => {
  const [data, setData] = useState([
    { id: 1, firstName: "Jon", lastName: "Snow", age: 35 },
    { id: 2, firstName: "Cersei", lastName: "Lannister", age: 42 },
    { id: 3, firstName: "Jaime", lastName: "Lannister", age: 45 },
    { id: 4, firstName: "Arya", lastName: "Stark", age: 16 },
    { id: 5, firstName: "Daenerys", lastName: "Targaryen", age: null },
    { id: 6, firstName: null, lastName: "Melisandre", age: 150 },
    { id: 7, firstName: "Ferrara", lastName: "Clifford", age: 44 },
    { id: 8, firstName: "Rossini", lastName: "Frances", age: 36 },
    { id: 9, firstName: "Harvey", lastName: "Roxie", age: 65 },
  ]);

  // Function to handle Add Data button click
  const handleAddData = () => {
    // For example, open a modal or add a new row to the data
    const newData = {
      id: 10,
      firstName: "Tyrion",
      lastName: "Lannister",
      age: 38,
    };
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <div>
      <DataTable data={data} onAddData={handleAddData} />
    </div>
  );
};

export default AddJobs;
