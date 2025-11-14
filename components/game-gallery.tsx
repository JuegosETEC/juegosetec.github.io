"use client";

import Link from "next/link";
import { GameCard } from "./game-card";
import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

type InfoGame = {
  id: string;
  thumbnail: string;
  motor: string;
  nombre: string;
  estudiantes: string;
  link: string;
  year: number;
};

const games: InfoGame[] = [
  // 2025
  {
    id: "correr_o_mueres",
    thumbnail: "/2025/thumbs/correr_o_mueres.gif",
    motor: "TIC-80",
    nombre: "Correr o Mueres",
    estudiantes: "Rodriguez, Santiago (3B)",
    link: "/2025/correr_o_mueres.html",
    year: 2025,
  },
  {
    id: "quemado",
    thumbnail: "/2025/thumbs/quemado.gif",
    motor: "TIC-80",
    nombre: "Quemado",
    estudiantes: "Condori, Eikky; Chavez, Alan (3D)",
    link: "/2025/quemado.html",
    year: 2025,
  },
  {
    id: "rescata_gatito",
    thumbnail: "/2025/thumbs/rescata_gatito.gif",
    motor: "TIC-80",
    nombre: "Rescata Gatito",
    estudiantes: "Fonceca, Britany; Soto, Lourdes (4D)",
    link: "/2025/rescata_gatito.html",
    year: 2025,
  },
  // 2024
  {
    id: "conejo",
    thumbnail: "/2024/thumbs/conejo.png",
    motor: "TIC-80",
    nombre: "Conejo",
    estudiantes: "Della Torre, Priscila (4D)",
    link: "/2024/conejo.html",
    year: 2024,
  },
  {
    id: "kimetsu",
    thumbnail: "/2024/thumbs/kimetsu.png",
    motor: "TIC-80",
    nombre: "Kimetsu no Yaiba",
    estudiantes: "Avila, Thomás (4D)",
    link: "/2024/kimetsu.html",
    year: 2024,
  },
  {
    id: "ovni",
    thumbnail: "/2024/thumbs/ovni.gif",
    motor: "TIC-80",
    nombre: "El Rescate de los Perros",
    estudiantes: "Ajata, Diego (4D)",
    link: "/2024/ovni.html",
    year: 2024,
  },
  {
    id: "pitusa1",
    thumbnail: "/2024/thumbs/pitusa1.gif",
    motor: "TIC-80",
    nombre: "El Sargento Pitusa - Parte 1",
    estudiantes: "Valeriano, Fabián Gabriel (4B)",
    link: "/2024/pitusa1.html",
    year: 2024,
  },
  {
    id: "pitusa2",
    thumbnail: "/2024/thumbs/pitusa2.gif",
    motor: "TIC-80",
    nombre: "El Sargento Pitusa - Parte 2",
    estudiantes: "Perez Rodriguez, Sol (4B)",
    link: "/2024/pitusa2.html",
    year: 2024,
  },
  {
    id: "recursos",
    thumbnail: "/2024/thumbs/recursos.gif",
    motor: "TIC-80",
    nombre: "Zomboid",
    estudiantes: "Gomez Burzolino, Santiago (4D)",
    link: "/2024/recursos.html",
    year: 2024,
  },
  {
    id: "comida",
    thumbnail: "/2024/thumbs/comida.gif",
    motor: "TIC-80",
    nombre: "Comida Rápida",
    estudiantes: "Calderón, Valentina Natalia (4D)",
    link: "/2024/comida.html",
    year: 2024,
  },
  {
    id: "laberinto",
    thumbnail: "/2024/thumbs/laberinto.gif",
    motor: "TIC-80",
    nombre: "Laberinto",
    estudiantes: "Leyenda, Liam (4D)",
    link: "/2024/laberinto.html",
    year: 2024,
  },
  {
    id: "mrbeast",
    thumbnail: "/2024/thumbs/mrbeast.gif",
    motor: "TIC-80",
    nombre: "Mr. Beast",
    estudiantes: "Diaz, Miguel Angel (4B)",
    link: "/2024/mrbeast.html",
    year: 2024,
  },
  {
    id: "shooter",
    thumbnail: "/2024/thumbs/shooter.gif",
    motor: "TIC-80",
    nombre: "Shooter",
    estudiantes: "Moyano, Bautista Uriel (4B)",
    link: "/2024/shooter.html",
    year: 2024,
  },
  {
    id: "nave",
    thumbnail: "/2024/thumbs/nave.gif",
    motor: "TIC-80",
    nombre: "Viaje Espacial",
    estudiantes: "Valle, Daniel Fernando (4D)",
    link: "/2024/nave.html",
    year: 2024,
  },
  {
    id: "crossy",
    thumbnail: "/2024/thumbs/crossy.gif",
    motor: "TIC-80",
    nombre: "Crossy Road",
    estudiantes: "Quispe, Ayelén Belén (4D)",
    link: "/2024/crossy.html",
    year: 2024,
  },
  {
    id: "dimensional",
    thumbnail: "/2024/thumbs/dimensional.gif",
    motor: "TIC-80",
    nombre: "Over the Dimensional Tales",
    estudiantes: "Parrado, Juan Manuel (4D)",
    link: "/2024/dimensional.html",
    year: 2024,
  },
  {
    id: "gatorana",
    thumbnail: "/2024/thumbs/gatorana.gif",
    motor: "TIC-80",
    nombre: "Gatito Rana",
    estudiantes: "Sarabia, Micaela (4D)",
    link: "/2024/gatorana.html",
    year: 2024,
  },
  {
    id: "godzilla",
    thumbnail: "/2024/thumbs/godzilla.gif",
    motor: "TIC-80",
    nombre: "Godzilla",
    estudiantes: "Isla, Nain (4D)",
    link: "/2024/godzilla.html",
    year: 2024,
  },
  {
    id: "zombieshooter",
    thumbnail: "/2024/thumbs/zombieshooter.gif",
    motor: "TIC-80",
    nombre: "Zombie Shooter",
    estudiantes: "Ojeda, Leonardo (4B)",
    link: "/2024/zombieshooter.html",
    year: 2024,
  },
  {
    id: "carrera",
    thumbnail: "/2024/thumbs/carrera.gif",
    motor: "TIC-80",
    nombre: "Carrera",
    estudiantes: "Villareal Oyola, Evelyn (4D)",
    link: "/2024/carrera.html",
    year: 2024,
  },
  {
    id: "escondite",
    thumbnail: "/2024/thumbs/escondite.gif",
    motor: "TIC-80",
    nombre: "Escondite Nocturno",
    estudiantes: "Gomez, Thiago (4B)",
    link: "/2024/escondite.html",
    year: 2024,
  },
  {
    id: "laberintogato",
    thumbnail: "/2024/thumbs/laberintogato.gif",
    motor: "TIC-80",
    nombre: "Laberinto",
    estudiantes: "Mendoza, Julieta Belen (4B)",
    link: "/2024/laberintogato.html",
    year: 2024,
  },
  {
    id: "ludo",
    thumbnail: "/2024/thumbs/ludo.gif",
    motor: "TIC-80",
    nombre: "Ludo",
    estudiantes: "Villa Medina, Ariana (4D)",
    link: "/2024/ludo.html",
    year: 2024,
  },
  {
    id: "hellokitty",
    thumbnail: "/2024/thumbs/hellokitty.png",
    motor: "TIC-80",
    nombre: "Dress Up Kitty",
    estudiantes: "Bachmann, Milo (3D)",
    link: "/2024/hellokitty.html",
    year: 2024,
  },
  {
    id: "penaltis",
    thumbnail: "/2024/thumbs/penaltis.png",
    motor: "TIC-80",
    nombre: "Penaltis",
    estudiantes: "Orellana, Erik (3D)",
    link: "/2024/penaltis.html",
    year: 2024,
  },
  {
    id: "amongus",
    thumbnail: "/2024/thumbs/amongus.png",
    motor: "TIC-80",
    nombre: "Naves",
    estudiantes: "Gutierrez Ventura, Axel (3D)",
    link: "/2024/amongus.html",
    year: 2024,
  },
  {
    id: "naves",
    thumbnail: "/2024/thumbs/naves.png",
    motor: "TIC-80",
    nombre: "Naves",
    estudiantes: "Rosas Caero, Dylan (3D)",
    link: "/2024/naves.html",
    year: 2024,
  },
  {
    id: "sam",
    thumbnail: "/2024/thumbs/sam.gif",
    motor: "TIC-80",
    nombre: "Sam Escapa",
    estudiantes: "Condori, Alba (3D)",
    link: "/2024/sam.html",
    year: 2024,
  },
  {
    id: "pizza",
    thumbnail: "/2024/thumbs/pizza.gif",
    motor: "TIC-80",
    nombre: "Repartidor de Pizzas",
    estudiantes: "García, Danilo (3B)",
    link: "/2024/pizza.html",
    year: 2024,
  },
  {
    id: "zombis",
    thumbnail: "/2024/thumbs/zombis.gif",
    motor: "TIC-80",
    nombre: "Juego de Zombis",
    estudiantes: "Chavez, Roger (3B)",
    link: "/2024/zombis.html",
    year: 2024,
  },
  {
    id: "conejos",
    thumbnail: "/2024/thumbs/conejos.gif",
    motor: "TIC-80",
    nombre: "Conejos vs Topos",
    estudiantes: "La Roca, Bautista (3B)",
    link: "/2024/conejos.html",
    year: 2024,
  },
  {
    id: "fastpizza",
    thumbnail: "/2024/thumbs/fastpizza.gif",
    motor: "TIC-80",
    nombre: "Fast Pizza",
    estudiantes: "Fonceca, Britany (3D)",
    link: "/2024/fastpizza.html",
    year: 2024,
  },
  {
    id: "gato",
    thumbnail: "/2024/thumbs/gato.gif",
    motor: "TIC-80",
    nombre: "Gato Come Pollo",
    estudiantes: "Macochapi, Mauricio (3D)",
    link: "/2024/gato.html",
    year: 2024,
  },
  {
    id: "oscuro",
    thumbnail: "/2024/thumbs/oscuro.gif",
    motor: "TIC-80",
    nombre: "Laberinto Oscuro",
    estudiantes: "Cori, Camila (3D)",
    link: "/2024/oscuro.html",
    year: 2024,
  },
  {
    id: "autozombis",
    thumbnail: "/2024/thumbs/autozombis.gif",
    motor: "TIC-80",
    nombre: "Zombie Catcher",
    estudiantes: "Juntuta, Rodo (3D)",
    link: "/2024/autozombis.html",
    year: 2024,
  },
  {
    id: "trespatitos",
    thumbnail: "/2024/thumbs/trespatitos.gif",
    motor: "TIC-80",
    nombre: "Tres Patitos",
    estudiantes: "Tolaba, Luis (3D)",
    link: "/2024/trespatitos.html",
    year: 2024,
  },
  {
    id: "pacman",
    thumbnail: "/2024/thumbs/pacman.gif",
    motor: "TIC-80",
    nombre: "Pac-Man",
    estudiantes: "Segovia, Estefani (3B)",
    link: "/2024/pacman.html",
    year: 2024,
  },
  {
    id: "caminando",
    thumbnail: "/2024/thumbs/caminando.gif",
    motor: "TIC-80",
    nombre: "Caminando Solo",
    estudiantes: "Caballero, Nayla (3D)",
    link: "/2024/caminando.html",
    year: 2024,
  },
  // 2023
  {
    id: "juegoaliens",
    thumbnail: "/2023/thumbs/juegoaliens.png",
    motor: "TIC-80",
    nombre: "Juego Aliens",
    estudiantes: "Martinez, Nicolás; Romualdo, Javier Agustín (4B)",
    link: "/2023/juegoaliens.html",
    year: 2023,
  },
  {
    id: "futbol",
    thumbnail: "/2023/thumbs/futbol.gif",
    motor: "TIC-80",
    nombre: "Futbol",
    estudiantes: "Fama, Dante; Nieto, Tomás (4D)",
    link: "/2023/futbol.html",
    year: 2023,
  },
  {
    id: "icecream",
    thumbnail: "/2023/thumbs/icecream.gif",
    motor: "TIC-80",
    nombre: "Ice Cream",
    estudiantes: "Lopez, Micaela (4B)",
    link: "/2023/icecream.html",
    year: 2023,
  },
  {
    id: "juegoraton",
    thumbnail: "/2023/thumbs/juegoraton.gif",
    motor: "TIC-80",
    nombre: "Juego ratón",
    estudiantes:
      "De Vincenti, Matías; Mayta, Tania Gabriela; Olivares, Jessica Milagros (4B)",
    link: "/2023/juegoraton.html",
    year: 2023,
  },
  {
    id: "nicolas_y_el_laberinto",
    thumbnail: "/2023/thumbs/nicolas_y_el_laberinto.png",
    motor: "Bitsy",
    nombre: "Nicolás y el Laberinto",
    estudiantes: "Ajata, Diego; Aragón, Dylan; Fernandez, Micaela Florencia (3D)",
    link: "/2023/nicolas_y_el_laberinto.html",
    year: 2023,
  },
  {
    id: "juego_de_bosque",
    thumbnail: "/2023/thumbs/juego_de_bosque.png",
    motor: "Bitsy",
    nombre: "Juego de Bosque",
    estudiantes: "Ojeda, Leonardo; Porco, Ana Cristina (3B)",
    link: "/2023/juego_de_bosque.html",
    year: 2023,
  },
  {
    id: "purple_guy_and_his_story",
    thumbnail: "/2023/thumbs/purple_guy.png",
    motor: "Bitsy",
    nombre: "Purple Guy and His Story",
    estudiantes: "Parrado, Juan Manuel (3D)",
    link: "/2023/purple_guy_and_his_story.html",
    year: 2023,
  },
  {
    id: "estoy_atrasado",
    thumbnail: "/2023/thumbs/estoy_atrasado.png",
    motor: "Bitsy",
    nombre: "Estoy Atrasado",
    estudiantes: "Della Torre, Priscila; Aguirre, Brigit (3B)",
    link: "/2023/estoy_atrasado.html",
    year: 2023,
  },
  {
    id: "proyecto",
    thumbnail: "/2023/thumbs/proyecto.png",
    motor: "Bitsy",
    nombre: "Proyecto",
    estudiantes: "Gómez, Santiago; Materazzi, Enzo; Velazquez, Valentín (3D)",
    link: "/2023/proyecto.html",
    year: 2023,
  },
  {
    id: "el_carpincho_y_julian",
    thumbnail: "/2023/thumbs/el_carpincho_y_julian.png",
    motor: "Bitsy",
    nombre: "El carpincho y Julián con los mates",
    estudiantes: "Acuña, Lucia; Herbas, Abril; Lluzco, Mary Luz (3D)",
    link: "/2023/el_carpincho_y_julian.html",
    year: 2023,
  },
  {
    id: "donde_estoy_quien_soy",
    thumbnail: "/2023/thumbs/donde_estoy_quien_soy.png",
    motor: "Bitsy",
    nombre: "¿Dónde estoy? ¿Quién soy?",
    estudiantes: "Aguirre, Thomás; Islas, Nain; Leyenda, Lian (3D)",
    link: "/2023/donde_estoy_quien_soy.html",
    year: 2023,
  },
  {
    id: "mama_gallina",
    thumbnail: "/2023/thumbs/mama_gallina.png",
    motor: "Bitsy",
    nombre: "La mamá gallina y sus pollitos",
    estudiantes: "Albarracín, Rocío; Calderón, Valentina (3B)",
    link: "/2023/mama_gallina.html",
    year: 2023,
  },
  {
    id: "escape",
    thumbnail: "/2023/thumbs/escape.png",
    motor: "Bitsy",
    nombre: "Escape",
    estudiantes: "Quispe, Ayelén; Villa Medina, Ariana (3D)",
    link: "/2023/escape.html",
    year: 2023,
  },
  {
    id: "condori",
    thumbnail: "/2023/thumbs/condori.png",
    motor: "Scratch",
    nombre: "Juego",
    estudiantes: "Condori, Alba (2º)",
    link: "https://scratch.mit.edu/projects/858351336/embed",
    year: 2023,
  },
  {
    id: "huallpa",
    thumbnail: "/2023/thumbs/huallpa.png",
    motor: "Scratch",
    nombre: "Juego",
    estudiantes: "Huallpa, Samuel (2º)",
    link: "https://scratch.mit.edu/projects/923401484/embed",
    year: 2023,
  },
  {
    id: "julian",
    thumbnail: "/2023/thumbs/julian.png",
    motor: "Scratch",
    nombre: "Juego",
    estudiantes: "Julián, Nahiara",
    link: "https://scratch.mit.edu/projects/858370787/embed",
    year: 2023,
  },
  {
    id: "fonceca",
    thumbnail: "/2023/thumbs/fonceca.png",
    motor: "Scratch",
    nombre: "Juego",
    estudiantes: "Fonceca, Britany (2º)",
    link: "https://scratch.mit.edu/projects/858342754/embed",
    year: 2023,
  },
  {
    id: "hirschfeld",
    thumbnail: "/2023/thumbs/hirschfeld.png",
    motor: "Scratch",
    nombre: "Juego",
    estudiantes: "Hirschfeld, Luca",
    link: "https://scratch.mit.edu/projects/861503499/embed",
    year: 2023,
  },
  // 2022
  {
    id: "scorpions",
    thumbnail: "/2022/thumbs/scorpions.png",
    motor: "Bitsy",
    nombre: "Borges y los Libros Perdidos",
    estudiantes:
      "Claros Vargas, Magali; Cuella, Angeles Nahiara; Díaz, Agustin Jeremias; Escobar Reyes, Tamara Mailén; Juaniquina, Deybi",
    link: "/2022/scorpions.html",
    year: 2022,
  },
  {
    id: "stella",
    thumbnail: "/2022/thumbs/stella.png",
    motor: "Bitsy",
    nombre: "Looking for Inspiration",
    estudiantes:
      "Díaz, Agustin Jeremias; Isla Mamani, Marioly; León Renjel, Estela; Orosco Cespedes, Kevin; Roslan, Safira; Vilte Fajardo, Brian Jonatan",
    link: "/2022/stella.html",
    year: 2022,
  },
  {
    id: "tribal",
    thumbnail: "/2022/thumbs/tribal.png",
    motor: "Bitsy",
    nombre: "El Redentor de Asterión",
    estudiantes:
      "Araníbar, Jesica; Calahuma, Analía; Chumacero Bueno, Samir Leonardo; Lopez, Ángeles Micaela",
    link: "/2022/tribal.html",
    year: 2022,
  },
  {
    id: "acevedo",
    thumbnail: "/2022/thumbs/acevedo.png",
    motor: "Scratch",
    nombre: "Cuchau",
    estudiantes: "Acevedo, Gabriel",
    link: "https://scratch.mit.edu/projects/849420550/embed",
    year: 2022,
  },
  {
    id: "alvarez",
    thumbnail: "/2022/thumbs/alvarez.png",
    motor: "Scratch",
    nombre: "Juego",
    estudiantes: "Alvarez, Facundo",
    link: "https://scratch.mit.edu/projects/856433984/embed",
    year: 2022,
  },
];

