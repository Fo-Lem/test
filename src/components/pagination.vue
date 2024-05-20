<template>
    <div class="pagination">
        <button :disabled="curentPage === 1" @click="curentPage--">Prev</button>
        <span v-if="curentPage === props.totalPages && curentPage-2 >= props.totalPages" @click="curentPage-=2">{{ curentPage-2 }}</span>
        <span v-if="curentPage !== 1" @click="curentPage--">{{ curentPage-1 }}</span>
        <span class="pagination-active">{{ curentPage }}</span>
        <span v-if="curentPage !== props.totalPages" @click="curentPage++">{{ curentPage+1 }}</span>
        <span v-if="curentPage === 1 && curentPage+2 <= props.totalPages" @click="curentPage+=2">{{ curentPage+2 }}</span>
        <button :disabled="curentPage === props.totalPages" @click="curentPage++">Next</button>
    </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue'

const curentPage = defineModel("curentPage", {
    type: Number,
    required: true
})

const props = defineProps({
    totalPages: {
        type: Number,
        required: true
    }
})


</script>

<style scoped>
.pagination{
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 1rem;
}
.pagination-active{
    font-weight: bold;
    font-size: 1.2rem;
}
</style>