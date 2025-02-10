"use client"
import dynamic from "next/dynamic";
import styles from "./page.module.css"


const InteractiveMapDynamic = dynamic(() => import("@/components/map/InteractiveMap"),{
  ssr: false,
  }
);

const Home = () => {

  return (
    <div className={styles.mapContainer}>
      <InteractiveMapDynamic />
    </div>
  )

}



export default Home;