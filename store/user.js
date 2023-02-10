export const state = () => ({
    user: {},
    token: ""
});

export const mutations = {
    setToken(state, token){
        state.token = token;
    },
    setMyInfo(state, data){
        state.user = data;
    }
};