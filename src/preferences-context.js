import React, { createContext, useContext } from 'react';

export const PrefsContext = createContext();

export const usePrefs = () => useContext(PrefsContext);
