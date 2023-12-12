'use client'
import {project} from "@/lib/projects";
import styles from "@/styles/header.module.css";
import {useEffect, useState} from "react";

interface HeaderProps {
    title: string;
    subtitle: string;
    data: project[];
}
export default function Header({title, subtitle, data}: HeaderProps) {

    const [images, setImages] = useState<null | string[]>([])

    useEffect(() => {

        // Get all the images
        const images = document.getElementsByTagName("img")

        // Convert the images to an array
        const imagesArray = Array.from(images)
        const positionsArray = []

        // Get the positions of the images
        imagesArray.forEach((image) => {
            const position = image.getBoundingClientRect()
            positionsArray.push(position)
        })


        
        // Create an interval to animate the images
        let interval = null;





    }, [])

    return(
        <>

            {/* Background */}
            <div className={styles.background}>

                <div className={styles.collumn}>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                </div>
                <div className={styles.collumn}>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                </div>
                <div className={styles.collumn}>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                </div>
                <div className={styles.collumn}>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                </div>
                <div className={styles.collumn}>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                </div>
                <div className={styles.collumn}>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                </div>
                <div className={styles.collumn}>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                </div>
                <div className={styles.collumn}>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                    <img
                        src={"https://www.wikihow.com/images/thumb/4/4b/Personal_color_test.png/728px-Personal_color_test.png"}/>
                </div>


            </div>

            {/* Content */}
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.subtitle}>{subtitle}</h2>
                    <button className={styles.button}>See More</button>
                </div>
            </div>
        </>
    )
}