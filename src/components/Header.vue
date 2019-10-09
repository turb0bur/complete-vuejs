<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" active-class="active" tag="li"><a>Portfolio</a></router-link>
          <router-link to="/stocks" active-class="active" tag="li"><a>Stocks</a></router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">End Day</a></li>
          <li class="dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
            <a href="#" class="dropdown-toggle">Save/Load<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="saveData">Save Data</a></li>
              <li><a href="#">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name:     "Header",
        data() {
            return {
                isDropdownOpen: false
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods:  {
            ...mapActions([
                'randomizeStocks'
            ]),
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds:          this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks:         this.$store.getters.stocks
                };
                this.$http.put('data.json', data);
            }
        }
    }
</script>

<style scoped>

</style>
