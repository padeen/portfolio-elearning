import type { PageServerLoad } from './$types';

export const load = (({ params }) => {
  return {
    active: "onderdeel2",
    content1,
  };
}) satisfies PageServerLoad;

let content1 = 
`
<header>
  <h1>Naar huis</h1>

  <p class="italic text-sm mb-20">Dit onderdeel duurt ongeveer 5 minuten</p>

  <p class="mb-20">
    De lucht is als optrekkende walm van paarse Bengaalsche lucifers en rossig-zilver,
    kerstboomballen, steken daarin de lichten, vastgeschroefd. Ze loopt met Andy op het open perron.
    Achter ze is de lange, donkere kap, als een drukkende hand. Dat is de kerker van de treinen. Die
    komen druischend uit ruimten binnen geijld en worden gegrepen als in een val en weren zich met
    machteloos krijten, razend hijgen, hun knarsen ramt wanden en dak.
  </p>
</header>

<section id="movie">
  <p class="italic text-sm text-center mt-12 mb-6">
    Klik op onderstaande afbeelding om het filmpje te starten
  </p>

  <div class="mb-24">
    <video controls poster='https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fafbeelding1.jpg?alt=media&token=53ee4d43-1c6a-4101-b6cd-92adf24c9ef6'>
      <source src='https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/media%2Ffilmpje1.mp4?alt=media&token=a06d0438-d49c-418e-8636-12bb6831a162' type="video/mp4" />
    </video>
  </div>

  <div class="mb-20">
    <p>
      Zijn er tijdens het kijken dingen opgevallen? Er volgen nu een aantal vragen. Neem voor iedere vraag de tijd om er goed over na te denken.
    </p>
  </div>
</section>
`