export function GameGallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedYears, setExpandedYears] = useState<Set<number>>(new Set());

  const filteredGames = games.filter((game) => {
    const query = searchQuery.toLowerCase();
    return (
      game.nombre.toLowerCase().includes(query) ||
      game.estudiantes.toLowerCase().includes(query) ||
      game.motor.toLowerCase().includes(query) ||
      game.year.toString().includes(query)
    );
  });

  const gamesByYear = filteredGames.reduce(
    (acc, game) => {
      if (!acc[game.year]) {
        acc[game.year] = [];
      }
      acc[game.year].push(game);
      return acc;
    },
    {} as Record<number, typeof games>,
  );

  const sortedYears = Object.keys(gamesByYear)
    .map(Number)
    .sort((a, b) => b - a);

  const toggleYear = (year: number) => {
    setExpandedYears((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(year)) {
        newSet.delete(year);
      } else {
        newSet.add(year);
      }
      return newSet;
    });
  };
  const shuffle_games = (array: InfoGame[]): InfoGame[] => {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#34C9E2" }}>
      <header
        className="px-4 py-8 md:py-12"
        style={{ backgroundColor: "#278AAB" }}
      >
        <div className="container mx-auto">
          <h1
            className="text-4xl md:text-6xl font-black mb-4 text-balance"
            style={{ color: "#FEFEFE" }}
          >
            Galería de Videojuegos
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl text-pretty font-light"
            style={{ color: "#34C9E2" }}
          >
            Explorá nuestra colección de videojuegos jugables en el navegador.
            Hacé clic en cualquier juego para empezar a jugar al instante.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8 max-w-xl">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5"
              style={{ color: "#278AAB" }}
            />
            <input
              type="text"
              placeholder="Buscar por nombre, estudiante, año o motor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all font-normal"
              style={{
                backgroundColor: "#FEFEFE",
                color: "#278AAB",
                borderColor: "#278AAB",
                borderWidth: "2px",
              }}
            />
          </div>
        </div>

        {filteredGames.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl font-normal" style={{ color: "#FEFEFE" }}>
              No se encontraron juegos que coincidan con "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 font-bold hover:underline"
              style={{ color: "#278AAB" }}
            >
              Limpiar búsqueda
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {sortedYears.map((year) => (
              <section
                key={year}
                className="rounded-lg overflow-hidden"
                style={{
                  backgroundColor: "#FEFEFE",
                  borderColor: "#278AAB",
                  borderWidth: "2px",
                }}
              >
                <button
                  onClick={() => toggleYear(year)}
                  className="w-full flex items-center justify-between px-6 py-4 transition-colors"
                  style={{
                    backgroundColor: "#278AAB",
                    color: "#FEFEFE",
                  }}
                >
                  <h2 className="text-3xl md:text-4xl font-black">{year}</h2>
                  <ChevronDown
                    className={`h-6 w-6 transition-transform duration-300 ${expandedYears.has(year) ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    expandedYears.has(year)
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-6">
                      {shuffle_games(gamesByYear[year]).map((game) => (
                        <Link key={game.id} href={game.link}>
                          <GameCard
                            nombre={game.nombre}
                            estudiantes={game.estudiantes}
                            thumbnail={game.thumbnail}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
