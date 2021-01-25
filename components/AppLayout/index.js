import styles from '../../styles/Home.module.css';

export default function AppLayout({ children }) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          { children }   
        </div>
      </main>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-familiy: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        } 
      `}</style>
    </>
  );
};