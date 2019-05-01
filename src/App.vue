<template>
<body>
  <header>
      <nav-bar />
  </header>
      <main>
      <transition name="fade">
        <router-view />
      </transition>
      </main>

      <footer>
        <rodape/>
      </footer>
</body>
</template>

<script>
import NavBar from '@/components/Layout/NavBar'
import rodape from '@/components/Layout/Footers'


export default {
  name:'app',
  components:{
  NavBar,
  rodape

 }
}
</script>

<style >





</style>
