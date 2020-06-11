const CLOSE_MENU = 'CLOSE_MENU';
const OPEN_MENU = 'OPEN_MENU';

let initialState = {
  title: 'ANA DOE',
  menuItems: [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About me', link: '/about' },
    { id: 3, name: 'My projects', link: '/projects' },
    { id: 4, name: 'Contact me', link: '/contacts' },
  ],
  isClosed: true,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_MENU:
      return {
        ...state,
        isClosed: true,
      };
    case OPEN_MENU:
      return {
        ...state,
        isClosed: false,
      };
    default:
      return state;
  }
};

export const closeMenu = () => ({
  type: CLOSE_MENU,
});

export const openMenu = () => ({
  type: OPEN_MENU,
});

export default menuReducer;
