import FacebookImageColor from '../../assets/img/facebook.png';
import FacebookImageWhite from '../../assets/img/facebook.svg';
import TwitterImageColor from '../../assets/img/twitter.png';
import TwitterImageWhite from '../../assets/img/twitter.svg';
import PinterestImageColor from '../../assets/img/pinterest.png';
import PinterestImageWhite from '../../assets/img/pinterest.svg';
import LinkedinImageColor from '../../assets/img/linkedin.png';
import LinkedinImageWhite from '../../assets/img/linkedin.svg';
import BehanceImageColor from '../../assets/img/behance.png';
import BehanceImageWhite from '../../assets/img/behance.svg';

let initialState = {
  socialItems: [
    {
      id: 1,
      name: 'Facebook',
      link: 'https://ru-ru.facebook.com/',
      imageColor: FacebookImageColor,
      imageWhite: FacebookImageWhite,
    },
    {
      id: 2,
      name: 'Twitter',
      link: 'https://twitter.com/',
      imageColor: TwitterImageColor,
      imageWhite: TwitterImageWhite,
    },
    {
      id: 3,
      name: 'Pinterest',
      link: 'https://www.pinterest.com/',
      imageColor: PinterestImageColor,
      imageWhite: PinterestImageWhite,
    },
    {
      id: 4,
      name: 'Linkedin',
      link: 'https://ru.linkedin.com/',
      imageColor: LinkedinImageColor,
      imageWhite: LinkedinImageWhite,
    },
    {
      id: 5,
      name: 'Behance',
      link: 'https://www.behance.net/',
      imageColor: BehanceImageColor,
      imageWhite: BehanceImageWhite,
    },
  ],
};

const socialReducer = (state = initialState, action) => {
  return state;
};

export default socialReducer;
