<script>
    import Default from '../layouts/Default.vue'
    import axios from 'axios'
    import store from '../store'


    export default {
        components:{
            Default,
        },
        data() {
            return {
                teacher: null,
                loading: true,
                reviews: [],
                store,
                ui_name: '',
                ui_email: '',
                ui_phone: '',
                title: '',
                message: '',
                success: false,
                errors: null,

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
                        this.reviews = teacher.review

                        this.store.reviewsTeacherLength = this.reviews.length
                        
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
            },
            validate() {

                return this.nameIsValid && this.emailIsValid && this.messageIsValid && this.phoneIsValid && this.titleIsValid

            },
            submitForm() {
                const data = {
                    name: this.ui_name,
                    email: this.ui_email,
                    phone: this.ui_phone,
                    title: this.title,
                    message: this.message
                }

                if(this.validate() === false) {
                    alert('Compila il form')
                    return 
                }
        
                axios.post('/api/messages', data)
                .then(response => {
                    console.log('Messaggio salvato con successo');

                    const { success, errors } = response.data

                    this.success = success

                    if(success) {
                        this.ui_name = ''
                        this.ui_email = ''
                        this.ui_phone = ''
                        this.title = ''
                        this.message = ''
                        this.errors = null
                    } else {
                        this.errors = errors
                    }
                })
                .catch(error => {
                    console.error('Errore durante il salvataggio del messaggio', error);
                });
            }
        },
        computed: {
            lengthReviews() {
                return this.store.reviewsTeacherLength = this.reviews.length
            },
            nameIsValid() {
                return this.ui_name.trim() !== '' && this.ui_name.trim().length <= 100 
            },
            emailIsValid() {
                return this.ui_email.trim() !== '' && this.ui_email.trim().length <= 100 
            },
            phoneIsValid() {
                return this.ui_phone.trim() !== '' && this.ui_phone.trim().length <= 50 
            },
            titleIsValid() {
                return this.title.trim() !== '' && this.title.trim().length <= 255 
            },
            messageIsValid() {
                return this.message.trim() !== ''
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

                            <div class="reviews_teacher">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <h3 class="fw-bold">
                                                    Recensioni
                                                </h3>
                                            </button>
                                        </h2>
                                        <ul id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <li class="accordion-body" v-for="review in teacher.review">
                                                {{ review.text }}                                    
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <form action="">
                                    <textarea name="review" id="review" cols="20" rows="5" placeholder="Scrivi la tua recensione"></textarea>
                                </form>

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
                        <div v-if="success" >
                            Messaggio inviato con successo!
                        </div>
                        <form @submit.prevent="submitForm" class="d-flex flex-column gap-2">
                            <div class="d-flex justify-content-around">
                                <input type="text" placeholder="Il tuo nome" class="input_style" v-model="ui_name">
                                <input type="email" placeholder="La tua email" class="input_style" v-model="ui_email">
                                <input type="text" placeholder="Il tuo telefono" class="input_style" v-model="ui_phone">

                                <select name="" id="" class="input_style" v-model="title">
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

    .accordion-button:not(.collapsed){
        background-color: $white !important;
        color: currentColor !important;
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