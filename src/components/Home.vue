<template>
  <div class="text-center">
    <h1>Trade of View your Portfolio</h1>
    <i>You may save and load your Data</i>
    <h4>Click on 'End Day' to begin a New Day!</h4>
    <hr>
    <p><strong>Your funds: {{ funds}}</strong></p>
  </div>
</template>

<script>
    export default {
        name:     "Home",
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style scoped>

</style>
