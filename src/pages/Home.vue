<script>
import TeachersIndex from './Teachers.index.vue';
import Default from '../layouts/Default.vue';

export default {
    components: {
        TeachersIndex,
        Default
    }
}
</script>

<template>

    <Default>
        
        <div class="container">
            <TeachersIndex />
        </div>

    </Default>

</template>

<style lang="scss">
@use '../style/partials/variables.scss' as *;

</style>