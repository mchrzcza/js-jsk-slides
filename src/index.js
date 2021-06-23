import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm';
import RevealMath from 'reveal.js/plugin/math/math.esm';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm';
import RevealSearch from 'reveal.js/plugin/search/search.esm';
import RevealZoom from 'reveal.js/plugin/zoom/zoom.esm';
import { actualMonth } from './titlePageDetails';

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
  actualMonth();
};
