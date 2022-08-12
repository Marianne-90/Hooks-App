

export const todoReducer = (initialState=[], action) => {

  switch (action.type) {
    case 'value':
      throw new Error('Action.type = value no esta implementado');
      
    default:
      return initialState;
  }

}