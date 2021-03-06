import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./projects.module.css";
import Projectpage from "../../components/projectpage";
import client from "../../sanity/sanityClient";
export default function Projects({ projectItems }) {
  return (
    <>
      <Head>
        <title>Henric \ Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.container}>
        <div className={styles.introText}>
          <div className={styles.introTitle}>PROJECTS</div>
          <div className={styles.introSubtitle}>
            Scroll down to see a selected set of projects I have worked on.
          </div>
        </div>
        {projectItems.length > 0 &&
          projectItems.map((projectItem, index) => {
            return (
              <div key={projectItem._id}>
                <Projectpage projItem={projectItem} index={index + 1} />
              </div>
            );
          })}
        Click on a project to see more details.
      </div>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const projectItems = await client.fetch(`*[_type =="projects"]`);

  return {
    props: {
      projectItems,
    },
  };
}
