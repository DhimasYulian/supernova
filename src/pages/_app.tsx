import 'antd/dist/antd.css';
import '@/common/styles/global.css';

import type { DehydratedState } from '@tanstack/react-query';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import type { SSRConfig } from 'next-i18next';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from 'next-i18next.config';
import { useState } from 'react';

import { I18nProvider } from '@/modules/core/i18n/hooks/useI18n';

const App = ({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState } & SSRConfig>) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <I18nProvider>
          <Component {...pageProps} />
        </I18nProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
