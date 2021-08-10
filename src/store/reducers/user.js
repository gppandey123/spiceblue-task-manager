export const types = {
    'login': 'LOGIN_USER',
    'logout': 'LOGOUT_USER',
    'details': 'SET_USER'
}
const initialState = {
    token: JSON.parse(localStorage.getItem('token')),
    company_id: "company_0336d06ff0ec4b3b9306ddc288482663",
    icon: '',
    status: '',
    profile: JSON.parse(localStorage.getItem('profile')),
}
export default function user(state = initialState, actions) {
    switch (actions.type) {
        case types.login:
            return { 
                ...actions.payload,
                company_id: "company_0336d06ff0ec4b3b9306ddc288482663",
             };
        case types.details:
            return { ...state, profile: JSON.parse(localStorage.getItem('profile'))}
        case types.logout:
            return {
                ...state,
                token: localStorage.removeItem("token"),
                profile:localStorage.removeItem("profile"),
                icon:'',
                status:'',
                company_id: "company_0336d06ff0ec4b3b9306ddc288482663",
            };
        default:
            return state;
    }
} 