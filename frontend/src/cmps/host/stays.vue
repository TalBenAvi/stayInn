<template>
  <div class="flex-row space-evenly border-bottom">
    <div>Guest Name</div>
    <div>Check in</div>
    <div>Check out</div>
    <div>Status</div>
    <div>Price</div>
    <div>Actions</div>
  </div>
</template>

<script>
export default {
    props: {
        user: Object
    },

    created() {
        console.log(this.user)
        this.setHostStays()

    },
    methods: {
        // async setHostStays() {
        //     try {
        //         var stays = await this.$store.dispatch({type:'getStayByHostId', hostId: this.user._id})
        //         console.log(stays)
        //     } catch (err) {
        //         console.log('had error setting host stays in component', err)
        //     }
        // }
    }



};
</script>
