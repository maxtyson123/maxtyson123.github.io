import Image from 'next/image'
import Header from "@/components/header";
import {project} from "@/lib/projects";

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

            {/* Websites */}

            {/* Games */}

            {/* Other Projects */}

            {/* Contact */}

            {/* Footer */}
        </>
    )

}
