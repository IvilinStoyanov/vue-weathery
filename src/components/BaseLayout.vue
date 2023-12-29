<template>
    <ion-page>
        <navigation-menu :title="title" :page-default-back-link="pageDefaultBackLink"></navigation-menu>
        <ion-content :fullscreen="true">
            <slot name="content"></slot>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import { defineComponent } from "vue";
import NavigationMenu from "./NavigationMenu.vue";

export default defineComponent({
    props: {
        title: String,
        pageDefaultBackLink: String,
    },
    components: {
        IonPage,
        IonContent,
        NavigationMenu,
    },
});
</script>
