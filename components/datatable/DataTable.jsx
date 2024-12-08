"use client"
import Image from 'next/image';
import './datatable.scss'
import {
    DataGrid,
    GridToolbar,
} from '@mui/x-data-grid';
import { userRows } from '@/chartdata';
import Link from 'next/link';

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "img",
        headerName: "Avatar",
        width: 80,
        renderCell: (params) => {
            return <Image src={params.row.img || "/noavatar.png"} alt="" width={32} height={32} />;
        },
    },
    {
        field: "firstName",
        type: "string",
        headerName: "First name",
        width: 120,
    },
    {
        field: "lastName",
        type: "string",
        headerName: "Last name",
        width: 100,
    },
    {
        field: "email",
        type: "string",
        headerName: "Email",
        width: 150,
    },
    {
        field: "verified",
        headerName: "Verified",
        width: 100,
        type: "boolean",
    },

    {
        field: "createdAt",
        headerName: "Created At",
        width: 130,
        type: "string",
    },
    {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
            return (
                <div className='action'>
                    <Link href="/dashboard">
                        <Image src="/view.svg" alt="" width={15} height={15}  />
                    </Link>
                    <div className="delete">
                        <Image src="/delete.svg" alt="" width={15} height={15} />
                    </div>
                </div>
            )

        },

    },
];


const DataTable = () => {
    return (
        <div className='dataTable' style={{ height: 540, width: '99%' }}>
            <DataGrid
                className='dataGrid'
                rows={userRows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable