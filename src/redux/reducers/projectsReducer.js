import Image from '../../assets/img/project.png';

let initialState = {
  title: 'My projects',
  tags: [
    { id: 1, name: 'ALL' },
    { id: 2, name: 'Branding' },
    { id: 3, name: 'Media' },
    { id: 4, name: 'Illustration' },
    { id: 5, name: 'UI Design' },
    { id: 6, name: 'UX Design' },
  ],
  projects: [
    { id: 1, name: "Let's party", image: Image },
    { id: 2, name: 'Lazy', image: Image },
    { id: 3, name: 'Building company', image: Image },
    { id: 4, name: 'Games', image: Image },
    { id: 5, name: 'Horses', image: Image },
    { id: 6, name: 'Social', image: Image },
  ],
  buttonName: 'Show more',
};

const projectsReducer = (state = initialState, action) => {
  return state;
};

export default projectsReducer;
