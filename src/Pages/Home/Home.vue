<template>
  <main>
  <!-- title -->
	<div class="container three">
		<div class="title1">
			<h1>Gestão de <span>projetos</span>.<br> Simples, ágil e inteligente.</h1>
		</div>
		<div class="title2">
			<p>Destrave o melhor da sua equipe</p>
		</div>
	</div>

	<!-- gestao de projetos.img -->
	<div class="gProjetos">
		<img src="@/assets/gestao-de-projetos.png">
	</div>

	<!-- Grid -->
	<div class="container grid">
		<h1>Um <span>novo conceito em gestão</span> de projetos</h1>
	</div>
	<div class="container gridText">
		<p>Da criação de um logotipo, até a construção de um edifício, da negociação de uma venda à logística da entrega, os projetos estão por toda parte<br>, e precisam ser gerenciados de forma eficiente. Na Ummense, você não precisa ser expert em gestão para liderar uma equipe e alcançar os<br> objetivos do projeto. Saiba instantaneamente o que cada um está fazendo e reúna todas as informações do projeto em um único lugar.</p>
	</div>
	<div class="container grid">
		<div class="container_int grid width">
			<div class="grid_first">
				<div class="grid1">
					<p><span>Aumente a produtividade</span><br> Automatize facilmente tudo o que<br> não precisa ser feito por humanos</p>
				</div>
				<div class="grid2">
					<p><span>Simplifique seu dia a dia</span><br> Acompanhe todos os projetos do<br> fluxo em uma única tela</p>
				</div>
				<div class="grid3">
					<p><span>Organize e ative a colaboração</span><br> Seu time pode trabalhar junto com<br> mais eficiência e sem perder<br> nenhuma informação</p>
				</div>
			</div>
			<div class="grid_first">
				<div class="grid1">
					<p><span>Aprimore seu fluxo de trabalho</span><br> Ao enxergar todas as etapas dos<br> seus processos você pode otimizar<br> os fluxos constantemente</p>
				</div>
				<div class="grid2">
					<p><span>Alcance excelência operacional</span><br> Nenhuma etapa é negligenciada,<br> sua empresa funciona<br> perfeitamente.</p>
				</div>
				<div class="grid3 fixbug">
					<p><span>Gerencie equipes de modo eficaz</span><br> Todos sabem o que precisam fazer<br> e quando precisam entregar. E o<br> gestor consegue acompanhar tudo</p>
				</div>
			</div>
			<div class="grid_first">
				<div class="grid1">
					<p><span>Entregue resultados confiáveis</span><br> Você saberá exatamente o que foi<br> entregue para o cliente e qual é o<br> resultado final dos projetos</p>
				</div>
				<div class="grid2">
					<p><span>Fidelize seus clientes</span><br> Seus clientes ficarão muito mais<br> satisfeitos com uma comunicação<br> organizada e entregas pontuais<br> e de qualidade.</p>
				</div>
				<div class="grid3 fixbug">
					<p><span>Mensure o desempenho<br></span> Com as estatísticas de projetos,<br> equipes e colaboradores, você<br> saberá exatamente o quanto sua<br> organização está melhorando</p>
				</div>
			</div>
		</div>
	</div>
	<!-- bg BLUE -->
	<div class="bg_blue">
		<div class="container_bg">
			<h1><span>Mais tempo</span> para o que realmente importa</h1>
			<p>Por mais importante que você pareça, não é legal ser o gestor extremamente ocupado, centralizador, correndo de um lado<br> para o outro, estressado, esquecendo compromissos e informações importantes. Você acaba sem tempo para pensar<br> estrategicamente sobre a empresa, sobre sua visão de futuro e em novas oportunidades de negócios. E aquilo que é o mais<br> importante, mas não é urgente, é deixado de lado, como sua família, seus sonhos, sua saúde e seu propósito de vida.</p>
			<p>Assuma o controle. Elimine o urgente e viva aquilo que realmente importa.</p>
		</div>
	</div>
	<!-- two columns -->
	<div class="twoColumns">
		<div class="TCint">
			<div class="TCflex">
				<div class="tc1">
					<img src="@/assets/metodologias-ageis.png">
				</div>
				<div class="tc2">
					<div class="titletc"><h1>As <span>Metodologias Ágeis</span><br> nunca foram tão ágeis</h1></div>
					<div class='texttc'>
						<p>Se você está familiarizado com termos como Scrum, Sprint, Kanban, Product<br> Backlog, XP, FDD e outros termos semelhantes, a Ummense é pra você! Implante a<br> sua forma de gestão na Ummense e ganhe ainda mais produtividade para a sua<br> equipe. Facilite a gestão e o acompanhamento em tempo real mantendo o<br> histórico de todas as informações relevantes para o projeto. Crie um subprojeto<br> para cada Story e atribua à Sprint, mantendo o projeto principal com o histórico<br> completo e Backlog.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
</template>

<script>
import NavBar from '@/components/Layout/NavBar'
import rodape from '@/components/Layout/Footers'
export default {
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
