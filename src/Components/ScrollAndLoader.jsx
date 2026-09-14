import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollAndLoader({ children }) {
  const { pathname, hash } = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400); 

    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50/90 dark:bg-[#0a0c16]/90 backdrop-blur-sm transition-opacity duration-300">
          <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {children}
    </>
  );
}