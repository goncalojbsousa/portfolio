'use client'

import React from 'react';

import { DarkModeIcon } from './svg/theme/dark-mode-icon';
import { LightModeIcon } from './svg/theme/light-mode-icon';
import { useTheme } from '@/context/themeContext';

const ThemeToggle: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <button
            onClick={toggleDarkMode}
            className="transition-transform hover:scale-110"
        >
            {darkMode ? <DarkModeIcon className='fill-color_sec' /> : <LightModeIcon className='fill-color_sec' />}
        </button>
    );
};

export default ThemeToggle;