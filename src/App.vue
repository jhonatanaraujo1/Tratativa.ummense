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


.fade-leave-active {
  transition: all .3s;
}

.fade-enter-active {
  transition: all .3s reverse;
}

.fade-enter, .fade-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}


</style>
