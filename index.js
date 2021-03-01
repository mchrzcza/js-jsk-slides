import Reveal from './_snowpack/pkg/revealjs.js';
import RevealMarkdown from './_snowpack/pkg/revealjs/plugin/markdown/markdown.esm.js'
import RevealHighlight from './_snowpack/pkg/revealjs/plugin/highlight/highlight.esm.js'
import RevealMath from './_snowpack/pkg/revealjs/plugin/math/math.esm.js'
import RevealNotes from './_snowpack/pkg/revealjs/plugin/notes/notes.esm.js'
import RevealSearch from './_snowpack/pkg/revealjs/plugin/search/search.esm.js'
import RevealZoom from './_snowpack/pkg/revealjs/plugin/zoom/zoom.esm.js'

window.onload = () => {
  const deck = new Reveal({
    controls: true,
    progress: true,
    center: true,
    hash: true,
    slideNumber: 'c/t',
    hideInactiveCursor: false,
    plugins: [RevealMarkdown, RevealHighlight, RevealMath, RevealNotes, RevealSearch, RevealZoom],
    transition: 'slide',
  });
  deck.initialize();
};
