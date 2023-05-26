<script>
    import Teachers from '../components/Teachers.vue'
    import Default from '../layouts/Default.vue'

    export default {
        components:{
            Teachers,
            Default
        }
    }
</script>

<template>
    <Default>

        <Teachers />

    </Default>
    
</template>

<style lang="scss">
@use '../style/partials/variables.scss' as *;

</style>