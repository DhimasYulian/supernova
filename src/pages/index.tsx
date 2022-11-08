import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';

import Meta from '@/common/components/Meta';
import { APP_CONFIG } from '@/common/constants/appConfig';
import { EVENT_NAME } from '@/modules/core/mixpanel/constants/event';
import { Mixpanel } from '@/modules/core/mixpanel/mixpanel';
import { Main } from '@/modules/home/templates/Main';

import nextI18NextConfig from '../../next-i18next.config';

const Home = () => {
  const { t } = useTranslation('common');

  useEffect(() => {
    Mixpanel.track(EVENT_NAME.viewHomePage);
  }, []);

  return (
    <Main
      meta={
        <Meta title={APP_CONFIG.title} description={APP_CONFIG.description} />
      }
    >
      <h1>{t('welcome')}</h1>
    </Main>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? nextI18NextConfig.i18n.defaultLocale
      )),
    },
  };
};

export default Home;
