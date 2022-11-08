declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      NEXT_PUBLIC_APP_STAGE: 'test' | 'development' | 'staging' | 'production';
      NEXT_PUBLIC_APP_BASE_URL: string;
      // Mixpanel
      NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN: string;
      NEXT_PUBLIC_MIXPANEL_PROXY: string;
      // Firebase
      NEXT_PUBLIC_FIREBASE_API_KEY: string;
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
      NEXT_PUBLIC_FIREBASE_APP_ID: string;
      NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: string;
    }
  }
}

// Trick to make this a valid module:
// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
