export const state = function(){
    return {
        message: 'Hello from vuex'
    }
};


export const mutations = {
    putGreeting(state, greeting){
        state.message = greeting;
    }
}