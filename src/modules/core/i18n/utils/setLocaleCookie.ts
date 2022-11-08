import Cookies from 'js-cookie';

type TLocale = {
  locale: string;
};
/**
 * Set a cookie named NEXT_LOCALE with the value of the locale parameter, and set the expiration date
 * to 100 days from now.
 * @param {TLocale}  - locale - the locale to set
 */
const setLocaleCookie = ({ locale }: TLocale) => {
  Cookies.set('NEXT_LOCALE', locale, { expires: 365, path: '/' });
};

export default setLocaleCookie;
