<template>
  <div class="main-container">
    
    <div class="form">
      <form class="card-form" action="" method="post">
          <h2 class="form__title">New Plot</h2>
          <label for="Area"></label>
          <input v-model="values.area" type="number" id="area" name="area" placeholder="Area" re><br>
          <label for="Latitude"></label>
          <input v-model="values.latitude" type="number" id="latitude" name="latitude" placeholder="latitude" re><br>
          <label for="longitude"></label>
          <input v-model="values.longitude" type="number" id="longitude" name="longitude" placeholder="longitude" re><br>

          <input @click="createPlot" class="enviar" type="button" value="Send">
      </form>
    </div>
    <div class="container">
      <div class="title-section">
        <h2 class="title">Plots</h2>
      </div>
      <div class="card-container">
          <div class="card" v-for="value in values" :key="value._id">
              <p><b>Area: </b>{{value.area}}</p>
              <p><b>Latitude: </b>{{value.latitude}}</p>
              <p><b>Longitude: </b>{{value.longitude}}</p>
              <p><b>Status: </b>{{value.status}}</p>
              <button @click="deletePlot(value._id)" class="eliminar">delete</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import EverGreenService from '@/EverGreenService.js';
import "@/assets/styles/global.css";

export default {
  name: 'plot',
  data() {
    return {
      values: {
        area: '',
        latitude: '',
        longitude: '',
        status: '',
        plot: '',
      },
      error: '',
      text: ''
    }
  },
  async created() {
      try {
        this.values = await EverGreenService.plot();
      }
      catch(err) {
        this.error = err.message;
      }
  },
  methods: {
      async createPlot() {
        await EverGreenService.createPlot(this.values);
        this.values = await EverGreenService.plot();
        window.location.reload();
      },
      async deletePlot(id) {
        await EverGreenService.deletePlot(id);
        this.values = await EverGreenService.plot();
        window.location.reload();
      },
  },
}
</script>
