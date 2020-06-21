// A reducer that's going to record whether or not the user is signed at any given time
// the idea behind recording the authentication status inside our redux store is
// to make sure authentication status is available to other components or other screens inside our app

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, isSignedIn: true, userId: action.payload };
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
};