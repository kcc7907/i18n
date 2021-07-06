<template>
  <header>
    <div class="logo">
      <nuxt-link :to="localePath({ name: 'index'})">Home</nuxt-link>
    </div>
    <div class="links">
      <ul v-for="item in Object.entries($i18n.messages.zh.header_links)" :key="item[0]">
        {{item[0]}}
        <li v-for="(key, index) in Object.entries(item[1])" :key="index">
          <nuxt-link :to="localePath({ name: `${item[0]}-id` , params: { id: key[0]} })">
            {{typeof(key[1])==="object"?key[1].name:key[1]}}
            </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="lang">
      <span @click="chang('zh')">zh</span>|
      <span @click="chang('en')">en</span>  
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    chang(lang){
      this.$i18n.setLocale(lang)
    }
  },
  mounted() {
    console.log(this);
  },
}
</script>

<style>
  header{
    display: flex;
    position: relative;
  }
  .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: 1em;
  }
  .links{
    display: flex;
    margin-left: 5em;
  }
  .lang{
    margin: 1em;
  }
  span{
    margin: 0.5em;
    cursor: pointer;
  }
  .links li{
    margin-top: 0.3em;
    list-style: none;
    transition: .5s;
    transform-origin: top;
    transform: scaleY(0);
  }
  .links ul:hover li{
    transform: scaleY(1);
  }
</style>