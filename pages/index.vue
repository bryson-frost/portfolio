<script setup>
import { skills } from '@/assets/data/projectData';
import { tools } from '@/assets/data/tools'

useHead({
  title: 'Bryson Frost | Software Engineer'
  
});
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
        <div class="mt-3">
          <img src="/img/profilepicture-zoom.jpg" class="about-image mx-auto d-block mb-4" />
          <div class="d-block mx-auto col-10 col-lg-8">
            <div class="text-center mb-5">
              <p>I am a software engineer with a passion for full-stack development. I graduated from <NuxtLink
                  to="https://www.weber.edu/" target="_blank">Weber State
                  University</NuxtLink> with a Bachelor's Degree in <NuxtLink
                  to="https://catalog.weber.edu/preview_program.php?catoid=23&poid=11500&returnto=8638" target="_blank">
                  Computer Science</NuxtLink> and a certificate in <span class="poppins-medium">Game Development.</span>
                I aspire
                to create engaging and unforgettable experiences for users.
                I am actively seeking job opportunities that align with my skills and experience. If you have a position
                that matches my qualifications, please fill out the form on my <NuxtLink to="/contact">contact</NuxtLink> page so that we can get in touch.
                You can also get in contact with me via <NuxtLink to="https://www.linkedin.com/in/brysonfrost/"
                  target="_blank">LinkedIn.</NuxtLink>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container mb-5">
        <div class="container">
          <h2 class="text-center mb-5">Technical Skills</h2>
          <div class="container">
            <div class="row mb-4">
              <div v-for="skill in skills"
                class="col-4 col-sm-3 d-flex flex-column justify-content-center align-items-center">
                <div class="skill-icon">
                  <Icon :name="tools[skill]" />
                </div>
                <span class="mb-4">{{ skill }}</span>
              </div>
            </div>
          </div>
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