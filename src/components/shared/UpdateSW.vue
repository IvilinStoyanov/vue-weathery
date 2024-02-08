<!-- LoadingSpinner.vue -->

<template>
  <ion-card v-if="needRefresh" class="toast">
    <ion-card-header>
      <ion-text>New content available, click on reload to update</ion-text>
    </ion-card-header>
    <ion-button fill="clear" @click="updateServiceWorker()">Reload</ion-button>
    <ion-button fill="clear" @click="close">Close</ion-button>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonCard, IonText, IonCardHeader, IonButton } from "@ionic/vue";
import { useRegisterSW } from "virtual:pwa-register/vue";

export default defineComponent({
  setup() {
    const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();

    const close = async () => {
      offlineReady.value = false;
      needRefresh.value = false;
    };

    return { offlineReady, needRefresh, updateServiceWorker, close };
  },
  components: {
    IonCard,
    IonCardHeader,
    IonButton,
    IonText,
  },
});
</script>

<style scoped>
.toast {
  position: fixed;
  top: 0;
  right: 0;
  margin: 16px;
  padding: 12px;
  background-color: #ffffff;
  z-index: 1000; /* Adjust the z-index as needed */
}
</style>
