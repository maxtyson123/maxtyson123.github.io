import Image from 'next/image'
import Header from "@/components/header";
import {project} from "@/lib/projects";
import {MouseBlob} from "@/components/blob";
import styles from "@/styles/page.module.css";

export default function Home() {

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

    return(
        <>


            {/* Main Header */}
            <Header title={"Max Tyson"} subtitle={"Websites & More!"} data={data}/>
            <div className={styles.break}/>

            {/* Site Content */}
            <div className={styles.content}>

                {/* Websites */}
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>
                <p>BLAH</p>

                {/* Games */}

                {/* Other Projects */}

                {/* Contact */}

                {/* Footer */}

            </div>
        </>
    )

}
