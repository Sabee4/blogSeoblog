import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
//?publicRuntimeConfig.API_PRODUCTION:publicRuntimeConfig.API_DEVELOPMENT;
    ? 'https://seoblog.com': 'http://localhost:8000';
    //: publicRuntimeConfig.API_DEVELOPMENT;

export const APP_NAME = publicRuntimeConfig.APP_NAME;

