

export const Quote = ({quote, author}) => {

  return (
    <blockquote className='blockquote text-center p-3'>
      <p className='m-2'>
        {quote}
      </p>
      <footer className='blockquote-footer m-2'>{author}</footer>
    </blockquote>
  )
}