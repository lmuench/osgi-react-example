const brokenCounter = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT_BROKEN':
      return { value: state.value + 10 }
    default:
      return state
  }
};

export default brokenCounter;
