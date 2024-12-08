"use client"
import Image from "next/image";
import styles from "./sidebar.module.css"
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdHelpCenter,
    MdLogout,
    MdPrint,
    MdList,
    MdShop,
    MdFoodBank,
    MdAddBox,
    MdAssuredWorkload,
    MdHowToReg ,
    
} from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import MenuLink from "./menulink/MenuLink";

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "In",
                path: "/dashboard/income",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Out",
                path: "/dashboard/outcome",
                icon: <MdShoppingBag />,
            },
            {
                title: "Print",
                path: "/dashboard/print",
                icon: <MdPrint />,
            },
            {
                title: "Total",
                path: "/dashboard/total",
                icon: <MdAddBox />,
            },
            {
                title: "Tax",
                path: "/dashboard/details_tax",
                icon: <MdAssuredWorkload />,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "List",
                path: "/dashboard/list",
                icon: <MdList/>,
            },
            {
                title: "Profile",
                path: "/dashboard/profile",
                icon: <MdHowToReg/>,
            },
            {
                title: "Shop Add",
                path: "/dashboard/shop-add",
                icon: <MdShop/>,
            },
            {
                title: "Chart",
                path: "/dashboard/chart",
                icon: <FaChartLine />,
            },
            {
                title: "Bank Add",
                path: "/dashboard/bank",
                icon: <MdFoodBank/>,
            },
        ],
    },
];

import { signOut, useSession } from "next-auth/react"

const handleLogout = async () => {
  signOut({ callbackUrl: '/login' })
}
const Sidebar = () => {
    const { data: session } = useSession()
    const user = session?.user
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image
                    className={styles.userImage}
                    src={user.profileImagePath || "/noavatar.png"}
                    alt=""
                    width="50"
                    height="50"
                />

                <div className={styles.userDetail}>
                    <span className={styles.username}> {user.username}</span>
                    <span className={styles.userTitle}> Administrator</span>
                </div>
            </div>
            <ul>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
            <form action={handleLogout} >
                <button className={styles.logout}>
                    <MdLogout />
                    Logout
                </button>
            </form>



        </div>
    )
}

export default Sidebar