<template>
    <div>
        <LoadingComponent :loading="loading"></LoadingComponent>
        <transition name="fade">
            <div v-show="!loading">
                <div class="row">
                    <div class="col-12">
                        <h3 class="text-primary">{{ title }}</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 text-left text-muted">Lang:
                        <span class="badge badge-secondary">{{ lang }}</span>
                    </div>

                    <div class="col-6 text-right text-muted">Posted on: {{ date }}</div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <prism :language="lang">{{ code }}</prism>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import ref from "@/api/pastebuddy";
import { Container } from "@/api/shipla-api";

import Prism from "vue-prism-component";

export default {
  props: ["reference"],
  created() {
    this.fetch();
  },
  watch: {
    $route: function(from, to) {
      this.fetch();
    }
  },
  methods: {
    fetch() {
      this.loading = true;
      Container.container(ref).getItemByRef(this.reference, item => {
        this.title = item.title;
        this.code = item.code;
        this.lang = item.lang;
        this.date = item.meta.created_at;

        this.loading = false;
      });
    }
  },
  data: () => {
    return {
      title: "Loading...",
      date: "Loading...",
      lang: "js",
      code: "Loading...",
      loading: false
    };
  },
  components: { Prism }
};
</script>

<style>
</style>
