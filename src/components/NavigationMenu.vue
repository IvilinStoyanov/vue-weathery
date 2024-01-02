<template>
  <ion-header>
    <ion-toolbar color="primary">
      <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
      <ion-buttons slot="start" v-if="pageDefaultBackLink">
        <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
      </ion-buttons>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonButtons,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    pageDefaultBackLink: String,
  },
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
  },
});
</script>
