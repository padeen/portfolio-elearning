import type { PageServerLoad } from './$types';

export const load = (({ params }) => {
  return {
    active: "onderdeel1",
    content
  };
}) satisfies PageServerLoad;

let content = 
`
<header>
  <h1>Welkom bij de e-learning van Gedragskeuze</h1>

  <p class="italic text-sm invisible">Dit onderdeel duurt ongeveer 5 minuten</p>

  <p>Gisteravond laat al hing hij boven de daken klaar, de rosse lantaarns 
  sloegen er hun gloed tegen aan en vannacht heeft hij zich laten zakken -, 
  de sneeuw. Het is de eerste sneeuw van het nieuwe jaar, het is de eerste 
  sneeuw van de nieuwe eeuw -, sneeuw die de wereld vernieuwt. Het is vandaag 
  de Nieuwe Eeuw -, gister liep de Oude Eeuw ten einde. Honderd jaren waren om. 
  Een bolgeblazen ballon, waaruit het stroomde, stroomde -, eindelijk leeg. 
  Een oude afgewonden ketting, honderd jaar geleden nieuw.</p>
</header>

<div class="lg:relative flex flex-col lg:flex-row justify-between items-center my-8 lg:my-24 py-12 max-w-5xl lg:space-x-12 rounded">
  <div class="hidden lg:absolute left-72 right-0 h-[40rem] w-[48rem] shadow-md bg-white">
  </div>
  <div class="lg:absolute mb-8 lg:mb-0 -left-10 right-0 lg:w-[31rem] z-10">
    <img src="https://firebasestorage.googleapis.com/v0/b/svelte-starter-8ef85.appspot.com/o/images%2Fafbeelding2.jpg?alt=media&token=424c5287-578f-4229-b24c-590246ff3097"
    alt="borrel na het werk">
  </div>
  <div class="flex-1 z-10">
  </div>
  <div class="flex-1 z-10 px-4 lg:px-0">
    <h2>
      Waarom slaat elk woord als bliksem bij je in
    </h2>

    <p>
      De molens steken stram en zwart in het wit, de dikke rompen van de overwinterende schepen,
      tegen den hemel, tegen het water, onwrikbaar, grijs aan grijs. Dit is zijn huis, naar het water
      gekeerd -, zijn gesloten huis, waar het nu leeg is en wel koud zal zijn en wel heel stil -,
      sneeuwdoorschenen schemering. Binnen de deur de smalle gang, de bak met zijn stokken, de kapstok
      met zijn jassen. Eén stok en één jas ontbreken. hij is op reis. De eerste deur rechts is de
      kamer met de boekenkast, de laaghangende lamp, de ronde tafel, waar ze zaten, weer zullen zitten,
      tezamen, het boek tusschen ze in. In dit vierkante huis, dat uitziet op zijn sneeuwen tuin, woont
      hij alleen. Lang geleden was er ook zijn vrouw, die krankzinnig werd en weggevoerd moest worden,
      nog eens weerkwam, maar weer heen moest en ten leste stierf.
    </p>
  </div>
</div>

<div class="mb-12 lg:mb-16 px-4 lg:px-0 max-w-3xl">
  <h2 class="pb-4">Je kunt het niet vergeten</h2>

  <p>
    Je kunt nauwelijks zoo ver teruggaan in de jaren, of het was er, het fluisteren op school, waarbij
    je moest blozen, waarbij je met je oogen knipperen moest, je werd warm en verward.... je voorhoofd
    besloeg. Waarom slaat elk woord als bliksem bij je in? Eéns was genoeg en het kleeft je aan.
  </p>
</div>

<article>
  <div class="inner">
    <ol> 
      <p>
      <li>
        <span>1 Zwol het gonzen:</span>
        Het maakte je duizelig, warrelig, verward. Soms, in de nacht, zwol het gonzen tot een schreeuw.
        Het schreeuwde in tegen zichzelf.
      </li>
      <li>
        <span>2 De gevolgen van hun liefde:</span>
        Vader was uitgegleden en had zijn voetgewricht gebroken en zuster Den Hertog kwam hem masseeren. Ze noemen
        zuster Den Hertog 'pot met ooren', ze noemen haar ook 'kwade kraai', maar je moet haar kennen. Ze stond
        met moeder te praten in de gang en ze meenden alleen te zijn.
      </li>

      <li>
        <span>3 Maar zelf stond ze achter de kleerkastdeur:</span>
        En zuster Den Hertog vertelde van juffrouw Cool, het
        rijke mensch uit 'De Walvischvaarder', heel streng, heel trotsch, heel vroom. Ze heeft haar
        verpleegd in haar zware ziekte, longontsteking heeft ze gehad. Dan stijgt de koorts, en de
        menschen verliezen hun bewustzijn, ze verliezen zichzelf en ze ijlen. En soms zeggen ze
        ontzettende dingen. Woorden, waarvan je niet wist dat ze ze kenden -, vreeselijke vloeken.
      </li>
      </p>
    </ol>
  </div>
</article>
`