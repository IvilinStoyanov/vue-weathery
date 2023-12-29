<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-input label="Title" label-placement="floating" type="text" v-model="countryTitle" required></ion-input>
            </ion-item>
        </ion-list>
        <ion-button fill="outline" expand="block" type="submit">Search</ion-button>
    </form>
</template>

<script lang="ts">
import { IonList, IonItem, IonInput, IonButton } from "@ionic/vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
    emits: ['search-country'],
    setup(_, { emit }) {
        const countryTitle = ref('');


        const submitForm = () => {
            emit('search-country', countryTitle.value);

        }

        return {
            countryTitle,
            submitForm
        }
    },

    components: {
        IonList,
        IonItem,
        IonInput,
        IonButton
    },
});
</script>