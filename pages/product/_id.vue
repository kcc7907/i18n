<template>
  <div>
    <h1>{{ $t(`header_links.product['${id}'].name`) }}</h1>
    <ul class="cards">
        <li class="card" v-for="(item, index) in products" :key="index">
          <div class="pic">
            <img :src="currentPrd[item].img_url">
          </div>
          <p>{{currentPrd[item].name}}</p>
          <p>{{currentPrd[item].description}}</p>
          <p>$ {{currentPrd[item].price}} </p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    return { id: params.id };
  },
  data() {
    return {
      data: this.$i18n.messages.zh
    }
  },
  computed:{
    products(){
      return this.data.header_links.product[this.id].products
    },
    currentPrd(){
      return this.data.products
    }
  },
  mounted() {
  },
};
</script>

<style>
.pic{
  width: 300px;
  height: 300px;
}
.cards{
  display: flex;
  justify-content: center;
}
.card{
  margin: 5em;
}
</style>
