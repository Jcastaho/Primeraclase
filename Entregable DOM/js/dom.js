export const computersChoiceDisplay = document.getElementById('computers-choice');
export const usersChoiceDisplay = document.getElementById('your-choice');
export const resultDisplay = document.getElementById('result');

export const seccion = 
`
<head>
    <title>Pokémon Page</title>
</head>
<body>
    <header class="page-header">
        <h1 class="page-title">Bienvenido al Mundo Pokémon</h1>
    </header>
    
    <nav class="main-nav">
        <ul class="nav-list">
            <li class="nav-item"><a href="#">Inicio</a></li>
            <li class="nav-item"><a href="#">Pokédex</a></li>
            <li class="nav-item"><a href="#">Entrenadores</a></li>
        </ul>
    </nav>
    
    <main class="content">
        <section class="featured-pokemon">
            <h2 class="section-title">Pokémon Destacado</h2>
            <p class="pokemon-description">Charizard es un Pokémon de tipo fuego/volador conocido por su poderoso aliento de fuego.</p>

            <main class="contenedor">
            <article class="card">
            <img class="card-header" src="./IMG/fondoencabezado.svg" alt="FondoCard">
            <section class="card-body">
                <section class="card-body-contentimg">
                    <img class="card-body-contentimg-img" src="./IMG/charizard.png" alt="charizard" width="150">
                </section>
                <h1 class="card-body-title">
                    Charizard
                    <span>#26</span>
                </h1>
                <p class="card-body-text">Coleccionable</p>
            </section>
            <footer class="card-footer">
                <section class="card-footer-poder">
                    <h3>Poder</h3>
                    <img src="./IMG/fuego.png" alt="Fuego" width="35">
                </section>
                <section class="card-footer-poder">
                    <h3>Resistencia</h3>
                    <img src="./IMG/castillo.png" alt="Resistencia" width="35">
                </section>
                <section class="card-footer-poder">
                    <h3>Bonus</h3>
                    <img src="./IMG/cofre.png" alt="Bonus" width="35">
                </section>
            </footer>
        </article>
    </main>



        </section>
        
        <section class="latest-news">
            <h2 class="section-title">Últimas Noticias</h2>
            <ul class="news-list">
                <li class="news-item"><a href="#">Nuevo juego de Pokémon anunciado</a></li>
                <li class="news-item"><a href="#">Campeonato Pokémon Mundial 2023</a></li>
                <li class="news-item"><a href="#">Charizard regresa en la próxima película</a></li>
            </ul>
        </section>
    </main>
    
    <footer class="page-footer">
        <p class="copyright">2023 Pokémon Company</p>
    </footer>
</body>
`;