<template>
    <Swiper :modules="[SwiperAutoplay]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
        }"
    >
        <SwiperSlide v-for="slide in data" :key="slide">
            <div class="box">
                <span>{{ slide.title }}</span>
                <span>{{ slide.content }}</span>
                <span>{{ slide.image }}</span>
            </div>
        </SwiperSlide>

    </Swiper>
</template>

<style scoped>
.box {
    border-radius: 30px;
    width: 80%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    box-shadow: 0 0 1em grey;
}
</style>

<script setup>
const data = ref([
        {
            title: 'Site vitrine',
            content: 'a',
            image: 'test',
        },
        {
            title: 'Application Web',
            content: 'test2',
            image: 'test3',
        },
        {
            title: 'Application Mobile',
            content: 'test3',
            image: 'test3',
        },
])
</script>