import '@/common/styles/global.css';

import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from 'next-i18next.config';

import { I18nProvider } from '@/modules/core/i18n/hooks/useI18n';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <I18nProvider>
      <Component {...pageProps} />
    </I18nProvider>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
