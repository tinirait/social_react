const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_TEXT_DIALOGS = 'ADD-POST-DIALOGS';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you?', likescount: "1"},
                {id: 2, message: 'It s my first step', likescount: "10"},
            ],
            newPostText: 'it-camasutra.com',
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
            newMessageBody: 'it-camasutra.com',
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
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likescount: 1,
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

        if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';

            this._state.dialogsPage.messageData.push(
                {id: 6, messsage: body});
            this._callSubscriber(this._state);

        }

         else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }

    }
};


//PrifilePage
export const addPostActionCreator = () => {
    return {type: ADD_POST}
};
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}

};


//DialogsPage
export const sendMessageCreator = () => {
    return ({type: SEND_MESSAGE});
};
export const updateNewMessageBodyCreator = (text) => {
    return ({type: UPDATE_NEW_MESSAGE_BODY, body: text});
};


export default store;
window.store = store;
