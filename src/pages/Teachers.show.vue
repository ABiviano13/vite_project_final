<script>
    import Default from '../layouts/Default.vue'
    import TeacherCard from '../components/TeacherCard.vue'
    import axios from 'axios'


    export default {
        components:{
            Default,
            TeacherCard,
        },
        data() {
            return {
                teacher: null,
                loading: true
            }
        },
        props: ['id'],
        methods: {
            fetchTeacher(id) {

                this.loading = true

                axios.get(`http://127.0.0.1:8000/api/teachers/${ id }`)
                .then( response => {
                    console.log(response)
                    const { success, teacher} = response.data
                    if(success) {
                        this.teacher = teacher
                    } else {
                        console.log(teacher)
                    }
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    this.loading = false
                })
            }
        },
        created() {
            this.fetchTeacher(this.id)
        }
    }
</script>

<template>
    <Default>
        <template v-if="loading == false ">
            <div class="container">
                <TeacherCard :teacher="teacher" class="teacher_card" />
            </div>
        </template>
        <div v-else>
            ...loading
        </div>
    </Default>
</template>

<style lang="scss" scoped>
.container{
    display: flex;

}


</style>