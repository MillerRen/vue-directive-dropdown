<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <hr>
    <div class="row">
      <div class="col-md-4">
        <div class="btn-group" v-dropdown="'open'">
          <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            dropdown <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
          <pre>
            import Dropdown from 'vue-directive-dropdown'
            Vue.directive('dropdown', Dropdown)
            // in template: &lt;div class="btn-group" v-dropdown="'open'"&gt;
          </pre>
      </div>
    </div>    
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
pre {
  text-align: left;
}
</style>
