<template>
  <div id="app">
      <greeting />
      <about />
      <h1>Projects</h1>
      <ul class="project"  v-for="project in information" :key="project.id" >
      <div>
        <a v-bind:href="project.projectLink">
          <img class="image img-responsive" v-bind:src="'images/'+project.image+'.png'" v-bind:alt="project.title +' image'">
        </a>
        <h3>{{project.title}}</h3>
        <p>
          <a id="file-btn" v-bind:href="project.githubLink">GitHub file</a>
          <span v-for="icon in project.icons" :key="icon.id">
            <i v-bind:class="icon+' fa-2x'"></i>
          </span>
        </p>
      </div>
      </ul>
  </div>
</template>

<script>
import Greeting from "./Greeting";
import About from "./About";
import projects from "../projects.json";
export default {
  name: "App",
  components: {
    about: About,
    greeting: Greeting
  },
  data: function() {
    return {
      information: ""
    };
  },
  mounted() {
    return (this.information = projects);
  },
  methods: {
    show() {
      this.$modal.show("hello-world");
    },
    hide() {
      this.$modal.hide("hello-world");
    }
  }
};
</script>

<style>
#app {
  text-align: center;
}

h1 {
  color: #f9812a;
  text-align: left;
}

.project {
  width: 30%;
  height: 260px;
  float: left;
}

.projects {
  width: 100%;
  border: #006 solid 1px;
  background: #006;
}

h3 {
  background-color: #e3e3e3;
}

.image {
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-width: 15.42857rem;
  max-height: 10rem;
  max-width: 100%;
}

a {
  word-wrap: break-word;
}

i {
  margin-left: 3px;
  color: #f9812a;
}

@media only screen and (max-width: 500px) {
  .project {
    width: 100%;
    float: left;
    padding-left: 0;
  }
}

@media only screen and (min-width: 501px) and (max-width: 900px) {
  .project {
    width: 100%;
    float: left;
    padding-left: 0;
  }
}
</style>
