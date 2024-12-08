"use client"
import styles from "@/styles/update.module.css"
import Image from "next/image"
import { useState } from "react";
import { addShop } from "@/lib/shop-action";


const ShopAddpage = () => {
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
            // style={{ maxWidth: "80px", maxHeight: "100px" }}
            />
          )}
        </div>

      </div>
      <div className={styles.formContainer}>
        <form action={addShop} className={styles.form} >
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
          <label>Shop Name</label>
          <input type="text" name="shopname" />
          <label>Date</label>
          <input type="date" name="date" />
          <label>Address</label>
          <input type="text" name="address" />
          <label>notice</label>
          <textarea type="text" name="notice" />
          <button>Add Shop</button>

        </form>
      </div>
    </div>

  );
}


export default ShopAddpage