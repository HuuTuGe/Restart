<template>
    <span class="cbox1">
        {{ msg }}
    </span>
</template>

<script lang="ts">

export default {
  name: 'NAlist',
  data() {
      return {
    msg: ''       
      }
  },
}
</script>

<style>
.cbox1{
    width: 160px;
    height: 50px;
    line-height: 40px;
    background-color: rgb(131, 26, 113);
    text-align: center;
    font-size: 20px;
    border: 1px solid rgba(187, 187, 187, 1);}
    
    
</style>
