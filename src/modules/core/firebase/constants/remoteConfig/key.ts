const stage = process.env.NEXT_PUBLIC_APP_STAGE;

const development = stage === 'development';
// const staging = stage === 'staging';
// const production = stage === 'production';

const RC_TEST_KEY = development ? 'dev_key' : 'prod_key';

export { RC_TEST_KEY };
