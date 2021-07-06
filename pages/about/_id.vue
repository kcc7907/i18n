<template>
  <div>
      <h1>{{ $t(`header_links.about['${id}']`) }}</h1>ㄅ
      <h3>{{ $t('pages.about_page.description') }}</h3>
  </div>
</template>

<script>
export default {
    asyncData({ params }) {
    return { id: params.id };
  }
}
</script>

<style>

</style>