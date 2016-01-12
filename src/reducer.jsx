export default function(state = {}, step) {
  switch (step.type) {
    case 'LOAD_QUOTES':
      return Object.assign({}, step.state);
    default:
      return state;
  }
}
