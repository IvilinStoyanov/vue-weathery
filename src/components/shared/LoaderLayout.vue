<!-- LoadingSpinner.vue -->

<template>
    <div v-if="isLoading" class="loading-overlay">
      <ion-spinner :name="spinnerName" :color="spinnerColor" class="spinner"></ion-spinner>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    props: {
      isLoading: {
        type: Boolean,
        required: true,
      },
      spinnerName: {
        type: String,
        default: 'crescent',
      },
      spinnerColor: {
        type: String,
        default: 'dark',
      },
    }
  });
  </script>
  
  <style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Adjust the z-index as needed */
}

.spinner {
    width: 55px;
    height: 55px;
}
  </style>
  