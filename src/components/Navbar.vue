<template>
    <nav>
        <div>Fiber</div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>

div {
    color: white;
    font-size: 1.2rem;
    letter-spacing: .05rem;
    padding: 16px 0;
    margin-left: 20px;
}

nav {
    width: 100vw;
    background-color: #393f52;
    z-index: 10;
}

</style>
