<template>
  <div style="display: block;height: 500px;width: 500px;">
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>

    <mt-swipe :auto="4000">
      <mt-swipe-item style="display: block;width: 100px;height: 100px;background: red;">1</mt-swipe-item>
      <mt-swipe-item style="display: block;width: 100px;height: 100px;background: blue;">2</mt-swipe-item>
      <mt-swipe-item style="display: block;width: 100px;height: 100px;background: green;">3</mt-swipe-item>
    </mt-swipe>

    <mt-swipe :show-indicators="false">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>


  </div>
</template>

<script>

</script>
