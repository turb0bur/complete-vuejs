<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
    import Stock        from "./Stock";
    import {mapGetters} from 'vuex';

    export default {
        name:       "Portfolio",
        components: {
            'appStock': Stock
        },
        computed:   {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        }
    }
</script>

<style scoped>

</style>
