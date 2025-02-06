import Image from "next/image";
import styles from "@/styles/maxid.module.css";

export default function MaxIdSection({user} : {user: any}) {

  return (
      <>
          <div className={"break"}/>
          <div className={"container"} style={{width: "60vw"}}>
              <div className={styles.maxid}>
                  <div className={styles.image}>
                      <Image src="/media/images/maxid.svg" alt="Max ID" width={200} height={200}/>
                      <div className={styles.dashedbg}></div>
                      <div className={styles.dashedbg + " " + styles.dash2}></div>

                  </div>
                  <h1>Max ID</h1>
                  <p>One Account. All Projects.</p>
                  <div className={styles.accountchip}>
                      <img className={styles.userimgage}
                           src={user ? user.imageUrl : "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yaEFQR3hCUTFmV1NyQnlvSkRGaVlzNXd4aVEiLCJyaWQiOiJ1c2VyXzJoRGtNSnBVMTRHTGVIanBHZTV0WWVGS1RMNiJ9"}
                           alt="User"/>
                      {user ? user.fullName : "Not Signed In"}
                  </div>
              </div>
          </div>
      </>

  );
}