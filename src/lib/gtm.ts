// src/lib/gtm.ts
import TagManager from '@sooro-io/react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-K2N3R5L2',
};

export const initGTM = () => {
  TagManager.initialize(tagManagerArgs);
};
