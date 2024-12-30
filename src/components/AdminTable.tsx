/** @format */

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Flex } from "antd";

// DataTable component with dynamic columns mapping from props
interface DataTableProps {
  data: any[]; // Array of data objects to be displayed
  onAddData: () => void; // Callback function to handle Add Data button click
}

export default function DataTable({ data, onAddData }: DataTableProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(data);

  // Generate dynamic columns based on the keys in the first data object
  const columns: GridColDef[] = React.useMemo(() => {
    if (data.length === 0) return []; // Return empty columns if no data
    const firstRow = data[0];
    return Object.keys(firstRow).map((key) => {
      return {
        field: key,
        headerName: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the first letter
        flex: 1,
        // Set a default width for all columns
      };
    });
  }, [data]);

  // Handle search query change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter data based on the search query
  React.useEffect(() => {
    if (searchQuery === "") {
      setFilteredData(data); // If search is empty, show all data
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = data.filter((row) =>
        Object.values(row).join(" ").toLowerCase().includes(lowercasedQuery)
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, data]);

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div style={{ height: 500, width: "100%", position: "relative" }}>
      <Box>
        {/* Search and Add Data button section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            mb: 6,
          }}
        >
          <TextField
            label='Search'
            variant='outlined'
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ width: "300px" }}
          />
          <Button
            sx={{ width: "140px", mt: { xs: 2, md: 0 } }}
            variant='contained'
            color='primary'
            onClick={onAddData}
          >
            Add Data
          </Button>
        </Box>

        {/* DataGrid Table */}
        <Paper sx={{ width: "100%" }}>
          <DataGrid
            rows={filteredData}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection={false}
            sx={{ border: 0 }}
          />
        </Paper>
      </Box>
    </div>
  );
}
