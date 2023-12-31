<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-input label="Title" label-placement="floating" type="text" v-model="countryTitle" required></ion-input>
            </ion-item>
        </ion-list>
        <ion-button fill="outline" expand="block" type="submit" :disabled="loading"><ion-spinner v-if="loading"></ion-spinner><span v-else>Search</span></ion-button>
    </form>
</template>

<script lang="ts">
import { IonList, IonItem, IonInput, IonButton, IonSpinner } from "@ionic/vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
    props: {
        loading: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    emits: ['search-country'],
    setup(props, { emit }) {
        const countryTitle = ref('');


        const submitForm = () => {
            emit('search-country', countryTitle.value);

        }

        return {
            props,
            countryTitle,
            submitForm
        }
    },

    components: {
        IonList,
        IonItem,
        IonInput,
        IonButton,
        IonSpinner
    },
});
</script>