<script setup>
useHead({
  title: 'Bryson Frost | Software Engineer'
})
</script>

<template>
  <div>
    <div class="home-container">
      <div class="container text-center">
        <h1 class="home-header poppins-bold">Hello, I am Bryson Frost</h1>
        <p class="my-2 pt-3">
          A passionate, result-oriented web developer that builds and maintains web applications
        </p>
        <div class="mt-5 d-flex justify-content-center align-content-center">
          <NuxtLink to="/projects" class="btn-main btn-main-index poppins-semibold">Projects</NuxtLink>
        </div>
        <button onclick="document.getElementById('about-section').scrollIntoView();" id="arrow-down-button"
          class="d-block mx-auto mt-5 ">
          <Icon name="material-symbols:keyboard-arrow-down-rounded" width="3.8em" height="3.8em" id="arrow-down" />
        </button>

      </div>
    </div>
    <div id="about-section">
      <div class="container mt-5">
        <h2 class="text-center">About Me</h2>
        <div class="divider"></div>
        <div class="container text-center">
          <h6 class="mb-5">My schedule is currently open for freelance website development projects. I specialize
            in
            creating tailored
            websites for clients and am available to discuss any inquiries. Feel free to reach out via the contact form
            on
            this website if you have any questions or would like to discuss your project further.</h6>
        </div>

      </div>
      <div class="container mb-5">
        <div class="container">
          <h2 class="text-center mb-5">Technical Skills</h2>
          <Skills />
        </div>
      </div>
      <div class="container">
        <h2 class="text-center mb-3">Certifications</h2>
        <h4>Weber State University</h4>
        <ul class="mb-5">
          <li>Certificate of Proficiency in Programming Essentials - April 2023</li>
          <li>Certificate of Proficiency in Game Development - April 2024</li>
        </ul>
      </div>
    </div>
  </div>

</template>