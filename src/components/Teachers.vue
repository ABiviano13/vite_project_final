<script>
    import axios from 'axios'
    import TeacherCard from './TeacherCard.vue'

    export default {
        components: {
            TeacherCard,
        },
        data(){
            return {
                teachers: [],
            }
        },
        methods: {
            fetchTeachers(){

                axios.get('http://127.0.0.1:8000/api/teachers')
                .then(response => {
                    const results = response.data.results
                    this.teachers = results
                    // console.log(this.teachers)
                })
                .catch(error => {
                    console.log(error)
                })
            }
        },
        mounted(){
            this.fetchTeachers()
        }
    }

</script>

<template>

    <div class="row justify-content-around">
        <TeacherCard v-for="teacher in teachers" :teacher="teacher" :specializations="teacher.specializations" :key="teacher.id"></TeacherCard>
    </div>

</template>

<style lang="scss">
@use '../style/partials/variables.scss' as *;

</style>