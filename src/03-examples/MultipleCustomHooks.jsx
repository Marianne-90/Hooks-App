import { useFetch, useCounter, useForm } from '../hooks';
import { LoadingQuote, Quote } from './';
import { GiPlayButton, GiPreviousButton, GiDrinkMe, GiDoctorFace, GiMagnifyingGlass } from "react-icons/gi";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement, setCounter } = useCounter(1);

  const { data, isLoading, hasError } =
    useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);


  const { author, quote } = !!data && data[0];

  /*esto es para la búsqueda */

  const { formState, onInputChange,setFormState } = useForm({
    quoteNumber: ''
  });

  const { quoteNumber } = formState;

  const onSearch = ()=> {
    const setQuoteNumber = Number(quoteNumber)
    setFormState({})
    setCounter(setQuoteNumber)
  }

  /*esto es para la búsqueda */

  return (
    <div className="pink">
      <h3>Breaking Bad Quotes</h3>
      <hr />
      <h2 className='left text-center'><GiDrinkMe /><GiDoctorFace /> <br/> n° {counter}</h2>

      {
        isLoading
          ? <LoadingQuote />
          : <Quote quote={quote} author={author} />
      }
      <div className='d-flex justify-content-center'>
        <button
          className='btn m-3 '
          disabled={isLoading || counter < 2}
          onClick={() => decrement(1)}>
          <GiPreviousButton /> Prev quote
        </button>

        <div>
          <div className="input-group ">

            <input type="number"
              className="form-control numberInput"
              placeholder={counter}
              name="quoteNumber"
              value={quoteNumber < 101 && quoteNumber > 0 && quoteNumber}
              onChange={onInputChange}
              min="1" max="100"
            />

            <div className="input-group-append">
              
              <button className="btn btn-outline-secondary search" 
                type="button" 
                id="button-addon2"
                onClick={() => quoteNumber > 0 && onSearch()}>
                <GiMagnifyingGlass />
              </button>
              
            </div>
          </div>
        </div>


        <button
          className='btn m-3 btn'
          disabled={isLoading }
          onClick={() => counter < 100 &&increment(1)}>
          Next quote <GiPlayButton />
        </button>
      </div>
    </div>
  )
}