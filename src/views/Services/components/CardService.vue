<template>
  <section>
      <div class="es-car-box pt-3 pb-3 mt-3" v-bind:class="{ 'es-car-box-active': active }">
          <img :src="require(`@/assets/images/car/${img}`)" alt="">
          <p>{{description}} {{active}}</p>
      </div>
  </section>
</template>

<script>
export default {
  name: "CardServices",
  props:['img', 'description', 'active'],
  created() {
    
  },
  methods: {
    
  },
  components: {}
};
</script>
<style lang="scss">
.es-car-box{
    text-align: center;
    background: #F5F6FF;
    border-radius: 4px;
}
.es-car-box-active{
  background-color: #C2CBFF;
}
</style>