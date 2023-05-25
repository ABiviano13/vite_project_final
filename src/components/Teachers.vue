<script>
    import axios from 'axios'
    import TeacherCard from './TeacherCard.vue'

    export default {
        components: {
            TeacherCard,
        },
        data(){

            return {
                teachers: []
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
    <div class="container">
        <div class="container">
            <div class="row justify-content-around">
                <TeacherCard v-for="teacher in teachers" :teacher="teacher" :key="teacher.id">

                </TeacherCard>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>