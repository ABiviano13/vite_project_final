<script>
    import Default from '../layouts/Default.vue'
    import TeacherCardVue from '../components/TeacherCard.vue';


    export default {
        components:{
            Default,
            TeacherCardVue,
        }
    }
</script>

<template>
    <Default>
        <div class="container">
            <h1>{{ teacher.name }}</h1>
        </div>
    </Default>
    <!-- <TeacherCardVue></TeacherCardVue> -->
</template>

<style scoped>

</style>