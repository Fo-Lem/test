<template>
  <div class="wrapper">
    <header class="header">
      <h1>Rick and Morty</h1>
    </header>
    <div class="content">
      <FilterBar @confirm-filters="getCharacters()" v-model:filters="filters"></FilterBar>
      <div class="content__container">
        <div v-if="characters.length" class="content-characters">
          <CharacterCard v-for="character in characters" :key="character.id" :name="character.name" :species="character.species" :status="character.status"
            :location="character.location.name" :origin="character.origin.name" :imageURL="character.image" />
        </div>
      </div>
      <Pagination v-model:curent-page="curentPage" :totalPages="totalPages"></Pagination>
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount,watch } from 'vue';
import Pagination from './components/pagination.vue';
import { ICharacter } from './interfaces/Characters';
import { useAPI } from './composables/useApi';
import CharacterCard from './components/characterCard.vue';
import FilterBar from './components/filterBar.vue';

const filters = ref({
  name: '',
  status: ''
})

const characters = ref<ICharacter[]>([])
const curentPage = ref(1)
const totalPages = ref(0)
const { apiGetCharacters } = useAPI()

const getCharacters= async () => {
  const response = await apiGetCharacters({
    page: curentPage.value,
    filters: {
      name: filters.value.name,
      status: filters.value.status
    }
  })
  if (response) {
    characters.value = response.results
    totalPages.value = response.info.pages
  }

  else {
    characters.value = []
    totalPages.value = 0
    curentPage.value = 1
  }
} 

watch(curentPage, async () => {
  await getCharacters()
})

onBeforeMount(async () => {
  await getCharacters()
})




</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

.header h1{
  text-align: center;
}

.content{
  max-width: 1440px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}


.content-characters {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 600px);
  grid-gap: 20px;
}

@media screen and (max-width: 600px) {
  .content-characters {
  grid-template-columns: 1fr;
}
    
}

</style>
