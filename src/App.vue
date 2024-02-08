<template>
  <ion-app>
    <update-s-w></update-s-w>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import UpdateSW from './components/shared/UpdateSW.vue';
</script>