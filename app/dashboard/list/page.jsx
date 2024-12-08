"use client"
import DataTable from "@/components/datatable/DataTable"
import '@/styles/list.scss'
import Image from "next/image";

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <Image src={params.row.img || "/noavatar.png"} alt="" width={32} height={32} />;
      },
    },
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 150,
    },
    {
      field: "lastName",
      type: "string",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 200,
    },
    {
        field: "verified",
        headerName: "Verified",
        width: 150,
        type: "boolean",
      },
]
  

const Listpage = () => {

    return (
        <div className="lists">
            <div className="info">
                <DataTable />
            </div>
        </div>
    )
}

export default Listpage