'use client'
import {project} from "@/lib/projects";
import styles from "@/styles/header.module.css";
import {useEffect, useRef, useState} from "react";
import {id} from "postcss-selector-parser";

interface HeaderProps {
    title: string;
    subtitle: string;
    data: project[];
}

//TODO: Inner height shoulndt be used and neither should be bounding client rect

export default function Header({title, subtitle, data}: HeaderProps) {

    const runOnce = useRef(false)

    useEffect(() => {

        if(runOnce.current) return
        runOnce.current = true

        // Get the images
        let imageURLs: string[] = []
        data.forEach((project) => {
            for (let i = 0; i < project.images.length; i++) {
                const image = project.images[i];
                imageURLs.push('/media/images/' + project.name.toLowerCase() + '/' + image.link)
            }
        })

        // Shuffle the images
        imageURLs = imageURLs.sort(() => Math.random() - 0.5)

        // Get the divs containing the images
        const collumns = Array.from( document.getElementsByClassName(styles.collumn))

        // Calculate the number of images needed
        const columnsHeight = collumns[0].getBoundingClientRect().height
        const padding = 0.03 * columnsHeight
        const imageHeight = 100 + padding
        const numberOfImages = Math.ceil(columnsHeight / imageHeight)

        const imagesStartingPos: number[][] = [[], [], [], [], [], [], [], []]

        let currentImage = 0

        // Loop through the divs and add the images
        for (let i = 0; i < collumns.length; i++) {
            const collumn = collumns[i];
            for (let j = 0; j < numberOfImages; j++) {

                // Create the image
                const image = document.createElement("img")
                image.src = imageURLs[currentImage]

                // Increment the current image
                currentImage++
                if (currentImage >= imageURLs.length) currentImage = 0

                collumn.appendChild(image)

                // Add the padding to the image
                image.style.marginTop = padding + "px"
                imagesStartingPos[i].push(image.getBoundingClientRect().top)

                // If this is the last image and we are going down translate it to top of the screen
                   if (j === numberOfImages - 1 && collumn.classList.contains("down")) {
                       image.style.transform = `translateY(${- imagesStartingPos[i][j] - imageHeight + padding}px)`
                   }

            }
        }

        const speed = 25
        const animate = () => {

            // Loop through the collumns
            for (let h = 0; h < collumns.length; h++) {

                // Get the collumn
                const collumn = collumns[h];
                const isDown = collumn.classList.contains("down")

                // Get the images
                const imagesArray = Array.from(collumn.getElementsByTagName("img"))

                // Translate the images up
                for (let i = 0; i < imagesArray.length; i++) {

                    // Get the image
                    const image = imagesArray[i];

                    // Get the current position of the image
                    let currentPos = image.style.transform.replace("translateY(", "").replace("px)", "")
                    if (currentPos === "") currentPos = "0"

                    // Calculate the new position
                    let newPos = isDown ? parseInt(currentPos) + 1 :  parseInt(currentPos) - 1

                    // Set the new position
                    image.style.transform = `translateY(${newPos}px)`
                    const imagePos = image.getBoundingClientRect().top

                    // If the image is out of the screen, reset it
                    if (isDown && imagePos > columnsHeight) {
                        // Calculate  the translation needed to move from the starting pos to the bottom of the screen
                        const translation = - imagesStartingPos[h][i] - imageHeight
                        image.style.transform = `translateY(${translation}px)`


                    } else if (imagePos < -imageHeight) {
                        // Calculate  the translation needed to move from the starting pos to the bottom of the screen
                        const translation = columnsHeight - imagesStartingPos[h][i]
                        image.style.transform = `translateY(${translation}px)`

                    }

                }
            }
        }

        // Animate the images
        let anim: NodeJS.Timeout | null = setInterval(animate, speed)

        // Handle pausing on p
        document.addEventListener("keydown", (e) => {
            if (e.key === "p") {

                // If the animation is running, pause it
                if (anim) {
                    clearInterval(anim)
                    anim = null
                }

                // If the animation is paused, resume it
                else {
                    anim = setInterval(animate, speed)
                }


            }
        })


    }, [])

    return(
        <>

            <div className={styles.headerContianer}>

                {/* Content  */}
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <h1 className={styles.title}>{title}</h1>
                        <div className={styles.subtitle}>
                            <h2 >{subtitle}</h2>
                        </div>
                    </div>
                </div>

                {/* Background */}
                <div className={styles.background}>

                    <div className={styles.collumn}></div>
                    <div className={styles.collumn + " down"}></div>
                    <div className={styles.collumn}></div>
                    <div className={styles.collumn + " down"}></div>
                    <div className={styles.collumn}></div>
                    <div className={styles.collumn + " down"}></div>
                    <div className={styles.collumn}></div>
                    <div className={styles.collumn + " down"}></div>


                </div>
            </div>
        </>
    )
}