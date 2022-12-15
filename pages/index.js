import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <> 
  <Head>
     <title>Ninja List | Home</title>
     <meta name="keywords" content="ninjas" />
   </Head>
    <div>
     
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem vero dignissimos, asperiores iure enim nobis possimus incidunt consequuntur, voluptate consequatur id molestias sit accusamus labore, officia delectus at assumenda cumque!</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem vero dignissimos, asperiores iure enim nobis possimus incidunt consequuntur, voluptate consequatur id molestias sit accusamus labore, officia delectus at assumenda cumque!</p>
     <Link className={styles.btn} href="/ninjas">See Ninja Listing</Link>
    
    </div>
    </>
  )
}
