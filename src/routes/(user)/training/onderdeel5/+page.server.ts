import type { PageServerLoad } from './$types';

export const load = (({ params }) => {
  return {
    active: "onderdeel5",
    content1,
  };
}) satisfies PageServerLoad;

let content1 =
`
<header>
  <h1>
  Meidag
  </h1>

  <p class="italic text-sm mb-20">Dit onderdeel duurt ongeveer 5 minuten</p>

  <p class="mb-20">
    Nu waait er een Mei-wind, nu wappert het Mei-groen, fonkelt de Mei-zon.... het is een dag als een
    open tulp, zoo frisch en zoo zoet, en gisteren was het nog April, vannacht tot twaalven was het
    nog April. Ze heeft de klok hooren slaan, het was donkere maan, en alle menschen sliepen en in de
    wijdgespannen stilte heeft zich de bloem geopend.
  </p>
</header>

<section id="movie">
  <p class="italic text-sm text-center mt-12 mb-6">
    Klik op onderstaande afbeelding om het filmpje te starten
  </p>

  <div class="mb-28">
    <video controls poster='https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fafbeelding5.jpg?alt=media&token=c2810c7c-a5e4-483c-a387-61b8ffd97ed8'>
      <source src='https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/media%2Ffilmpje3.mp4?alt=media&token=8b44d71f-77b2-48ea-a4e7-e1ef99084bbf' type="video/mp4" />
    </video>
  </div>

  <div class="mb-20 px-4 lg:px-0">
    <p>
      Misschien heb je dit zelf ook weleens meegemaakt. We gaan er dieper op in door middel van een aantal vragen. Neem voor iedere vraag de tijd om er goed over na te denken.
    </p>
  </div>
</section>
`