<template>
  <section>
    <div>
      <h4 id="app">Welcome to the Page of Zimbabwe Projects</h4>
      <div style="display: inline-block;" v-for="result of results" v-bind:key="result.ProjectID"  >
        <b-card
          style="max-width: 20rem"
          class="m-5"
        > <p class="title"><b> {{result.ProjectName}} </b></p> <img src="http://192.168.1.103:4003/images/688AE3D6-D95F-EC11-AC19-000C29330757/default.PNG" style="max-width: 287px">
          <b-card-text class="apitext">
            <label class="label"><b> ID of Project : </b></label> {{result.ProjectID}}
            <br>
            <label class="label"><b>Start Date : </b></label> {{result.StartDate}}
            <br>
            <label class="label"><b>End Date : </b></label> {{result.EndDate}}
            <br>
            <label class="label"><b>Fund : </b></label> {{result.FundraisingTime}}
            <br>
            <label class="label"><b>FirstName : </b></label> {{result.FirstName}}
            <br>
            <label class="label"><b>LastName : </b></label> {{result.LastName}}
            <br>
            <label class="label"><b>Active Investors : </b></label> {{result.InvestorCount}}
            <br>
            <label class="label"><b>Investment Amount : </b></label> {{result.InvestmentAmount}}
            <br>
            <label class="label"><b>Fundable Amount : </b></label> {{result.FundableAmount}}
            <br>
            <label class="label"><b>Entrepreneur Name : </b></label> {{result.EntrepreneurName}}
          </b-card-text>
          <b-button href="#" variant="success">Button</b-button>
        </b-card>
      </div>
    </div>
  </section>
</template>

<script>
import { BCard } from 'bootstrap-vue'
import axios from '../../src/axios-auth';

export default {
  data () {
    return {
  results: [

      ],
    }
  },
  computed: {
    BCard,
  },
  methods: {
    getCardData () {
      axios
          .post("Project/ProjectList")
          .then((res) => {
            this.results = res.data.Result
            // console.log(res.data.Result) // veriyi olduğu gibi gösteriyor
          })
          .catch(error => {
            console.log(error)
            })
    }
  },
  mounted () {
    this.getCardData()
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  font-size: 22px;
}
.apitext{
  font-family: Calibri;
  color: black;
}
.label{
  font-size: 17px;
}
</style=>