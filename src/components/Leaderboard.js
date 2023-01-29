import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: false,
  },
  {
    field: "Points",
    headerName: "Points",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", points: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", points: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", points: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", points: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", points: null },
  { id: 6, lastName: "Melisandre", firstName: null, points: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", points: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", points: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", points: 65 },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: "50%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
