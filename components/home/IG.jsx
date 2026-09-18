'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      const el = document.querySelector('a[href*="elfsight.com"]');
      if (el) {
        el.remove();
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;  

  return (
    <main className="p-6 text-white">
      <script src="https://elfsightcdn.com/platform.js" async></script>
      <div className="mx-auto w-full max-w-3xl">
        <div
          className="elfsight-app-37619fd6-4054-4d5d-8f00-2c3bfb670a84"
          data-elfsight-app-lazy
        ></div>
      </div>
    </main>

    
  );
}
