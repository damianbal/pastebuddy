<template>
    <div>
        <i v-show="loading" class="fas fa-spin fa-spinner loader"></i>
    </div>
</template>

<script>
export default {
  props: ["loading"]
};
</script>

<style>
.loader {
  font-size: 30px;
}
</style>
