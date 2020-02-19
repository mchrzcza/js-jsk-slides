import * as Reveal from "./js/reveal";

const PLUGIN_DIST = "./plugin";

const markdownCondition = () => !!document.querySelector("[data-markdown]");

const parseDependencies = (dependencies = []) =>
  dependencies.map(({ src, ...dependency }) => ({
    ...dependency,
    src: `${PLUGIN_DIST}/${src}`
  }));

const markdown = (condition = markdownCondition) => [
  { src: `markdown/marked.js`, condition },
  { src: "markdown/markdown.js", condition }
];

const highlight = () => [{ src: `highlight/highlight.js` }];
const search = (async = true) => [{ src: `search/search.js`, async }];
const zoom = (async = true) => [{ src: `zoom-js/zoom.js`, async }];
const notes = (async = true) => [{ src: `notes/notes.js`, async }];

export const DEPENDENCIES = {
  markdown,
  highlight,
  search,
  zoom,
  notes
};

export const TRANSITION = {
  SLIDE: "slide",
  NONE: "none",
  FADE: "fade",
  CONVEX: "convex",
  ZOOM: "zoom"
};

export const reveal = ({
  controls,
  progress,
  center,
  hash,
  transition,
  dependencies
}) => {
  global.Reveal = Reveal;
  Reveal.initialize({
    controls,
    progress,
    center,
    hash,
    transition,
    dependencies: parseDependencies(dependencies)
  });
};
