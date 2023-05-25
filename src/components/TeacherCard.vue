<script>
    export default {
        props: {
            teacher: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<template>
    <div class="container">
        <router-link :to="{name: 'teachers.show', params: { id: teacher.id } }">
            <div class="teacher-card">
                <h2>{{ teacher.user.name }}</h2>
                
            </div>
        </router-link>
    </div>

</template>

<style scoped>

</style>