<script>
import HeaderComponent from '../components/Header.vue';

export default {
    components: {
        HeaderComponent
    }
}
    
</script>

<template>
    <header>
        <HeaderComponent></HeaderComponent>
    </header>

    <main>
        <slot />
    </main>

    <footer>
        Footer
    </footer>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

</style>