<template>

	<footer>
			<div class="footer_lg">
					<div class="container_int_footer">
							<h1>Seja um dos primeiros</h1>
							<p>A plataforma Ummense está em fase de testes e em algumas semanas você poderá aproveitar os benefícios da Ummense para impulsionar sua organização! Deixe aqui seu e-mail para avisarmos você.</p>
							<div class="form_ft">
									<div class="input1">
											<div class="text">Nome</div>
											<input type="text" placeholder="Seu primeiro nome" style="height:60px; border:1px solid #707070; padding:13px; font-size:16px; border-radius:5px;">
									</div>
									<div class="input2">
											<div class="text">E-mail</div>
											<input type="text" placeholder="Insira seu melhor e-mail" style="height:60px; border:1px solid #707070; font-size:16px; padding:13px; border-radius:5px;">
									</div>
									<div class="input3">
											<div class="text1">...</div>
											<input type="submit" value="Quero ser avisado" style="height:60px; background-color:#8BBD4F; border:1px solid #707070; font-size: 16px; color:#fff; border-radius:5px;">
									</div>
							</div>
					</div>
			</div>
			<div class="footer_all">
					<div class="container_int footer">
							<div class="footer_logo">
									<p>Uma empresa do grupo</p>
									<img src="@/assets/logo-scopo.png" style="margin-left:10px;">
							</div>
							<div class="icons">
									<a href=""><img src="@/assets/linkedin.png" style="width:34px;"></a>
									<a href=""><img src="@/assets/facebook.png" style="width:34px;"></a>
									<a href=""><img src="@/assets/instagram.png" style="width:34px;"></a>
									<a href=""><img src="@/assets/twitter.png" style="width:34px;"></a>
									<a href=""><img src="@/assets/youtube.png" style="width:34px;"></a>
							</div>
					</div>
			</div>
	</footer>
</template>

<script>
import NavBar from '@/components/Layout/NavBar'
import Foot from '@/components/Layout/Footers'

export default {
  Name:'Footers',
  data(){
    return{
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
