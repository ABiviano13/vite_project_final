<script>

export default {

}

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav_text">
        <div class="container d-flex">
            <a class="navbar-brand logo" href="#">
                <!-- <i class="fa-brands fa-bitcoin fa-spin fa-spin-reverse" style="color: white;"></i> -->
                <img src="/public/img/logo.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Corsi</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Professori</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Chi siamo</a>
                </li>
              </ul>
            </div>
        </div>
    </nav>

</template>

<style lang="scss">
@use '../style/partials/variables.scss' as *;

.nav_text *{
  color: rgb(246, 186, 186) !important;
}

.navbar{
  background-color: $light_green;
  font-weight: 400;
  margin-bottom: 1px;
  margin-top: 1px;

  .container{
    .logo{
      margin-right: auto;
    }
  }
  .logo{
    width: 150px;
  }
}


</style>