<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-ms-6">
        <label for="category">FILTER BY </label>
        <select id="category" v-model="selected">
          <option :selected="true">All</option>
          <option v-for="option in options" :key="option.id">{{
            option
          }}</option>
        </select>
      </div>
      <div class="col-lg-6 col-md-6 col-ms-6 search-right">
        <b>Projects matched({{ filteredProjects.length }})</b>

        <div id="search-result"></div>
      </div>
    </div>
    <div class="flex-row flex-nowrap projects" id="projects">
      <div
        class="col-lg-3 col-md-4 col-sm-6 col-12"
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
            <b class="card-title">{{ project.title }}</b>
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
      selected: "All",
      projects: projects.reverse(),
      filteredProjects: projects,
    };
  },
  computed: {
    options: function() {
      const categories = [];
      this.projects.forEach((project) => {
        project["tags"].forEach((tag) => {
          if (!categories.includes(tag)) {
            categories.push(tag);
          }
        });
      });
      categories.sort();
      return categories;
    },
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
        this.filteredProjects = this.projects.filter((project) => {
          if (this.selected === "All") {
            return true;
          } else {
            return project["tags"].includes(this.selected);
          }
        });
        return;
      }
    },
  },
};
</script>

<style scoped>
label {
  font-family: Open Sans, sans-serif;
}

.search-right {
  text-align: left;
}

#search-result {
  margin: 1em 0;
}

.projects {
  width: 90%;
  border: solid 5px #000;
  margin: auto;
}

.flex-row {
  display: flex;
  -webkit-box-orient: horizontal !important;
  -webkit-box-direction: normal !important;
  -webkit-flex-direction: row !important;
  -ms-flex-direction: row !important;
  flex-direction: row !important;
  overflow-x: scroll;
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

@media only screen and (max-width: 400px) {
  .search-right {
    text-align: center;
  }
}
</style>
