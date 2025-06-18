'use client';

const ThemeScript = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Default to dark mode
            let isDarkMode = true;

            // Check localStorage only if available
            try {
              const stored = localStorage.getItem('darkMode');
              if (stored === 'false') {
                isDarkMode = false;
              }
            } catch (e) {
              // Ignore localStorage errors (e.g., in incognito mode)
            }

            // Apply theme immediately to prevent flash
            if (isDarkMode) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          })();
        `,
      }}
    />
  );
};

export default ThemeScript;
