import Cookies from 'js-cookie';
import nextI18NextConfig from 'next-i18next.config';
import type { ReactNode } from 'react';
import { useContext, useEffect, useReducer } from 'react';

import type { TI18nContext } from '../contexts/I18nContext';
import { I18nContext } from '../contexts/I18nContext';

export const ACTION_TYPE = {
  setI18nData: 'SET_INTERNATIONALIZATION_DATA',
};

export type TI18nInitialData = {
  locale?: string;
  lang?: string;
};

interface IAction {
  type: string;
  payload: TI18nInitialData;
}

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const initialI18nState: TI18nInitialData = {
    locale: nextI18NextConfig.i18n.defaultLocale,
    lang: nextI18NextConfig.i18n.defaultLocale,
  };

  const reducer = (state: TI18nInitialData, { type, payload }: IAction) => {
    switch (type) {
      case ACTION_TYPE.setI18nData:
        return {
          ...state,
          ...payload,
        };
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(reducer, { ...initialI18nState });

  useEffect(() => {
    const i18nCookieLocale = Cookies.get('NEXT_LOCALE');
    dispatch({
      type: ACTION_TYPE.setI18nData,
      payload: {
        locale: i18nCookieLocale,
        lang: i18nCookieLocale,
      },
    });
  }, []);

  return (
    <I18nContext.Provider value={{ state, dispatch }}>
      {children}
    </I18nContext.Provider>
  );
};

const useI18n = () => {
  const context = useContext<TI18nContext>(I18nContext);
  return context;
};

export default useI18n;
