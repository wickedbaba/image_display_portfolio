import React from 'react';
import MasonryGrid from './components/MasonryGrid';
import ThemeToggle from './components/ThemeToggle';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="flex flex-col lg:flex-row">
        {/* Static Navigation - Shows first on mobile, left side on desktop */}
        <div className="w-full lg:w-64 bg-cream-light dark:bg-gray-800 border-b lg:border-b-0 lg:border-r border-cream-dark/20 dark:border-gray-700/50 p-6 lg:min-h-screen transition-colors duration-300">
          <div className="font-mono text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-1">
            {/* Theme Toggle */}
            <ThemeToggle isDark={isDark} onToggle={toggle} />
            
            {/* Main Directory */}
            <div className="text-gray-800 dark:text-gray-200 font-medium mb-4 text-base">
              aryar:
            </div>
            
            {/* Tree Structure */}
            <div className="space-y-1">
              {/* Image Experiments */}
              <div className="flex items-start">
                <span className="text-gray-500 dark:text-gray-400 mr-1">└─</span>
                <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer">
                  image experiments
                </span>
              </div>
              <div className="ml-4 space-y-1">
                <div className="flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-1">├─</span>
                  <span className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors cursor-pointer underline">
                    gpt-image-1
                  </span>
                </div>
                {/* <div className="flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-1">├─</span>
                  <span className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors cursor-pointer underline">
                    midjourney
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-1">└─</span>
                  <span className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors cursor-pointer underline">
                    comyfui
                  </span>
                </div> */}
              </div>
              
              {/* <div className="flex items-start pt-2">
                <span className="text-gray-500 dark:text-gray-400 mr-1">└─</span>
                <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer">
                  video experiments
                </span>
              </div>
              <div className="ml-4 space-y-1">
                <div className="flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-1">├─</span>
                  <span className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors cursor-pointer underline">
                    gpt
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-1">├─</span>
                  <span className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors cursor-pointer underline">
                    midjourney
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-1">└─</span>
                  <span className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors cursor-pointer underline">
                    comyfui
                  </span>
                </div>
              </div> */}
              
              <div className="flex items-start pt-2">
                <span className="text-gray-500 dark:text-gray-400 mr-1">└─</span>
                <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer">
                  favourites
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-cream dark:bg-gray-900 transition-colors duration-300">
          <main className="relative">
            <div className="relative z-10">
              <MasonryGrid />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App