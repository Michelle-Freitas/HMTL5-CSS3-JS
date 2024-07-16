import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { Banner } from "../../components/Banner";
import styles from "./DefaultPage.module.css";

export const DefaultPage = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Banner />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
