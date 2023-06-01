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
                <div class="row justify-content-between">
                    <div class="col col-8">
                        <div class="teacher_name">
                            <h1>
                                {{ teacher.user.name }}
                            </h1>
                            <span class="badge">{{teacher.user.address}}</span>

                        </div>

                        <div class="description mt-3">

                            <div class="performace_teacher">
                                <h3 class="fw-bold">
                                    Performace
                                </h3>
                                <p v-if="teacher.performace">

                                    <div v-html="teacher.performance"></div>

                                </p>
                                <p v-else class="text-center gray_color_text fs-6">
                                    <span class="fw-bold"> {{ teacher.user.name }} </span> non ha postato ancora le sue performace.
                                </p>
                            </div>

                            <div class="specializations_teacher">
                                <h3 class="fw-bold">
                                    Specializzazioni
                                </h3>
                                <ul>
                                    <li v-for="specialization in teacher.specializations" class="text-justify">
                                        <p class="fw-bold gray_color_text mt-3">
                                            <h4>
                                                {{ specialization.name }}
                                            </h4>
                                            <span class="badge">{{specialization.expertise}}</span>
                                        </p>
                                        {{ specialization.description }}
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                    <div class="col col-3">
                        <img v-if="teacher.id <= 16" :src="teacher.picture" class="image_teacher" :alt="teacher.user.name">
                        <img v-else :src="teacher.picture_path" :alt="teacher.user.name" class="image_teacher">

                        <div class="info_teacher mt-2">
                            <h3>
                                Informazioni
                            </h3>
                            <p>
                                Email: {{ teacher.user.email }}; <br>
                                Telefono: {{ teacher.phone }}; <br>
                                indirizzo: {{ teacher.user.address }}.
                            </p>
                            <div class="btn-group">
                                <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                    Curriculum Vitae
                                </button>
                                <ul class="dropdown-menu dropdown-menu-lg-end">
                                    <img :src="teacher.cv" :alt="teacher.user.name">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h3>
                            Per prenotare, o annullare una prenotazione già effettuata, compila il seguente form:
                        </h3>
                        <form action="" class="d-flex flex-column gap-2">
                            <div class="d-flex justify-content-around">
                                <input type="text" placeholder="Il tuo nome" class="input_style" v-model="ui_name">
                                <input type="email" placeholder="La tua email" class="input_style" v-model="ui_email">

                                <select name="" id="" class="input_style">
                                    <option value=""> La tua richiesta </option>
                                    <option value="prenotazione">Richiesta di prenotazione</option>
                                    <option value="annullamento">Richiesta di annullamento</option>
                                    <option value="annullamento">Richiesta di informazioni</option>
                                </select>
                            </div>
                            <textarea name="" id="" cols="30" rows="10" class="input_style p-0" v-model="message">
                                Scrivi il tuo messaggio
                            </textarea>
                            <button type="submit" class="input_style">Invia il messaggio</button>
                        </form>
                    </div>
                </div>
            </div>
        </template>
        <div v-else>
            ...loading
        </div>
    </Default>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
.container{

    .text-justify{
        text-align: justify;
    }
    .gray_color_text{
        color: $light-gray;
    }

    li{
        list-style: circle;
    }

    .row{
        padding: 20px;
        width: 100%;

        .col{

            .badge{
                height: min-content;
                background-color: $light_green;
                color: $white_gold;
            }

            .teacher_name{
                border-bottom: 4px solid $white_gold;
                display: flex;
                align-items: center;
                gap: 10px;
            }
        }

        .col-3{
            padding: 0;

            .image_teacher{
                border-radius: 20px;
            }

            .btn-group{
                width: 100%;
                background-color: $light_gray !important;

                .btn{
                    --bs-btn-color: none!important;
                }

            }
        }

        .col-12{
            .input_style{
                margin: 15px;
                padding: 5px;
                border: 1px solid $light_green;
                border-radius: 20px;
            }

            button.input_style{
                width: max-content;
                padding: 10px;
            }
        }
    }

}


</style>