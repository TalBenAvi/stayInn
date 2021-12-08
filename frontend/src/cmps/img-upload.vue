<template>
   <div class="img-upload-container">
       <label class="clickable" v-if="!isLoading">
            <h3 class="h3-center">Upload Image</h3>
       <input type="file" id="uploadImg" @change="onUploadImg" hidden />
       </label>
       <!-- <img v-else :src="require('../assets/loader.gif')" alt="" /> -->
   </div>
</template>

<script>
import { uploadImg } from '@/services/imgUpload.service.js'

export default {
data() {
    return {
        isLoading: false
    }
},
methods: {
    async onUploadImg(ev) {
        this.isLoading = true
        let res = await uploadImg(ev);
        this.$emit('onSaveImg', res.url)
        this.isLoading = false
    }
}
}
</script>

<style>
.clickable {
    cursor: pointer;
}
img {
    height: 200px;
}
</style>