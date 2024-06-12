"use client";

import styles from "@/styles/employment.module.css";



interface EmploymentCardProps {
    title: string;
    image: string;
    company: string;
    website: string;
    start: string;
    end: string;
    description: string;
}

export const employmentData = [
    {
        "title": "Overflow Web Developer",
        "company": "Monster Creative",
        "image": "https://gomonster.nz/wp-content/uploads/2019/10/Monster-Vertical.jpg",
        "website": "https://gomonster.nz/",
        "start": "2024",
        "end": "Present",
        "description": "I managed the migration of websites between internal hosting."
    },
    {
        "title": "IT Support",
        "company": "Kiwi Coast",
        "image": "https://www.backyardkiwi.org.nz/wp-content/uploads/2016/02/Kiwi-Coast-logo.jpg",
        "website": "https://kiwicoast.org.nz/",
        "start": "2023",
        "end": "Present",
        "description": "I supported digital aspects of this business through consulting and support. I also designed graphics for their website & reports."
    },
    {
        "title": "Web Developer",
        "company": "Kiwi Link",
        "image": "https://kiwilink.org.nz/wp-content/uploads/2023/03/kiwilink01-scaled-1-1024x709.jpeg",
        "website": "https://kiwilink.org.nz/",
        "start": "2023",
        "end": "2024",
        "description": "I designed a multi-page modern static website for this business."
    },
    {
        "title": "Web Developer",
        "company": "Sedna D&B",
        "image": "https://sednadb.tech/wp-content/uploads/2021/08/cropped-cropped-Blasting-LG.png",
        "website": "https://sednadb.tech/",
        "start": "2022",
        "end": "2022",
        "description": "I designed a multi-page modern static website for this business."
    }
]

export function EmploymentCard(props: EmploymentCardProps) {



    return(
        <>
            <div className={"container"} style={{width: "80vw"}}>
                <div className={styles.employmentCard} onClick={() => window.open(props.website)}>

                    <img src={props.image} alt={"Employer Logo"}/>
                    <h2>{props.company}</h2>

                    <div className={styles.info}>
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                    </div>

                    <div className={styles.date}>
                        <h4>{props.start}</h4>
                        <h4> - </h4>
                        <h4>{props.end}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export function Employment() {
    return (
        <>
            <div className={"break"}/>
            <div className={styles.employment}>
                <h1> Employment</h1>
                {employmentData.map((data, index) => {
                    return(
                        <EmploymentCard
                            key={index}
                            title={data.title}
                            website={data.website}
                            image={data.image}
                            company={data.company}
                            start={data.start}
                            end={data.end}
                            description={data.description}
                        />
                    )
                })}
            </div>
        </>
    )
}