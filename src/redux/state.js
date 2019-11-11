let  rerenderEntireTree = () =>{
  console.log('state changed');
};


let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', likescount: "1"},
            {id: 2, message: 'It s my first step', likescount: "10"},
        ],
        newPostText:'it-camasutra.com',
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Dimuch"},
            {id: 2, name: "Vlad"},
            {id: 3, name: "Grow"},
            {id: 4, name: "Victor"},
            {id: 5, name: "Farid"},
            {id: 6, name: "Vitalik"},
            {id: 7, name: "Alex"},
        ],
        messageData: [
            {id: 1, messsage: 'Hi Test'},
            {id: 2, messsage: 'Why Test'},
            {id: 3, messsage: 'Do Test'},
        ],
    },
    sidebar: {
        friendsName: [
            {id: 1, name: 'Vlad'},
            {id: 2, name: 'Petya'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Dimuch'},
            {id: 5, name: 'Andrey'},
            {id: 6, name: 'Riki'},
        ],
    }
};

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likescount: 1,
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);

};

export let updateNewPostText = (newText) => {
        state.profilePage.newPostText = newText;
        rerenderEntireTree(state);
    };

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;
};



export default state;
