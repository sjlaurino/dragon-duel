<template>
  <div class="characters">
    <div class="card">
      <img :src="characterData.imgUrl" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{characterData.name}}</h5>
        <p class="card-text">HP: {{characterData.hp}}</p>
        <a href="#" class="btn btn-success">Add Champion</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "character",
    props: ["characterData"],
    data() {
      return {};
    },
    computed: {},
    methods: {},
    components: {}
  };
</script>