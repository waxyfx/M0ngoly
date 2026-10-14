/** Public assets must follow Vite's base when hosted on a GitHub Pages project. */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

export const genghisPortrait = asset("images/portraits/genghis.webp");
