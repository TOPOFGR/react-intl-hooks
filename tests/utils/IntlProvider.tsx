import React from 'react';
import { IntlProvider as Provider } from 'react-intl';

import messages from './en.json';

const defaultLocale = 'en';
const locale = defaultLocale;

const IntlProvider: React.ComponentType = ({ children }) => {
  return (
    <Provider locale={locale} defaultLocale={defaultLocale} messages={messages}>
      {children}
    </Provider>
  );
};

export default IntlProvider;
