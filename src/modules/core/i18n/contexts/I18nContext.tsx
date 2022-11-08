import type { Dispatch } from 'react';
import { createContext } from 'react';

export type TI18nInitialData = {
  locale?: string;
  lang?: string;
};

export interface IAction {
  type: string;
  payload: TI18nInitialData;
}

export type TI18nContext = {
  state: TI18nInitialData;
  dispatch: Dispatch<IAction>;
};

/* Creating a context object with the default locale and lang. */

export const I18nContext = createContext<TI18nContext>({
  state: {},
  dispatch: () => {},
});
