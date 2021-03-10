import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@material-ui/core/Button'
import classes from '../public/scss/navbar.module.scss'


export const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <Link href={'/'}>
                <a className={classes.navbar__logo}>
                    <img src="/img/logo.svg" alt="logo" />
                </a>
            </Link>
            <nav className={classes.navbar__nav}>
                <Link href={'/about'}><a className={classes.navbar__navItem}>About</a></Link>
                <Link href={'/posts'}><a className={classes.navbar__navItem}>Blog</a></Link>
            </nav>
            <Button variant="contained" color="primary" component="span">Get Estimate</Button>
        </div>
    )
}