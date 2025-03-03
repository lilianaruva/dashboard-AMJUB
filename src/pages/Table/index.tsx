import { useState } from "react";
import { MaterialReactTable, MRT_ColumnDef, useMaterialReactTable } from "material-react-table";
import { Box, Switch, TextField, Tooltip } from "@mui/material";
export interface UserTable {
    id: number
    name: string
    email: string
    tel: string
    isActive: boolean
    notif_date: Date
}

const initialData: UserTable[] = [
    { id: 1, name: "Juan Pérez", email: "juan@example.com", tel: "555-1234", isActive: true, notif_date: new Date("2024-01-15") },
    { id: 2, name: "María López", email: "maria@example.com", tel: "555-5678", isActive: false, notif_date: new Date("2024-02-10") },
    { id: 3, name: "Carlos Méndez", email: "carlos@example.com", tel: "555-9876", isActive: true, notif_date: new Date("2024-03-05") },
];

const Table = () => {
    const [data] = useState<UserTable[]>(initialData);

    const columns: MRT_ColumnDef<UserTable>[] = [
        {
            accessorKey: "name",
            header: "Nombre",
            enableColumnFilter: true,
            Filter: ({ column }) => (
                <TextField
                    variant="standard"
                    placeholder="Filtrar por nombre"
                    onChange={(e) => column.setFilterValue(e.target.value)}
                />
            ),
        },
        {
            accessorKey: "email",
            header: "Correo Electrónico",
            enableColumnFilter: true,
            Filter: ({ column }) => (
                <TextField
                    variant="standard"
                    placeholder="Filtrar por email"
                    onChange={(e) => column.setFilterValue(e.target.value)}
                />
            ),
        },
        {
            accessorKey: "tel",
            header: "Teléfono",
            enableColumnFilter: true,
            Filter: ({ column }) => (
                <TextField
                    variant="standard"
                    placeholder="Filtrar por teléfono"
                    onChange={(e) => column.setFilterValue(e.target.value)}
                />
            ),
        },
        {
            accessorKey: "isActive",
            header: "Activo",
            enableColumnFilter: true,
            Cell: ({ row }) => (
                <Switch checked={row.original.isActive} disabled />
            ),
            Filter: ({ column }) => (
                <Tooltip title="Filtrar activos/inactivos">
                    <Switch
                        onChange={(e) => column.setFilterValue(e.target.checked)}
                    />
                </Tooltip>
            ),
        },
        {
            accessorKey: "notif_date",
            header: "Fecha de Notificación",
            enableColumnFilter: true,
            Cell: ({ row }) => (
                <Box>{new Date(row.original.notif_date).toLocaleDateString()}</Box>
            ),
            Filter: ({ column }) => (
                <TextField
                    type="date"
                    variant="standard"
                    onChange={(e) => column.setFilterValue(e.target.value)}
                />
            ),
        },
    ];

    const table = useMaterialReactTable({
        columns,
        data,
        enableColumnFilterModes: true,
        enablePagination: false,
    })

    return (
        <MaterialReactTable
            table={table}
        />
    );
};

export default Table;
