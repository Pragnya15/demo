
const initialState = {
    todos: []
  };
  
  const MyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return Object.assign({}, state, {
            todos: state.todos.concat(action.payload)
          });
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default MyReducer;
  