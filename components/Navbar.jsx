"use client"
import "@/styles/Navbar.scss"
import { IconButton } from '@mui/material'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, Person, Search, ShoppingCart } from '@mui/icons-material'
const Navbar = () => {
    const { data: session } = useSession()
    const user = session?.user
  
    const [dropdownMenu, setDropdownMenu] = useState(false)
  
    const handleLogout = async () => {
      signOut({ callbackUrl: '/login' })
    }
    return (
        <div className='navbar'>
            <div>
                Bin Hlaig Group
            </div>

            <div className='navbar_search'>
            <input type='text' placeholder='Search...' />
                <IconButton >
                    <Search sx={{ color: "red" }}  />
                </IconButton>
            </div>

            <div className='navbar_right'>
                {user && (
                    <a href="/cart" className="cart">
                        <ShoppingCart sx={{ color: "gray" }} />
                        Cart <span>(2)</span>
                    </a>
                )}
                <button className='navbar_right_account' onClick={() => setDropdownMenu(!dropdownMenu)}>
                    <Menu sx={{ color: "gray" }} />
                    {!user ? (
                        <Person sx={{ color: "gray" }} />
                    ) : (
                        <img src={user.profileImagePath} alt='profile' style={{ objectFit: "cover", borderRadius: "50%" }} />
                    )}
                </button>

                {dropdownMenu && !user && (
                    <div className='navbar_right_accountmenu'>
                        <Link href="/login">Log In</Link>
                        <Link href="/register">Sign Up</Link>
                    </div>
                )}

                {dropdownMenu && user && (
                    <div className='navbar_right_accountmenu'>
                        <Link href="/cart">Cart</Link>
                       
                        <a onClick={handleLogout}>Log Out</a>
                    </div>
                )}

            </div>

        </div>
    )
}

export default Navbar