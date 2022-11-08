import {
  fetchAndActivate,
  getRemoteConfig,
  getValue,
} from 'firebase/remote-config';

import { firebase } from '../firebase';

const remoteConfig = getRemoteConfig(firebase);

const useRemoteConfig = () => {
  // eslint-disable-next-line consistent-return
  const getConfig = async (key: string) => {
    try {
      await fetchAndActivate(remoteConfig);
      const response = getValue(remoteConfig, key);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getConfig,
  };
};

export default useRemoteConfig;
