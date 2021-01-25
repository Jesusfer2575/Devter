// We don't need to import React library, Next JS does
import Link from 'next/link';
import AppLayout from '../../components/AppLayout';

export default function Timeline ({ userName }) {
    return (
      <>
        <AppLayout>
          <h1>This is the timeline of {userName}</h1>
          <div>
            <Link href="/">Go home</Link>
          </div>
        </AppLayout>
        <style>{`
          h1 {
            color: tomato;
            font-size: 36px;
            text-align: center;
          }
          
          div {
            text-align: center;
            color: tomato;
            text-decoration: none;
          }
          `}</style>
      </>
    );
};
/**
 * getInitialProps
 * nos permite pasar al componente props
 * Esto funciona como un Hydrate, ademas de renderizar en el server
 * estos props son mandados al cliente para que este los renderice en el cliente
 * Solo funciona en componentes de tipo PAGINA
 */
Timeline.getInitialProps = async () => {
  const data = await fetch('http://localhost:3000/api/hello');
  const { name } = await data.json();
  return { userName: name };
};