<docs>
## This is an Example  Page component.
</docs>

<template>
<div class="cars">
  <h1>{{ msg }}</h1>
  <p>This component has scoped styles and uses SASS for the pre-processor!</p>
  <ul>
    <li v-for="car in cars.rows">
      <router-link :to="{ name: 'car', params: { carId: car.id }}">{{car.key}}</router-link>

    </li>
  </ul>
</div>
</template>

<script>
import CarsService from '@/services/CarsService'
export default {
  name: 'cars',
  data () {
    return {
      msg: 'Welcome to the Cars Page',
      cars: []
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter', to, from)
    CarsService.getCars().then((resp) => {
      next(vm => vm.setData(null, resp))
    }).catch((err) => {
      next(vm => vm.setData(err, null))
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate', to, from)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave')
    next()
  },
  methods: {
    setData (err, data) {
      console.log('setData', err, data)
      if (err) {
        this.error = err.toString()
      } else {
        this.cars = data
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about {
    h1 {
        font-weight: normal;
        color: #42b983;
    }
    p {
        padding: 1rem;
    }
}
</style>
