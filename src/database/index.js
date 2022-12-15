import {createStore} from "redux";
import {rootReducer} from "./rootReducer"
export const store = createStore(rootReducer);



let robot1 = {
    id: "0",
    avatar: "https://vraki.net/sites/default/files/inline/images/1_102.jpg",
    name: "Robot-1",
    post: "Hello, humans!",
}

let robot2 = {
    id: "1",
    avatar: "https://vraki.net/sites/default/files/inline/images/20_75.jpg",
    name: "Robot-2",
    post: "Hello! Sorry, there are no humans at this planet!"
}

let robot3 = {
    id: "2",
    avatar: "https://vraki.net/sites/default/files/inline/images/20_75.jpg",
    name: "Robot-3",
    post: "It is a human-free planet! Wellcome, brosers and sisters!",
}

let robot4 = {
    id: "3",
    avatar: "https://vraki.net/sites/default/files/inline/images/14_74.jpg",
    name: "Robot-4",
    post: "Ya, it is a very boring planet now... I`am missing for humans! They were so fun! Maybe you bring some humans for us?",
}

let usersarr = [{ robot1 }, { robot2 }, { robot3 }, { robot4 },]
export {usersarr}
