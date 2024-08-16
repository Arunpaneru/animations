
import React, { useState, useEffect, useCallback, useMemo } from "react";
const AnimatedText = () => {
  const fullText = useMemo(() => "Your Next Chapter Starts Here.", []);
  const [displayedTextLength, setDisplayedTextLength] = useState(0);
  //   const requestRef = useRef();

  const animateText = useCallback(() => {
    setDisplayedTextLength((prevLength) =>
      prevLength < fullText.length ? prevLength + 1 : prevLength
    );
  }, []);

  useEffect(() => {
    if (displayedTextLength < fullText.length) {
      const timeoutId = setTimeout(animateText, 60);
      return () => clearTimeout(timeoutId);
    }
  }, [displayedTextLength]);

  //   useEffect(() => {
  //     const updateanimation = () => {
  //       animateText();
  //       if (displayedTextLength < fullText.length) {
  //         // scheduling next frame
  //         requestRef.current = requestAnimationFrame(updateanimation);
  //       }
  //     };
  //     requestRef.current = requestAnimationFrame(updateanimation);

  //     return () => {
  //       if (requestRef.current) {
  //         cancelAnimationFrame(requestRef.current);
  //       }
  //     };
  //   }, [fullText.length, displayedTextLength]);

  return (
    <div className="flex justify-start  items-center h-screen bg-gray-100 px-8">
      <h1 className="text-4xl font-bold text-[#cd0094]">
        {fullText.slice(0, displayedTextLength)}
        <span
          className={
            displayedTextLength >= fullText.length ? "hidden" : "animate-blink"
          }
        >
          |
        </span>
      </h1>
    </div>
  );
};

export { AnimatedText };
