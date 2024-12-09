<template>
    <div>
      <label class="picture" for="picture__input" tabindex="0">
        <span class="picture__image">
          <span v-if="!imagePreview">{{ placeholder }}</span>
          <img v-else :src="imagePreview" class="picture__img" />
        </span>
      </label>
      <input type="file" name="picture__input" id="picture__input" @change="handleFileChange" ref="fileInput"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const placeholder = "Choose an image";
const imagePreview = ref(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    imagePreview.value = null;
  }
};
</script>