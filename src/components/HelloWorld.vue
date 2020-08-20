<template>
  <div class="helloworld">
    <b-table :data="tableData" :columns="columns"></b-table>
    <b-select v-model="selectedCandidate" expanded placeholder="Select candidate">
      <option v-for="option in tableData" :value="option.id" :key="option.name">{{ option.name }}</option>
    </b-select>
    <br>
    <button class="button is-primary" @click="setVote()">Votar</button>
    <br>
    <br>
    <h1>Dirección Contrato: {{this.currentAddress}}</h1>
    <h1>Dirección  Votante: {{votanteAddress}}</h1>
    <img src="../../public/img/Fintech.jpg" aling="left" style="left:20px;max-width:50%;width:100px;height:100px;">
    <img src="../../public/img/escuela 54x54.png" aling="right" style="left:20px;max-width:50%;width:100px;height:100px;">
  </div>
</template>

<script lang="js">
import web3 from "../../contracts/web3"
import instance from "../../contracts/contractInstance"; 
import Election from '../../build/contracts/Election.json'

export default {
  data() {
    return {
      selectedCandidate: null,
      name: null,
      currentAddress: null,
      electionContract: Election,
      tableData: [],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true
        },
        {
          field: "name",
          label: "Nombre"
        },
        {
          field: "votes",
          label: "Votos"
        }
      ]
    };
  },

  methods:{

      async getValue(){
          web3 = new Web3(web3.currentProvider.selectedAddress)
          this.votanteAddress = web3.currentProvider
          let electionContract = instance
          this.currentAddress = electionContract._address
          let candidatesCount = await electionContract.methods.candidatesCount().call()
          this.tableData = []
          for(let i = 0; i < candidatesCount; i++){
              if(i != 0)
              {
                  let candidates = await electionContract.methods.candidates(i).call()
                  this.tableData.push({ id: i, name: candidates.name, votes: candidates.voteCount})
              }
          }
        
      },
      async setVote(){
          web3 = new Web3(web3.currentProvider.selectedAddress)
          this.votanteAddress = web3.currentProvider
          let electionContract = instance
          let vote = await electionContract.methods.vote(this.selectedCandidate).send({from: this.votanteAddress})
          //console.log(vote)
      }
  },

  created: function(){
      this.getValue()
  }
};
</script>

<style scoped>
.helloworld {
  margin: auto;
  width: 50%;
}
</style>