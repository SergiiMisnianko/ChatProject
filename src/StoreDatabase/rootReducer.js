import { combineReducers, createStore } from "redux";
import { ACTION_TYPES } from "./actions";


const initialState = {
 
  activeRoom: "room2",

  list: [
    { done: false, 
      text: "We welcome humans!", 
      avatar: "https://vraki.net/sites/default/files/inline/images/5_87.jpg", 
      enemyname: "Butler", 
      order: "row-reverse",
    },
  ],

  room2: [
    { done: false, 
      text: "We will destroy humans!", 
      avatar: "https://vraki.net/sites/default/files/inline/images/10_80.jpg", 
      enemyname: "Terminator", 
      order: "row-reverse",
    },
  ],

  room3: [
    { done: false, 
      text: "We will investigate humans!", 
      avatar: "https://vraki.net/sites/default/files/inline/images/22_72.jpg", 
      enemyname: "Scientist", 
      order: "row-reverse",
    },
  ],

};


function todoListReducer(state = todoListInitial, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_ITEM:
      return [...state.todoList, action.payload];

    case ACTION_TYPES.REMOVE_ITEM:
      return state.todoList.filter((item) => item !== action.payload);

    case ACTION_TYPES.REMOVE_ALL:
      return [];

    default:
      return state;
  }
}





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
    
      case 'CHANGE_ROOM':
        return {
          ...state,
          activeRoom: action.room
        };

    default:
      return state;
  }
}
