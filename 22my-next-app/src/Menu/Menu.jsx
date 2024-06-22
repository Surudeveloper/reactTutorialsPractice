'use client'
import React, { useState } from 'react';
import styles from './Menu.module.css'
import Link from 'next/link';
import menuItems from './includes/menuitems.json'
import {usePathname} from 'next/navigation'
// import { useRouter } from 'next/navigation';


export const Menu = ()=>{
    const pathname = usePathname();
    const [menu,setMenu]  = useState( pathname.slice(1) || 'home')
    console.log('pathname',pathname);
    const fnClick=(x)=>{

        setMenu(x)
    }
    // return <div className="menuItem">
    return (<div className={styles.menu}>

        {/* <a href="/home">Home</a> //using this a tag will reload the page
        <a href="/about">About</a>
        <a href="/contact">Contact</a> */}

        {/* <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link> */}

        {
            // menuItems.map((ob, ind)=>{
            //     return <Link key={`menuItems_${ind}`} href={ob.name}>{ob.text}</Link>
            //})

            menuItems?.map(({text, name}, ind)=>{
                return <Link className={ menu==name ? styles.active:'' } key={`menuItems_${ind}`} 
                    href={`/${name}`} onClick={()=>fnClick(name)}>{text}</Link>
            })
        }
    </div>
    )
}
// export default Menu