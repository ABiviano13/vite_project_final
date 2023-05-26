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
        <img :src="teacher.picture" class="card-img-top card_image" :alt="teacher.user.name">
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
                        Specializzazione:
                    </span>
                    {{ teacher.specializations.name}}
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
}

.card-button{
    position: relative;
    left: 50%;
    bottom: 30%;
    transform: translate(-50%);
}


.card_image{
    width: 100%;
    padding: -24px;
}


</style>