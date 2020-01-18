<template>
    <div>
        <h2>Dashboard</h2>
        <sidebar-item :key="item.name" v-for="item in navItems" :item="item"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SidebarItem from './SidebarItem.vue'
import NavItem from '@/model/NavItem'

@Component({
  components: {
    SidebarItem
  }
})
export default class Sidebar extends Vue {
    navItems: NavItem[] = [
      {
        name: 'Home',
        link: 'home',
        icon: 'home'
      },
      {
        name: 'Server',
        link: 'server',
        icon: ''
      },
      {
        name: 'User',
        link: 'user',
        icon: ''
      },
      {
        name: 'Statistics',
        link: 'statistics',
        icon: ''
      }
    ]
}
</script>

<style lang="scss" scoped>

div {
  position: fixed;
  background-color: #313545;
  width: 250px;
  min-height: 100%;

  display: flex;
  flex-direction: column;
}

h2 {
  color: #fff;
  padding: 20px 0 20px 15px;
  font-weight: 100;
}

</style>
