
const initialState = {};
  
  export function rootReducer(state = initialState, action) {
    return state;
  }



  /*

const initialState = {
    list: [],
    addInputValue: ""
  };

  export function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_ITEM":
        return {
          ...state,
          list: [
            ...state.list,
            {
              done: false,
              text: action.payload
            }
          ]
        };
  
      case "ITEM_TOGGLE":
        return {
          ...state,
          list: state.list.map((item) => {
            if (item !== action.payload) {
              return item;
            }
  
            return {
              ...item,
              done: !item.done
            };
          })
        };
  
      case "ITEM_REMOVE":
        return {
          ...state,
          list: state.list.filter((item) => item !== action.payload)
        };
  
      default:
        return state;
    }
  }
  */