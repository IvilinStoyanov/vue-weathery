<template>
    <ion-col :size="'6'">
        <ion-row class="ion-justify-content-center ion-align-items-center">
            <ion-col :size="'3'">
                <ion-icon :icon="property.icon" color="medium" style="font-size: 2rem;"></ion-icon>
            </ion-col>
            <ion-col :size="'9'">
                <ion-card-subtitle color="medium">{{ property.label }}</ion-card-subtitle>
                <ion-note color="medium">{{ property.value }}</ion-note>
            </ion-col>
        </ion-row>
    </ion-col>
</template>
  
<script lang="ts">
import { ref, computed, watch, ComputedRef, defineComponent } from 'vue';
import { IonCol, IonRow, IonCardSubtitle, IonNote, IonIcon } from "@ionic/vue";
import { leafOutline, thermometerOutline, sunnyOutline, pulseOutline } from 'ionicons/icons';

import { IWeatherProperty } from '@/models/weather-property.interface';

export default defineComponent({
    props: {
        type: String,
        value: Number,
    },
    setup(props) {
        const property = ref<IWeatherProperty>({ icon: '', alt: '', label: '', value: '' });

        const properties = computed(() => {
            return {
                wind: {
                    icon: leafOutline,
                    alt: "leaf outline",
                    label: "Wind",
                    value: `${props.value} mph`,
                },
                feelsLike: {
                    icon: thermometerOutline,
                    alt: "feels like",
                    label: "Feels like",
                    value: `${props.value} °C`,
                },
                indexUV: {
                    icon: sunnyOutline,
                    alt: "index uv",
                    label: "Index UV",
                    value: props.value,
                },
                pressure: {
                    icon: pulseOutline,
                    alt: "pressure",
                    label: "Pressure",
                    value: `${props.value} mbar`,
                },
            } as const;
        }) as ComputedRef<Record<string, IWeatherProperty>>;

        watch(() => props.type, (newType) => {
            if (newType) {
                property.value = properties.value[newType];
            }
        }, { immediate: true });

        return {
            property,
            leafOutline,
            thermometerOutline,
            sunnyOutline,
            pulseOutline
        };
    },
    components: {
        IonCol, IonRow, IonCardSubtitle, IonNote, IonIcon
    }
});
</script>
  