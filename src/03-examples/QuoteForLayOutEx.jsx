import { useLayoutEffect, useRef, useState } from "react"



export const QuoteForLayOutEx = ({ quote, author }) => {

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })


  const pRef = useRef();

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height})

  }, [quote])

  return (
    <>
      <blockquote className='blockquote text-end p-3' style={{ display: 'flex' }}>
        <p className='m-2' ref={pRef}>
          {quote}
        </p>
        <footer className='blockquote-footer m-2'>{author}</footer>
      </blockquote>
      <code className="text-center">the width and height of the quote are {JSON.stringify(boxSize)}</code>
    </>
  )
}