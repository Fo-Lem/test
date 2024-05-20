<template>
    <article class="character-card">
        <img class="character-card-image" :src="imageURL" :alt="'Avatar ' + name">
        <div class="character-card__info">

            <h3 class="character-card-name">{{ name }}</h3>

            <section class="character-card-status">
                <span>{{ status }} - {{ species }}</span>
            </section>

            <section class="character-card-origin">
                <p>Last known location:</p>
                <span>{{ origin }}</span>
            </section>

            <section class="character-card-location">
                <p>First seen in:</p>
                <span>{{ location }}</span>
            </section>

        </div>


    </article>
</template>

<script setup lang="ts">

defineProps({
    name: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },

})

</script>

<style scoped>

.character-card {
    display: flex;
    background: rgb(60, 62, 68);
    color: white;
    border-radius: 1rem;
    overflow: hidden;
}

.character-card__info {
    padding: 1rem;
}
.character-card-name {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}
.character-card-origin p, .character-card-location p {
    
    color: lightgray;

}

@media screen and (max-width: 600px) {
    .character-card {
        flex-direction: column;
    }
    
}

</style>