<template>
  <main>

    <!-- form -->
    	<div class="form">
    		<div class="form_int">
    			<h1>Fale <span>consoco</span></h1>
    			<form>
    				<input type="text" placeholder="Nome"><br>
    				<input type="email" placeholder="Email"><br>
    				<input type="tel" placeholder="Telefone"><br>
    				<textarea placeholder="Mensagem"></textarea><br>
    				<button type="submit">Enviar</button>
    			</form>
    		</div>
    	</div>

</main>
</template>

<script>
import NavBar from '@/components/Layout/NavBar'
import rodape from '@/components/Layout/Footers'

export default {
  Name: 'Contato',
    components:{
      NavBar,
      rodape
    },
    data(){
      return{
      }
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
