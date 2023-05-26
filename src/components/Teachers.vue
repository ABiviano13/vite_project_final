<script>
    import axios from 'axios'
    import TeacherCard from './TeacherCard.vue'
    import store from '../store'

    export default {
        components: {
            TeacherCard,
        },
        data(){
            return {
                teachers: [],
                store,
            }
        },
        methods: {
            fetchTeachers(){

                axios.get('http://127.0.0.1:8000/api/teachers', {
                    params: {
                        api_key:'9feb0690aacb6d5cd46a246f69bb9918',
                        query: this.valueInput
                    }
                })
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
                <TeacherCard v-for="teacher in teachers" :teacher="teacher" :key="teacher.id"></TeacherCard>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
@use '../style/partials/variables.scss' as *;

</style>