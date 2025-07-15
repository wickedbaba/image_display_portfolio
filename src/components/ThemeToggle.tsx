import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="mb-4 p-2 rounded-lg transition-all duration-300 hover:bg-cream-dark/20 dark:hover:bg-gray-700/50"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Moon className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
      ) : (
        <Sun className="w-6 h-6 text-orange-500 hover:text-orange-600 transition-colors" />
      )}
    </button>
  );
};

export default ThemeToggle;