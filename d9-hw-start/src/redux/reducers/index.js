const initialState = {
    favourites: []
  };
  
  const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAVOURITE':
        return {
          ...state,
          favourites: [...state.favourites, action.payload]
        };
      default:
        return state;
    }
  };
  
  export default favouritesReducer;