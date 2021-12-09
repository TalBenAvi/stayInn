<template>
   <div class="img-upload-container">
       <label class="clickable">
       <input type="file" id="uploadImg" @change="onUploadImg" hidden />
            <h3 class="center">Upload Image</h3>
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
        // console.log(res);
        this.$emit('onSaveImg', res.url)
        this.isLoading = false
    }
}
}
</script>


<style>
</style>