<template>
    <div class="UIContainer px-4 mx-auto">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.UIContainer {
    @media (min-width: 768px){
        width: 750px;
    }
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px){
        width: 1170px;
    }
}
</style>