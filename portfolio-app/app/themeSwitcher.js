'use client';
import { useState, useEffect } from 'react';
//import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function ThemeSwitcher() {
  //const [mounted, setMounted] = useState(false);
  //const { theme, setTheme } = useTheme('dark');

  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    //  setMounted((prev) => !prev);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  /* if (!mounted) {
    return null;
  } */

  const themeSwitchHandler = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
  return (
    <button
      className='w-12 h-12 flex justify-center items-center'
      onClick={themeSwitchHandler}
    >
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} size='2x' />
      ) : (
        <FontAwesomeIcon icon={faMoon} size='2x' />
      )}
    </button>
  );
}
