let initialState = {
  title: 'About me',
  skills: [
    { id: 1, name: 'HTML', value: 90, unit: '%', color: '$turquoise' },
    { id: 2, name: 'CSS', value: 90, unit: '%', color: '$fuchsia' },
    { id: 3, name: 'Javascript', value: 80, unit: '%', color: '$yellow' },
    { id: 4, name: 'Frameworks', value: 70, unit: '%', color: '$orange' },
  ],
  buttonName: 'Download CV',
};

const aboutReducer = (state = initialState, action) => {
  return state;
};

export default aboutReducer;
