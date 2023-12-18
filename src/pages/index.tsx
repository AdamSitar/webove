import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
//import Image from 'next/image'
//import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css"></link>
        <link rel="stylesheet2" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
        <title>Webové technológie</title>
      </Head>

      <header>
        <nav>
          <button onClick={() => alert('Úvod')}>Úvod</button>
          <button onClick={() => alert('Záľuby')}>Záľuby</button>
          <button onClick={() => alert('Sekcia zmien')}>Sekcia zmien</button>
        </nav>
      </header>

      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          repellat perferendis quod laborum molestias atque, qui suscipit
          corporis a itaque, ipsa dolore pariatur, quis natus consequatur quas.
          Id, vel facere?
        </p>
        <div>
          <img src="TUKE.jpg" alt="TUKE Image" />
        </div>
      </main>

      <footer>
        <p>© 2023 Matej Novotny</p>
        <div className="social-icons">
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </footer>

    </>
  );
};

//export default Home;