import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <React.Fragment>
            <Head>
                <title>Ninja List | Home</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1 className={styles.title}>Homepage</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor nesciunt vel unde iure modi sint voluptatum dolores
                    ullam natus eveniet!
                </p>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor nesciunt vel unde iure modi sint voluptatum dolores
                    ullam natus eveniet!
                </p>
                <Link href="ninjas">
                    <a className={styles.btn}>See Ninja Listing</a>
                </Link>
            </div>
        </React.Fragment>
    );
}
