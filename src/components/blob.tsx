"use client"
import styles from '@/styles/blob.module.css'
import {useEffect} from "react";
export function MouseBlob(){

    // Make the blob follow the mouse
    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            const blob = document.getElementById("blob")
            if (blob) {
                blob.animate({
                    left: `${e.clientX}px`,
                    top: `${e.clientY}px`
                }, {duration: 100, fill: "forwards"})
            }
        })
    }, []);


    return(
        <>
            <div className={styles.blob} id={"blob"}></div>
            <div className={styles.blur}></div>
        </>
    )

}