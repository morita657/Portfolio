<template>
  <div class="container">
    <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div class="row">
        <div class="col-md-6 px-0">
          <h1 class="display-4">Takahiro Morita</h1>
        </div>
        <div class="col-md-6 px-0">
          <greeting />
        </div>
        <div class="col-md-12 px-0">
          <p class="lead my-3">
            Thank you for visiting my page!<br />
            I am a Computer Science Student at Arizona State University. <br />
            As a Computer Engineer, I have a professional experience of three
            years working for web, mobile and cloud marketing solution
            development in the Information Technology industry. Please explore
            my projects below.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import greeting from "./greeting";
export default {
  components: {
    greeting,
  },
};
</script>

<style>
h1 {
  color: #f9812a;
  text-align: left;
}

p {
  text-align: left;
}
</style>
