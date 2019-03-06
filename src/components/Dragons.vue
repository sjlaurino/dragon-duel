<template>
  <div class="dragon">
    <div class="card">
      <img :src="dragonData.imgUrl" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{dragonData.name}}</h5>
        <p class="card-text">HP: {{dragonData.hp}}</p>
        <a href="#" class="btn btn-success">Fight Dragon</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dragon",
    props: ['dragonData'],
    data() {
      return {};
    },
    computed: {},
    methods: {},
    components: {}
  };
</script>