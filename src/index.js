import { reveal, TRANSITION, DEPENDENCIES } from "./lib/reveal.js";

window.onload = () => {
  reveal({
    controls: true,
    progress: true,
    center: true,
    hash: true,
    hideInactiveCursor: false,
    transition: TRANSITION.SLIDE,
    dependencies: [
      ...DEPENDENCIES.markdown(),
      ...DEPENDENCIES.highlight(),
      ...DEPENDENCIES.search(),
      ...DEPENDENCIES.notes(),
      ...DEPENDENCIES.zoom()
    ]
  });
};
