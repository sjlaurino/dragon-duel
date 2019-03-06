<template>
  <div class="select">
    <h1>Dragon Duel</h1>
    <div class="row">
      <div class="col-6">
        <character :characterData="hero" v-for="hero in heroes" />
      </div>
      <div class="col-6">
        <dragon v-for="dragon in dragons" :dragonData="dragon" />
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Character from '@/components/Characters.vue'
  import Dragon from '@/components/Dragons.vue'

  export default {
    name: 'selector',
    mounted() {
      this.$store.dispatch('getHeroes')
      this.$store.dispatch('getDragons')
    },
    computed: {
      heroes() {
        return this.$store.state.heroes
      },
      dragons() {
        return this.$store.state.dragons
      }
    },
    components: {
      Character,
      Dragon

    }
  }
</script>