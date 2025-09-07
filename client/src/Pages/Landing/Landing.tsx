import React, { useState, useEffect } from 'react';
import { Check, Clock, History, FolderOpen, Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const AnimatedThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`
        relative inline-flex h-12 w-12 items-center justify-center rounded-full
        transition-all duration-300 ease-in-out
        ${isDark 
          ? 'bg-gray-800 text-yellow-400 shadow-lg shadow-gray-900/20' 
          : 'bg-white text-gray-600 shadow-lg shadow-gray-200/50'
        }
        hover:scale-110 hover:rotate-12
        ${isDark ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'}
      `}
    >
      <div className="relative h-5 w-5 flex items-center justify-center">
        <Sun
          className={`
            absolute h-5 w-5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-500
            ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}
          `}
        />
        <Moon
          className={`
            absolute h-5 w-5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-500
            ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}
          `}
        />
      </div>
    </button>
  );
};

const TracklanceLanding: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const toggleTheme = (): void => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Dashboard',
      description: 'Overview of your tasks'
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: 'Update',
      description: 'Quickly log progress'
    },
    {
      icon: <History className="w-8 h-8" />,
      title: 'History',
      description: 'Track past updates'
    },
    {
      icon: <FolderOpen className="w-8 h-8" />,
      title: 'Categories',
      description: 'Organize efficiently'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`px-4 sm:px-6 lg:px-8 py-4 transition-colors duration-300 ${
        isDark ? 'bg-gray-900/95' : 'bg-white/95'
      } backdrop-blur-sm border-b ${
        isDark ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative w-36 md:w-44 h-12 md:h-16">
              <img
                src="/Logo.png"
                alt=""
                className={`absolute inset-0 h-full w-auto ${isDark ? 'opacity-100' : 'opacity-0'}`}
              />
              <img
                src="/Logo2.png"
                alt=""
                className={`absolute inset-0 h-full w-auto ${isDark ? 'opacity-0' : 'opacity-100'}`}
              />
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className={`hover:text-green-600 transition-colors ${
              isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-600'
            }`}>Home</a>
            <a href="#" className={`hover:text-green-600 transition-colors ${
              isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-600'
            }`}>Features</a>
            <a href="#" className={`hover:text-green-600 transition-colors ${
              isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-600'
            }`}>About</a>
            <a href="#" className={`hover:text-green-600 transition-colors ${
              isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-600'
            }`}>Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <AnimatedThemeToggle isDark={isDark} onToggle={toggleTheme} />
            {/* Desktop actions */}
            <div className="hidden md:flex items-center space-x-3">
              <button className={`px-4 py-2 rounded-md transition-colors ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>
                Login
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-medium transition-colors">
                Sign Up
              </button>
            </div>
            {/* Mobile hamburger */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open menu"
              className={`${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              } p-2 rounded-md transition-colors border ${isDark ? 'border-gray-700' : 'border-gray-200'} md:hidden`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Track Your Work,{' '}
                <span className="block">Stay on Top of</span>
                <span className="block">Your Progress</span>
              </h1>
              
              <p className={`text-lg sm:text-xl leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Tracklance helps you manage tasks, updates, categories, and history all in one place.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors">
                  Get Started
                </button>
                <button className={`px-8 py-3 rounded-md font-medium text-lg border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors ${
                  isDark ? 'hover:text-white' : ''
                }`}>
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className={`rounded-lg shadow-2xl overflow-hidden ${
                isDark ? 'bg-gray-800 shadow-gray-900/50' : 'bg-white shadow-gray-200/50'
              }`}>
                <div className={`flex ${
                  isDark ? 'bg-gray-900' : 'bg-gray-100'
                } p-4 border-b ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex">
                  {/* Sidebar */}
                  <div className="bg-green-600 w-1/3 p-4 space-y-4">
                    <div className="flex items-center space-x-2 text-white">
                      <Check className="w-5 h-5" />
                      <span className="font-semibold">Tracklance</span>
                    </div>
                    <nav className="space-y-2 text-white/90">
                      <div className="py-2 px-3 bg-white/20 rounded">Dashboard</div>
                      <div className="py-2 px-3">Update</div>
                      <div className="py-2 px-3">History</div>
                      <div className="py-2 px-3">Category</div>
                    </nav>
                  </div>
                  
                  {/* Main Content */}
                  <div className={`flex-1 p-6 ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <h3 className="text-xl font-semibold mb-6">Dashboard</h3>
                    <div className="space-y-4">
                      <div className="h-4 bg-green-500 rounded w-3/4"></div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className={`h-2 rounded flex-1 ${
                            isDark ? 'bg-gray-700' : 'bg-gray-200'
                          }`}></div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className={`h-2 rounded flex-1 ${
                            isDark ? 'bg-gray-700' : 'bg-gray-200'
                          }`}></div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className={`h-2 rounded flex-1 ${
                            isDark ? 'bg-gray-700' : 'bg-gray-200'
                          }`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className={`px-4 sm:px-6 lg:px-8 py-16 ${
        isDark ? 'bg-gray-800/50' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
              }`}>
                <div className="text-green-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Theme Toggler removed as requested */}

      {/* Sidebar Drawer */}
      <div className={`fixed inset-0 z-40 ${isSidebarOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isSidebarOpen}>
        {/* Overlay */}
        <div
          onClick={() => setIsSidebarOpen(false)}
          className={`absolute inset-0 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'} ${isDark ? 'bg-black/50' : 'bg-black/30'}`}
        />
        {/* Panel */}
        <aside
          className={`absolute left-0 top-0 h-full w-80 max-w-[85%] transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-2xl`}
          role="dialog"
          aria-modal="true"
        >
          <div className={`flex items-center justify-between px-4 py-4 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="flex items-center space-x-2">
              <img src="/Logo.png" alt="Tracklance" className='w-36 md:w-44'/>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close menu"
              className={`p-2 rounded-md ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="px-4 py-4 space-y-2">
            <a href="#" className={`block px-3 py-2 rounded ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>Home</a>
            <a href="#" className={`block px-3 py-2 rounded ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>Features</a>
            <a href="#" className={`block px-3 py-2 rounded ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>About</a>
            <a href="#" className={`block px-3 py-2 rounded ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>Contact</a>
          </nav>

          <div className={`mt-auto px-4 py-6 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="flex gap-3">
              <button className={`px-4 py-2 rounded-md transition-colors border ${isDark ? 'text-gray-300 hover:text-white border-gray-700' : 'text-gray-600 hover:text-gray-900 border-gray-300'}`}>
                Login
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-medium transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TracklanceLanding;