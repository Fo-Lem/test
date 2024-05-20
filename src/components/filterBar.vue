<template>
    <div class="filter-bar">
        <input type="text" v-model="filters.name" placeholder="Фильтр по имени">
        <select v-model="filters.status">
            <option value="">Все</option>
            <option value="Alive">Живые</option>
            <option value="Dead">Мертвые</option>
            <option value="unknown">Неизвестно</option>
            </select>
        <input @click="emits('confirmFilters')" type="button" value="Принять">
    </div>
</template>

<script setup lang="ts">

const filters = defineModel<{
    name: string,
    status: string
}>("filters", {
    type: Object,
    required: true
})

const emits = defineEmits(
    ['confirmFilters']
)

</script>

<style scoped>
.filter-bar {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

</style>