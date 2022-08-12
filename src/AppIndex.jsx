


export const AppIndex = ({ index, display, active}) => {

  return (<div className="index list-group">
    <ol>
      {
        index.map((e) => <li
          className= { active===e?"list-group-item active":"list-group-item"}
          key={e}
          onClick={() => display(e)}                
        >
          {e}</li>)
      }
    </ol>
  </div>)

}

 