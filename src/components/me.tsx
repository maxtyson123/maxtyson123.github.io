import styles from "@/styles/employment.module.css";

export function Me() {

    return(
        <>
            <div className={"break"}/>

            <h1 style={{fontSize: "3.5rem", textAlign: "center"}} > Me</h1>

            <div className={"container"} style={{width: "90vw"}}>

                <div className={styles.left}>
                    <img src={"https://maxtyson.me/images/max.jpg"} alt={"Max Tyson"}/>
                    <h1>Max Tyson</h1>
                    <p>Coding Enthusiast</p>

                    <div className={"break"}/>

                    <p>027 777 8437</p>
                    <p>me@maxtyson.net</p>

                    <div className={"break"}/>

                    <p> Currently studying at </p>
                    <p> Currently working at </p>


                </div>

                <div className={styles.right}>
                    <p>Coding Since TIME</p>
                    <p>Total Time Spent coding TIME</p>

                    <div className={"break"}/>

                    <p>Last used langauge: </p>
                    <p>Most used langauge: </p>
                    <p>Current Favourite Langaugae:</p>

                    <div className={"break"}/>

                    <p>Most Modified Project: </p>
                    <p>Last Modified Project: </p>
                    <p>Last Used IDE:</p>

                </div>
            </div>
        </>
    )
}
