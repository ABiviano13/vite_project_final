<script>
import Default from "../layouts/Default.vue";
import axios from "axios";

export default {
  components: {
    Default,
  },
  data() {
    return {
      teachers: [],
      specializations: [],
      Images: [
        "public/Archivio/01.jpg",
        "public/Archivio/02.jpeg",
        "public/Archivio/03.jpeg",
        "public/Archivio/04.jpeg",
        "public/Archivio/05.jpeg",
        "public/Archivio/06.jpeg",
        "public/Archivio/07.jpeg",
        "public/Archivio/08.webp",
        "public/Archivio/09.jpeg",
        "public/Archivio/10.jpeg",
        "public/Archivio/11.webp",
        "public/Archivio/12.jpeg",
        "public/Archivio/13.jpeg",
        "public/Archivio/14.webp",
        "public/Archivio/15.jpeg",
      ],
    };
  },
  methods: {
    fetchTeachers() {
      axios
        .get("http://127.0.0.1:8000/api/teachers")
        .then((response) => {
          const results = response.data.results;
          this.teachers = results;

          // console.log(results);

          const allSpecializations = results.flatMap(
            (teacher) => teacher.specializations
          );
          this.specializations = allSpecializations;

          // console.log(this.specializations)
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.fetchTeachers();
  },
};
</script>

<template>
  <Default>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col" v-for="specialization in specializations">
          <div class="card">
            <img src="..." class="card-img-top" alt="..."  />
            <div class="card-body">
              <h5 class="card-title">
                {{ specialization.name }}
              </h5>
              <p class="card-text">
                {{ specialization.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Default>
</template>

<style lang="scss"></style>
