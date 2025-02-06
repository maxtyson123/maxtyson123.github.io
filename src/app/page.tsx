import Image from 'next/image'
import Header from "@/components/header";
import {project} from "@/lib/projects";
import {MouseBlob} from "@/components/blob";
import styles from "@/styles/page.module.css";
import MaxIdSection from "@/components/maxid";
import {currentUser, User} from "@clerk/nextjs/server";
import {Employment} from "@/components/employment";
import {Me} from "@/components/me";

export default async function Home() {

    const user = await currentUser();

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

    return (
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
                <Employment/>

                {/* Contact */}
                <Me/>

                {/* Footer */}
                <p>Footer</p>

            </div>
        </>
    )

}
