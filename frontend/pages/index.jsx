import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import MapContainer from "../components/MapContainer";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <InstructionsComponent>
        </InstructionsComponent>
      </main>
    </div>
  );
}
