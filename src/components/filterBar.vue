<template>
    <div class="filter-bar">
        <input type="text" v-model="filters.name" placeholder="Фильтр по имени">
        <select v-model="filters.status">
            <option value="">Все</option>
            <option value="Alive">Живые</option>
            <option value="Dead">Мертвые</option>
            <option value="unknown">Неизвестно</option>
            </select>
        <input @click="emits('confirmFilters', props.filters)" type="button" value="Принять">
    </div>
</template>

<script setup lang="ts">

import { PropType } from 'vue';

const props = defineProps(
    {
        filters: {
            type: Object as PropType<{ name: string, status: string }>,
            required: true
        }
    }
)

const emits = defineEmits<{
    (e: "confirmFilters", filters: { name: string, status: string }): void
}>()

</script>

<style scoped>
.filter-bar {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

</style>