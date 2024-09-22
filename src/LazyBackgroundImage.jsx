import React, { useEffect, useRef, useState } from "react";

const LazyBackgroundImage = ({ image, className, children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        backgroundImage: isLoaded ? `url(${image})` : "none",
        transition: "background-image 0.3s ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

export default LazyBackgroundImage;
