// import React, { createContext, useContext, useState } from 'react';

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [currency, setCurrency] = useState('USD');
//   const [themeMode, setThemeMode] = useState('light');

//   return (
//     <AppContext.Provider value={{ currency, setCurrency, themeMode, setThemeMode }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => useContext(AppContext);














// context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider value={{ themeMode, toggleThemeMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};