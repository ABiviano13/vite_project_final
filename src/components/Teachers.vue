<template>
    <div>
      <div class="filter">
        <h5>
          Cerca attraverso i filtri
        </h5>
        <select v-model="selectedSpecialization" class="select_specialization" >
          <option value="">Tutte le specializzazioni</option>
          <option v-for="specialization in specializations" :value="specialization" :key="specialization">
            {{ specialization }}
          </option>
        </select>

        <input type="text" class="select_specialization" v-model="search" placeholder="Cerca teacher">

      </div>
  
      <div class="row justify-content-around">
        <TeacherCard v-for="teacher in filteredTeachers" :teacher="teacher" :specializations="teacher.specializations" :key="teacher.id" :class="{ 'hidden': isHidden(teacher)}"></TeacherCard>
      </div>
    </div>
</template>
  
<script>
  import axios from 'axios'
  import TeacherCard from './TeacherCard.vue'
  
  export default {
    components: {
      TeacherCard,
    },
    data() {
      return {
        teachers: [],
        specializations: [],
        selectedSpecialization: '',
        search: ''
      }
    },
    methods: {
      fetchTeachers() {
        axios.get('http://127.0.0.1:8000/api/teachers')
          .then(response => {
            const results = response.data.results;
            this.teachers = results;
  
            const allSpecializations = results.flatMap(teacher => teacher.specializations);
            this.specializations = [...new Set(allSpecializations.map(spec => spec.name))];
          })
          .catch(error => {
            console.log(error);
          })
      },
      isHidden(teacher) {

        const name = teacher.user.name.toLowerCase()
			  const search = this.search.trim().toLowerCase()

			  const result = !name.includes(search)

			  return result

        // if(this.teachers){

          ////

        // } else {
        //   const message = 'Spiacenti, non abbiamo alcun professionista con questo nominativo'

        //   return message
        // }
		  },
    },
    mounted() {
      this.fetchTeachers();
    },
    computed: {
      filteredTeachers() {
        if (this.selectedSpecialization) {
          return this.teachers.filter(teacher => {
            const specializations = teacher.specializations.map(spec => spec.name);
            return specializations.includes(this.selectedSpecialization);
          });
        } else {
          return this.teachers;
        }
      },
    },
  
  }
</script>
  
<style lang="scss">
@use '../style/partials/variables.scss' as *;

.select_specialization{
  margin: 15px;
  padding: 5px;
  border: 1px solid $light_green;
  border-radius: 20px;
}

.hidden {
	display: none;
}
</style>
  