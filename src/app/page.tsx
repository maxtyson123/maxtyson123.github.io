"use client";
import Image from 'next/image'
import Header from "@/components/header";
import {project} from "@/lib/projects";
import {MouseBlob} from "@/components/blob";
import styles from "@/styles/page.module.css";
import MaxIdSection from "@/components/maxid";
import {currentUser, User} from "@clerk/nextjs/server";
import {useEffect, useState} from "react";

export default function Home() {

    const [user, setUser] = useState<User | null>(null)

    const getData = () => {

        const projects: project[] = []
        const projectFiles = ["rongoa"]

        // Loop through each project file loading the data
        projectFiles.forEach((file) => {
            const data = require(`../../public/projects/${file}.json`)
            projects.push(data)
        })
        return projects


    }

    const data = getData()

    useEffect(() => {

        // Get the user account
        currentUser().then((user) => {
            setUser(user)
        })

    }, [])

    return(
        <>


            {/* Main Header */}
            <Header title={"Max Tyson"} subtitle={"Websites & More!"} data={data}/>
            <div className={styles.break}/>

            {/* Site Content */}
            <div className={styles.content}>

                {/* Max ID */}
                <MaxIdSection user={user}/>

                {/* Projects */}
                <p>Projects</p>

                {/* Previous Employment */}
                <p> Employment</p>

                {/* Contact */}
                <p>Contact</p>

                {/* Footer */}
                <p>Footer</p>

            </div>
        </>
    )

}
