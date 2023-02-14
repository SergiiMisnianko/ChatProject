export const ACTION_TYPES = {
    ADD_ITEM: "ADD_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    REMOVE_ALL: "DELETE_ALL",
    CHANGE_ROOM: "CHANGE_ROOM",
  };
  
  export const addItemAction = (text) => ({
    type: ACTION_TYPES.ADD_ITEM,
    payload: text
  });
  
  export const deleteItemAction = (item) => ({
    type: ACTION_TYPES.DELETE_ITEM,
    payload: item
  });
  
  export const removeAllAction = () => ({
    type: ACTION_TYPES.REMOVE_ALL
  });
  
  export const changeRoomAction = (room) => ({
    type: ACTION_TYPES.ADD_ITEM,
    payload: room
  });