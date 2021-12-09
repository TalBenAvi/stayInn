
<template>
         <div v-if="msg" class="user-msg" :class="msg.type">
             <img v-if="msg.type==='success'" src="~@/assets/imgs/icons/approved.png">
              <img v-else src="~@/assets/imgs/icons/rejected.png">
            <p>{{msg.txt}}</p>
        </div>
</template>


<script>
import { eventBus } from '../services/eventBus.js'

export default {
    created() {
        eventBus.$on('showMsg', this.showMsg);
    },
    data() {
        return {
            msg: null
        }
    },
   methods: {
        showMsg(msg) {
            this.msg = msg;
            setTimeout(() => {
                this.msg = null;
            }, 4000);
        }
    },
    destroyed() {
        eventBus.$off('showMsg', this.showMsg);
    }
}
</script>

