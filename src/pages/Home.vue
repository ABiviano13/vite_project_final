<script>
import Default from '../layouts/Default.vue';

export default {
    components: {

        Default
    },
    data() {
        return {
            images_spec: [
                '/public//Archivio/02.jpeg',
                '/public//Archivio/05.jpeg',
                '/public//Archivio/06.jpeg',
                '/public//Archivio/11.webp',
                '/public//Archivio/12.jpeg',
                '/public//Archivio/13.jpeg',
                '/public//Archivio/14.webp',
                '/public//Archivio/15.jpeg'
            ],
            currentIndex: 0,
            autoplay: null,
        }
    },
    methods: {
        nextSlide() {
			// console.log('next')
			const lastIndex = this.images_spec.length - 1
			// incrementiamo il currentIndex
			if (this.currentIndex < lastIndex) {
				this.currentIndex++
			} else {
				this.currentIndex = 0
			}
		},
		prevSlide() {
			console.log('prev')
			const lastIndex = this.images_spec.length - 1
			// descrementiamo il currentIndex
			if (this.currentIndex > 0) {
				this.currentIndex--
			} else {
				this.currentIndex = lastIndex
			}
		},
    },
    mounted() {
		// console.log(this.images_spec)

		this.autoplay = setInterval(this.nextSlide, 3000)
	},
}
</script>

<template>

    <Default>
        
        <div class="container">

            <div class="hero">
                <div class="carosell col-8">
                    <div
						v-for="(image,index) in images_spec"
						class="slide"
						:class="index === currentIndex ? 'active' : ''"
					>
						<img :src="image" alt="" />
					</div>
                </div>
                <div class="col-3">
                    <button class="select_filter">
                        <router-link :to="{ name: 'courses' }">
                            Vedi la lista completa dei nostri corsi
                        </router-link>

                    </button>

                    <button class="select_filter">

                        <router-link :to="{ name: 'teachers.index' }">
                            Vedi la lista completa dei nostri professionisti
                        </router-link>

                    </button>

                </div>
            </div>
            
        </div>

    </Default>

</template>

<style lang="scss">
@use '../style/partials/variables.scss' as *;

.hero{
    display: flex;

    .carosell {
	    position: relative;

        img {
	        width: 80%;
	        aspect-ratio: 16/9;
	        object-fit: cover;
	        object-position: center;
            border-radius: 20px;
        }

        .slide.active {
	        display: block;
        }

        .slide {
	        display: none;
	        position: relative;
        }  

        .select_filter{
            margin: 15px;
            padding: 5px;
            border: 1px solid $light_green;
            border-radius: 20px;

        }
    }
}
</style>