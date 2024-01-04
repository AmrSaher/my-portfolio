<template>
    <header
        class="
            Header fixed top-8 left-[50%] translate-x-[-50%]
            px-3 h-[60px] rounded-[2rem] flex items-center
            text-[#ffffffe5] z-50 transition-[background]
        "
        :class="{
            'border border-[#404040b5] bg-[#72727233]': showBg,
        }"
    >
        <nav class="w-full">
            <span
                class="
                    w-[100px] h-[40px] rounded-3xl
                    absolute -z-10 transition-all
                "
                :class="{
                    'bg-[#4f4f4f66]': showBg,
                }"
                :style="`left: ${sliderX}px`"
            ></span>
            <ul class="w-full flex items-center gap-3">
                <li class="w-[100px] h-[40px] flex items-center justify-center">
                    <a href="#" @click="navigate(1)">Home</a>
                </li>
                <li class="w-[100px] h-[40px] flex items-center justify-center">
                    <a href="#" @click="navigate(2)">About</a>
                </li>
                <li class="w-[100px] h-[40px] flex items-center justify-center">
                    <a href="#" @click="navigate(3)">Services</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
const sliderX = ref(12)
const showBg = ref(false)

// Highlight active links
const navigate = (n) => {
    sliderX.value = 12 + (n - 1) * 112
}

// Show header after scrolling
onMounted(() => {
    window.addEventListener('scroll', () => {
        showBg.value = window.scrollY > 6
    })
})
</script>