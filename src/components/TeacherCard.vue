<script>
    export default {
        props: {
            teacher: {
                type: Object,
                required: true,
            },
            specializations: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<template>
    
    <div class="card">
        <img v-if="teacher.id <= 16" :src="teacher.picture" class="card-img-top card_image" :alt="teacher.user.name">
        <img v-else :src="teacher.picture_path" :alt="teacher.user.name">
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
                <p>
                    <span class="fw-bold">
                        Specializzazioni:
                    </span>
                    <ul>
                        <li v-for="specialization in specializations" class="spec_list">
                            {{ specialization.name }}
                        </li>
                    </ul>
                </p>
                <p>
                    <span class="fw-bold">
                      Prestazioni:
                    </span>
                    <span v-html="teacher.performance"></span>
                </p>
            </div>
        </div>
        <router-link :to="{name: 'teachers.show', params: { id: teacher.id } }" class="router">
            <button type="button" class="btn btn-success card-button">Visualizza</button>
        </router-link>
    </div> 

</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
.router{
    position: relative;
}

.card{
    width: 27%;
    margin-bottom: 30px;
    padding: 0 !important;
    box-shadow: 7px 7px 3px #9f9e9e;

    .card_image{
        width: 100%;
        padding: -24px;
    }

    .card-button{
        position: relative;
        left: 50%;
        bottom: 30%;
        transform: translate(-50%);
    }

    .spec_list{
        list-style: circle;
    }
}



</style>