
import Image from "next/image"
import styles from "./reansaction.module.css"
import { fetchshops, fetchusers } from "@/lib/data"
import { deleteUser } from "@/lib/action"
const transaction = async () => {
    const users = await fetchusers();
    const shops =await fetchshops()
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>User</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                {users.map((user) => (
                    <tbody key={user.id}>
                        <tr >
                            <td>
                                <div className={styles.user}>
                                    <Image
                                        src={user.profileImagePath || "/noavatar.png"}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.userImage}
                                    />
                                    {user.username}
                                </div>
                            </td>
                            <td>{user.email}</td>
                            
                            <td>
                                <div className={styles.buttons}>                                 
                                    <form action={deleteUser}>
                                        <input type="hidden" name="id" value={user.id} />
                                        <button className={`${styles.button} ${styles.delete}`}>
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>


                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default transaction