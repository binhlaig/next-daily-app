"use client"
import styles from "@/styles/update.module.css"
import Image from "next/image"
import { useState } from "react";
import { addBank } from "@/lib/bank-action";

const bankpage = () => {
    const [formData, setFormData] = useState({
        profileImage: null,
      });
      const handleChange = (e) => {
        e.preventDefault();
        const { name, value, files } = e.target;
        setFormData({
          ...formData,
          [name]: value,
          [name]: name === "profileImage" ? files[0] : value,
        });
      };
  return (
    <div className={styles.container}>

      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
        {formData.profileImage && (
          <Image
           fill
            src={URL.createObjectURL(formData.profileImage)}
            alt="Profile"
            //style={{ maxWidth: "150px", maxHeight: "150px" }}
          />
        )}
        </div>

      </div>
      <div className={styles.formContainer}>
        <form action={addBank} className={styles.form} >
          <label htmlFor="image">
            <Image src="/assets/addImage.png" alt="add profile" width={15} height={15} />
            <p>Upload Profile Photo</p>
          </label>
          <input
            id="image"
            type="file"
            name="profileImage"
            onChange={handleChange}
            accept="image/*"
            style={{ display: "none" }}
            required
          />
          <label>Bank Name</label>
          <input type="text" name="bankname" />
          <label>Date</label>
          <input type="date" name="date" />
          <label>Address</label>
          <input type="text" name="address" />
          <label>notice</label>
          <textarea type="text" name="notice" />
          <button>Add Bank</button>

        </form>
      </div>
    </div>
  )
}

export default bankpage