import React from "react";

const UseOutsideClick = (
  elementRef: React.RefObject<any> | (React.RefObject<any> | undefined)[],
  handler: () => void,
  attached = true
): void => {
  /**
   * EFFECTS
   */
  React.useEffect(() => {
    if (!attached) return;

    const handleClick = (e: MouseEvent): void => {
      if (Array.isArray(elementRef)) {
        if (elementRef.every((element) => !element?.current)) {
          return;
        }

        if (elementRef.some((element) => element?.current?.contains(e.target))) {
          return;
        }

        handler();
        return;
      }

      console.log(elementRef);
      if (!elementRef.current) return;
      if (!elementRef.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [elementRef, handler, attached]);
};

export default UseOutsideClick;
