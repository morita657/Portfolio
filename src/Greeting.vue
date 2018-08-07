<template>
<div class="greeting">
  <ul class="links">
    <li><a href="https://github.com/morita657"><i class="fab fa-github fa-2x"></i></a></li>
    <li><a href="https://morita657.hatenablog.com/"><i class="blogicon-hatenablog fa-2x"></i></a></li>
    <li><a href="https://www.linkedin.com/in/takahiromorita"><i class="fab fa-linkedin-in fa-2x"></i></a></li>
    <li><a href="mailto:morita657@gmail.com"><i class="far fa-envelope fa-2x"></i></a></li>
  </ul>
    <h1 id="yo">Hey, I'm Taka!</h1>
    <span id="title">Software Engineer</span>
</div>
</template>

<script>
</script>

<style scoped>
.greeting {
  height: 570px;
}
ul.links {
  position: absolute;
  top: 2%;
  right: 5%;
}
li {
  display: inline-block;
  list-style-type: none;
  vertical-align: middle;
}
a {
  text-decoration: none;
}
h1 {
  color: #f9812a;
}
#yo {
  text-align: center;
  font-size: 5rem;
}
#title {
  color: #f9812a;
  font-size: 3rem;
}
</style>
