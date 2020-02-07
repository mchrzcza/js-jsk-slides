import * as Reveal from "../lib/reveal.js/js/reveal";

const condition = () => !!document.querySelector("[data-markdown]");

window.onload = () => {
  Reveal.initialize({
    controls: true,
    progress: true,
    center: true,
    hash: true,

    transition: "slide", // none/fade/slide/convex/concave/zoom
    dependencies: [
      { src: "../lib/reveal.js/plugin/markdown/marked.js", condition },
      { src: "../lib/reveal.js/plugin/markdown/markdown.js", condition },
      { src: "../lib/reveal.js/plugin/highlight/highlight.js" },
      { src: "../lib/reveal.js/plugin/search/search.js", async: true },
      { src: "../lib/reveal.js/plugin/zoom-js/zoom.js", async: true },
      { src: "../lib/reveal.js/plugin/notes/notes.js", async: true }
    ]
  });
};
