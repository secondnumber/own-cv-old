let initialState = {
  menuItems: [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About me', link: '/about' },
    { id: 3, name: 'My projects', link: '/projects' },
    { id: 4, name: 'Contact me', link: '/contacts' },
  ],
};

const menuReducer = (state = initialState, action) => {
  return state;
};

export default menuReducer;
