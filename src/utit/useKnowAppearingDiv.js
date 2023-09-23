import React, { useEffect, useRef } from "react";
const useIntersectionObserver = (callback, options) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [callback, options]);

  return targetRef;
};

const KnowingAppearingDiv = ({ children, setIsAppear }) => {
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // The target element has started appearing on the screen

        setIsAppear(true);
      } else {
        // The target element is not visible on the screen
        // Perform any actions you want here
        setIsAppear(false);
      }
    });
  };

  const targetRef = useIntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.0,
  });

  return <div ref={targetRef}>{children}</div>;
};

export default KnowingAppearingDiv;
