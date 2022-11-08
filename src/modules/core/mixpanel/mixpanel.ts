import type { Dict, Query } from 'mixpanel-browser';
import mixpanel from 'mixpanel-browser';

const production = process.env.NODE_ENV === 'production';
const MIXPANEL_PROJECT_TOKEN =
  process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN || '';
const MIXPANEL_PROXY = process.env.NEXT_PUBLIC_MIXPANEL_PROXY || '';

mixpanel.init(MIXPANEL_PROJECT_TOKEN, {
  api_host: MIXPANEL_PROXY,
  debug: !production,
});

export const Mixpanel = {
  identify: (id: string) => {
    mixpanel.identify(id);
  },
  alias: (id: string) => {
    mixpanel.alias(id);
  },
  track: (name: string, props?: Dict) => {
    mixpanel.track(name, props);
  },
  track_links: (query: Query, name: string) => {
    mixpanel.track_links(query, name, {
      referrer: document.referrer,
    });
  },
  people: {
    set: (props: Dict) => {
      mixpanel.people.set(props);
    },
  },
};
