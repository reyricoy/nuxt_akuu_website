<script>
import {mapState, mapMutations} from "vuex"

export default {
    methods: {
        sayGoodbye(){
            this.putGreeting('goodbye')
        },
        ...mapMutations({
        putGreeting: 'putGreeting'
        })
    },
   
    computed: {
        ...mapState({
            message: store => store.message
        })
    }
}
</script>

<template>
    <div>
        {{message}}
        <button @click="sayGoodbye">Good bye</button>
        <nuxt-link to = "/">Home</nuxt-link>
    </div>
</template>