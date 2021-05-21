import './dipsjit/main.css';
import MovieRow from './components/App.js';
// import './components/hamburger';


function App() {

  // const menuBtn = document.querySelector(".nav__hamburger");
  // const foldOut = document.querySelector(".nav__mobile");

  // menuBtn.addEventListener("click", () => {
  //   menuBtn.classList.toggle("open");
  //   foldOut.classList.toggle("open");
  // });

  
function shoot() {
  const menuBtn = document.querySelector(".nav__hamburger");
  const foldOut = document.querySelector(".nav__mobile");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    foldOut.classList.toggle("open");
  });
}



  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
        />

        <link rel="stylesheet" href="dist/main.css" />
        <title>Netflix</title>
      </head>
      <body>
        <header>
          <nav class="nav">
            <div class="nav__logo">
              <img src="images/logo.svg" alt="netflix-logo" />
            </div>

            <div class="nav__links hide-tablet">
              <a class="nav__links__active" href="#">
                Homepagina
              </a>
              <a href="#">Series</a>
              <a href="#">Films</a>
              <a href="#">Nieuw en populair</a>
              <a href="#">Mijn lijst</a>
            </div>

            <div class="nav__icons hide-tablet">
              <a href="#">
                <i class="fas fa-search"></i>
              </a>
              <a href="#">
                <i class="fas fa-gift"></i>
              </a>
              <a href="#">KIDS</a>
              <a href="#">
                <i class="fas fa-bell"></i>
              </a>
              <a href="#">
                <i class="fas fa-square"></i>
              </a>
              <a href="#">
                <i class="fas fa-sort-down"></i>
              </a>
            </div>

            <div className="nav__hamburger" onClick={shoot}>
              <div class="lines"></div>
            </div> 

            <div class="nav__mobile">
              <a href="#">Homepagina</a>
              <a href="#">Series</a>
              <a href="#">Films</a>
              <a href="#">Nieuw en populair</a>
              <a href="#">Mijn lijst</a>
            </div>
          </nav>

          <section class="hero p-lr">
            <div class="hero__container">
              <div class="hero__container__left">
                <img src="images/title-image.png" alt="title-image" />
                <h3>
                  <i class="fas fa-check-square"></i> Nr. 6 in Nederland vandaag
                </h3>
                <p>
                  De succesvolle bankrover Tom Carter gaat nauwgezet te werk en
                  heeft zijn eigen normen en miljoenen aan contanten. Dan maakt
                  hij de fout om zichzelf aan te geven.
                </p>
                <a class="btn btn-light" href="#">
                  <i class="fas fa-caret-right"></i> Afspelen
                </a>
                <a class="btn btn-dark" href="#">
                  <i class="fas fa-info-circle"></i> Meer informatie
                </a>
              </div>
              <div class="hero__container__right">
                <div class="hero__container__right__pegi">
                  <img src="/images/pegi.svg" alt="pegi" />
                </div>
              </div>
            </div>
          </section>
        </header>

        <section class="main">
          <div className="lijst">
            <h2>Mijn lijst</h2>
          </div>
          <MovieRow />
        </section>

        <footer>
          <div class="footer">
            <div class="footer__media">
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-youtube"></i>
            </div>
            <div class="footer__links">
              <ul>
                <a href="#">Audio en ondertiteling</a>
                <a href="#">Mediacenter</a>
                <a href="#">Privacy</a>
                <a href="#">Contact opnemen</a>
              </ul>
              <ul>
                <a href="#">Audiodescriptie</a>
                <a href="#">Relaties met investeerders</a>
                <a href="#">Wettelijke bepalingen</a>
              </ul>
              <ul>
                <a href="#">Helpcentrum</a>
                <a href="#">Vactures</a>
                <a href="#">Cookievoorkeuren</a>
              </ul>
              <ul>
                <a href="#">Audio en Cadeaubonnen</a>
                <a href="#">Gebruiksvoorwaarden</a>
                <a href="#">Bedrijfgegevens</a>
              </ul>
            </div>
            <div class="footer__button">
              <a href="#">Servicecode</a>
            </div>
            <div class="footer__copyright">
              <p>1997-2021 Netflix, Inc.</p>
            </div>
          </div>
        </footer>
        <script src="/app/js/main.js"></script>
      </body>
    </html>
  );
}


export default App;
