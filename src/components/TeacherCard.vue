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
    <div class="card">
        <img :src="teacher.picture" class="card-img-top" :alt="teacher.user.name">
        <div class="card-body">
            <h5 class="card-title">{{ teacher.user.name }}</h5>
            <div>
                <p>
                    <span class="fw-bold">
                        Email:
                    </span>
                    {{ teacher.user.email}}
                </p>
                <p>
                    <span class="fw-bold">
                        Telefono:
                    </span>
                    {{ teacher.phone}}
                </p>
                <p>
                    <span class="fw-bold">
                        Indirizzo:
                    </span>
                    {{ teacher.user.address}}
                </p>
            </div>
        </div>
        <router-link :to="{name: 'teachers.show', params: { id: teacher.id } }" class="router">
            <button type="button" class="btn btn-success">Secondary</button>
        </router-link>
    </div> 

</template>

<style lang="scss" scoped>

.router{
    width: min-content;
}

.card{
    width: 20%;
}

a{
    color: currentColor;
    text-decoration: none;
}

</style>