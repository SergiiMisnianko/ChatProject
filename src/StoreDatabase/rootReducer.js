
const initialState = {
  list: [
    { done: false, 
      text: "Hello, Human!", 
      avatar: "https://vraki.net/sites/default/files/inline/images/5_87.jpg", 
      enemyname: "Robot-1", 
      order: "row-reverse",
    },
  ],
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
            text: action.payload, 
            avatar: "https://vraki.net/sites/default/files/mood/29_9.jpg", 
            enemyname: "I`m",
            order: "row",
          },
        ]
      };

    case "TOGGLE_ITEM":
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

    case "DELETE_ITEM":
      return {
        ...state,
        list: state.list.filter((item) =>  item !== action.payload )
      };

      case "DELETE_ALL":
        return {
          ...state,
          list: []
        };

    default:
      return state;
  }
}
