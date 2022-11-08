import { Head, Html, Main, NextScript } from 'next/document';

import { APP_CONFIG } from '@/common/app/constants/config';

const Document = () => {
  return (
    <Html lang={APP_CONFIG.locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
