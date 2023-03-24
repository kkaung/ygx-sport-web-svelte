<script lang="ts">
    import { register } from 'swiper/element/bundle';
    import Image from '../shared/Image.svelte';

    register();

    export let className = '';
</script>

<div class={`${className}`}>
    <swiper-container
        autoplay-delay="2500"
        autoplay-disable-on-interaction="false"
    >
        <swiper-slide>
            <Image src="https://testnet.goal3.xyz/slides/slide1.svg" alt="" />
        </swiper-slide>
        <swiper-slide>
            <Image src="https://testnet.goal3.xyz/slides/slide2.svg" alt="" />
        </swiper-slide>
    </swiper-container>
</div>
