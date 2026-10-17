import { lazy } from 'react';

const moduleFiles = import.meta.glob('../content/*/*/index.mdx');

export function loadModule(track, slug) {
  const path = `../content/${track}/${slug}/index.mdx`;
  const loader = moduleFiles[path];
  if (!loader) return null;
  return lazy(() => loader());
}
