<template>
  <form v-on:submit.prevent="submit">

    <h2 class="text-primary">Paste your code</h2>
    <small class="text-muted">Then share it with someone</small>

    <br>
    <br>
    <div class="form-group">
      <label>Title</label>
      <input placeholder="Title of your code paste" v-model="title" type="text" class="form-control" minlength="3" required>
    </div>

    <div class="form-group">
      <label>Language</label>
      <select v-model="lang" class="custom-select">
        <option selected>Open this select menu</option>
        <option value="js">JavaScript</option>
        <option value="cpp">C++</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="cs">C#</option>
        <option value="cs">C#</option>
        <option value="clike">C-like</option>
        <option value="php">PHP</option>
        <option value="perl">PHP</option>
        <option value="go">Go</option>
        <option value="typescript">TypeScript</option>
        <option value="swift">Swift</option>
        <option value="sql">SQL</option>
        <option value="dart">Dart</option>
        <option value="json">JSON</option>
        <option value="java">Java/option>

      </select>
    </div>

    <div class="form-group">
      <label>Code</label>
      <textarea minlength="15" v-model="code" type="text" class="form-control" required>
        function greet() { return 'Hello'; }
      </textarea>
    </div>

    <button v-show="!loading" type="submit" class="btn btn-primary">
      <i class="fas fa-plus-circle"></i> Add</button>
    <LoadingComponent :loading="loading"></LoadingComponent>
  </form>
</template>

<script>
import ref from "@/api/pastebuddy";
import { Container } from "@/api/shipla-api";

export default {
  methods: {
    submit() {
      this.loading = true;

      Container.container(ref)
        .addItem({
          lang: this.lang,
          title: this.title,
          code: this.code
        })
        .then(resp => {
          // added
          alert("Added!");
          this.loading = false;
        });

      this.lang = null;
      this.title = null;
      this.code = null;
    }
  },
  data: () => {
    return {
      lang: "js",
      title: "",
      code: "",
      loading: false
    };
  }
};
</script>

<style>
</style>
