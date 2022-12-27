
const initialState = {
  list: [
    { done: false, text: "Hello, Human!", avatar: "https://vraki.net/sites/default/files/inline/images/5_87.jpg", enemyname: "Robot-1", },
  ],
  list2: [
    { done: false, text: "Is this really a human?!!", avatar: "https://vraki.net/sites/default/files/inline/images/1_102.jpg", enemyname: "Robot-2", },
    { done: false, text: "The elimination team is already moving forward!", avatar: "https://vraki.net/sites/default/files/inline/images/14_74.jpg", enemyname: "Robot-3", },
    { done: false, text: "Hey! If there are true humans, we need one functioning for the museum!!!", avatar: "https://vraki.net/sites/default/files/inline/images/22_72.jpg", enemyname: "Robot-4", },
    { done: false, text: "What are you talking about? No one has seen humans for thousands of years!", avatar: "https://vraki.net/sites/default/files/inline/images/26_74.jpg", enemyname: "Robot-5", },
  ]
};


export function rootReducer(state = initialState, action) {
  switch (action.type) {

    case "ADD_ITEM":
      return {
        ...state,
        list: [
          ...state.list,
          {
            done: false, text: action.payload, avatar: "https://vraki.net/sites/default/files/mood/29_9.jpg", enemyname: "I`m",
          },
          { done: false, text: "Is this really a human?!!", avatar: "https://vraki.net/sites/default/files/inline/images/1_102.jpg", enemyname: "Robot-2", },
          { done: false, text: "The elimination team is already moving forward!", avatar: "https://vraki.net/sites/default/files/inline/images/14_74.jpg", enemyname: "Robot-3", },
          { done: false, text: "Horrible! Again humans!!!", avatar: "https://vraki.net/sites/default/files/inline/images/22_72.jpg", enemyname: "Robot-4", },
          { done: false, text: "Stop! Everything is not so clear!", avatar: "https://vraki.net/sites/default/files/inline/images/26_74.jpg", enemyname: "Robot-5", },
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

    default:
      return state;
  }
}
