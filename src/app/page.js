import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./component/Navbar/page";
import Hero from "./component/Hero/page";
import Services from "./component/services/page";
import Doctors from "./component/Doctors/page";
import Trust from "./component/Trust/page";
import Footer from "./component/footer/page";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Doctors />
        <Trust />
      </main>
    </>
  );
}
