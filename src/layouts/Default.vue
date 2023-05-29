<script>
import HeaderComponent from '../components/Header.vue';

export default {
    components: {
        HeaderComponent
    }
}
    
</script>

<template>
    <header class="main-header">
        <HeaderComponent></HeaderComponent>
    </header>

    <main class="main-content">
        <slot />
    </main>

    <footer>
        Footer
    </footer>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

.main-header{
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
}

.main-content{
    margin-top: 5%;
}

</style>