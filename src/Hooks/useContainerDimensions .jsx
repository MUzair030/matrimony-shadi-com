import { useState, useEffect } from "react";

export const useContainerDimensions = myRef => {
    const getDimensions = () => ({
        containerWidth: myRef.current.offsetWidth,
        containerHeight: myRef.current.offsetHeight
    })

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const handleResize = () => {
            setDimensions(getDimensions())
        }

        if (myRef.current) {
            setDimensions(getDimensions())
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [myRef])

    return dimensions;
};


/**
 * -This is basically Marco Antônio's answer for a React custom hook, but modified to set the dimensions initially and not only after a resize.
 * -How to Use:
const MyComponent = () => {
  const componentRef = useRef()
  const { containerWidth, containerHeight } = useContainerDimensions(componentRef)

  return (
    <div ref={componentRef}>
      <p>width: {containerWidth}px</p>
      <p>height: {containerHeight}px</p>
    <div/>
  )
}
 */