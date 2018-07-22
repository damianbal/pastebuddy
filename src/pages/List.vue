<template>
    <div class="row">
        <div class="col-12">
            <h3 class="text-primary">Code Pastes</h3>

            <LoadingComponent :loading="loading"></LoadingComponent>

            <div class="row text-left p-1 border-bottom" v-for="(item, idx) in items" :key="idx">
                <div class="col-sm-4">
                    <router-link :to="{ name: 'view_paste', params: { reference: item.meta.ref } }">{{ item.title }}</router-link>
                </div>
                <div class="col-sm-4">
                    {{ item.meta.created_at }}
                </div>
            </div>

            <transition name="fade">
                <div class="btn-group mt-3" v-show="!loading">
                    <router-link class="btn btn-secondary" v-if="page > 0" :to="{ name: 'view_all_pastes', params: { page: parseInt(this.page - 1) } }">Prev page</router-link>
                    <router-link class="btn btn-secondary" v-if="page <= pages-1" :to="{ name: 'view_all_pastes' , params: { page: parseInt(this.page + 1) } }">Next page</router-link>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import ref from "@/api/pastebuddy";
import { Container } from "@/api/shipla-api";

export default {
  mounted() {
    this.load();
  },
  watch: {
    $route: function(from, to) {
      this.load();
    }
  },
  methods: {
    load() {
      this.loading = true;
      Container.container(ref).getItemsForPage(this.page, items => {
        this.items = items;

        Container.container(ref).info(data => {
          this.pages = data.pages;

          this.loading = false;
        });
      });
    }
  },
  props: ["page"],
  data: () => {
    return {
      items: [],
      loading: true,
      pages: 0
    };
  }
};
</script>

<style>
</style>
