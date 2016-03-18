export function showMore(more) {
  return { type: 'SHOW_MORE', more: more };
}

export function showLess(more) {
  return { type: 'SHOW_LESS', more: more };
}
