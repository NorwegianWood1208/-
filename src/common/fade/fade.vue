<template>
    <transition >
        <slot></slot>
    </transition>
</template>
<script>
export default {
  name: "Fage"
};
</script>
<style lang="stylus" scoped>
.v-enter, .v-leave-to {
    opacity: 0;
}

.v-enter-active, .v-leave-active {
    transition: opacity 0.5s;
}
</style>