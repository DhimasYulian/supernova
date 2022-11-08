import { useRouter } from 'next/router';
import nextI18NextConfig from 'next-i18next.config';
import type { ReactNode } from 'react';

import { APP_CONFIG } from '@/common/app/constants/config';
import useI18n, { ACTION_TYPE } from '@/modules/core/i18n/hooks/useI18n';
import setLocaleCookie from '@/modules/core/i18n/utils/setLocaleCookie';

type TMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: TMainProps) => {
  const { state, dispatch } = useI18n();
  const { locale } = state;
  const router = useRouter();
  const { pathname, query, asPath } = router;

  const handleChangeLanguage = (language: string) => {
    dispatch({
      type: ACTION_TYPE.setI18nData,
      payload: {
        locale: language,
        lang: language,
      },
    });
    setLocaleCookie({ locale: language });
    router.replace({ pathname, query }, asPath, { locale: language });
  };

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto max-w-screen-md">
        <div className="flex items-center justify-between border-b border-gray-300">
          <div>
            <div className="pt-16 pb-8">
              <div className="text-3xl font-bold text-gray-900">
                {APP_CONFIG.title}
              </div>
              <div className="text-xl">{APP_CONFIG.description}</div>
            </div>
          </div>

          <select
            value={locale}
            className="rounded-sm"
            onChange={(e) => {
              handleChangeLanguage(e.target.value);
            }}
          >
            {nextI18NextConfig.i18n.locales.map((lang, index) => (
              <option value={lang} key={index}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        <div className="py-5 text-xl">{props.children}</div>
      </div>
    </div>
  );
};

export { Main };
