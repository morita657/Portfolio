<template>
  <div class="container-fluid projects">
    <select v-model="selected">
      <option v-for="option in options" :key="option.id">{{
        option.text
      }}</option>
    </select>
    <div class="flex-row flex-nowrap">
      <div
        class="col-4"
        style="width: 18rem;"
        v-for="project in filteredProjects"
        :key="project.id"
      >
        <div class="card card-block">
          <img
            class="card-img-top"
            v-bind:src="'dist/' + project.image + '.png'"
            v-bind:alt="project.title + ' image'"
            width="239"
            height="180"
          />
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a v-bind:href="project.githubLink" class="btn btn-primary"
              >GitHub</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "../projects.json";
export default {
  data: function() {
    return {
      selected: "",
      projects,
      filteredProjects: projects,
      options: [
        { id: 0, text: "React" },
        { id: 1, text: "Python" },
        { id: 2, text: "Linux" },
        { id: 3, text: "Scala" },
      ],
    };
  },
  watch: {
    selected: function(newQuestion, oldQuestion) {
      this.debouncedGetAnswer();
    },
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function() {
      if (this.selected.indexOf("?") === -1) {
        const projects = this.projects;
        this.filteredProjects = projects.filter((project) =>
          project["tags"].includes(this.selected)
        );
        return;
      }
    },
  },
};
</script>

<style>
.projects {
  overflow-x: scroll;
}

.flex-row {
  display: flex;
  -webkit-box-orient: horizontal !important;
  -webkit-box-direction: normal !important;
  -webkit-flex-direction: row !important;
  -ms-flex-direction: row !important;
  flex-direction: row !important;
}

.flex-nowrap {
  -webkit-flex-wrap: nowrap !important;
  -ms-flex-wrap: nowrap !important;
  flex-wrap: nowrap !important;
}

row > .col-4 {
  display: flex;
  flex: 0 0 25%;
  max-width: 25%;
}

.card-text {
  overflow-y: scroll;
  height: 80px;
  text-align: left;
}

img {
  image-rendering: -moz-crisp-edges;
  /* Firefox */
  image-rendering: -o-crisp-edges;
  /* Opera */
  image-rendering: -webkit-optimize-contrast;
  /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  /* IE (non-standard property) */
}
</style>
