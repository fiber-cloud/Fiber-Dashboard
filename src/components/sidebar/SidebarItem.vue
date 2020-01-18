<template>
    <router-link :to="item.link" class="link">
        {{ item.name }}
    </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import NavItem from '@/model/NavItem'

@Component
export default class SidbarItem extends Vue {
    @Prop()
    item!: NavItem
}
</script>

<style lang="scss" scoped>

.link {
    font-size: 1.1rem;
    text-decoration: none;
    color: #fff;
    padding: 15px;
}

.active {
    background-color: #20222c;
}

</style>
