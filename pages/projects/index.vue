<script setup lang="ts">
import { projects } from '@/assets/data/projectData';
import { tools } from '@/assets/data/tools';

type ToolKey = keyof typeof tools;

useHead({
  title: 'Bryson Frost | Projects',
});
</script>

<template>
  <div class="container">
    <h1 class="mt-5 text-center">My Projects</h1>
    <div class="divider"></div>
    <div class="text-center mb-3">
      The code for this website is also public on GitHub. You can view it <a href="https://github.com/bryson-frost/portfolio" target="_blank">here.</a>
    </div>
    <div id="project-list" class="row">
      <div v-for="project in projects" :key="project._id" class="col-12 col-md-6 col-xl-4 mb-4 mx-auto mx-lg-0">
        <div class="card p-3 h-100">
          <div class="card-head d-flex">
            <div class="col-3">
              <img class="img-fluid project-head-img" :src="project.headimage" />
            </div>
            <div class="flex-fill ms-3">
              <h5 class="me-3">{{ project.name }}</h5>
              <p class="text-nowrap m-0">
                <a :href="project.link" target="_blank" class="card-link">{{ project.linkshort }}
                  <Icon name="ph:link-simple-bold" />
                </a>
              </p>
              <p class="card-time"><small>1 Year Ago</small></p>
            </div>
            <div class="col-3">
              <div class="tools-box row">
                <div v-for="tool in project.toolList" :key="tool" class="col-4 tool">
                  <Icon :name="tools[tool as ToolKey]" class="tool-icon"></Icon>
                  <div class="tool-name">{{ tool }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-main mt-3">
            <p>{{ project.description }}</p>
          </div>
          <div class="row d-flex justify-content-center mt-auto">
            <div class="col-4">
              <a class="btn btn-main btn-card text-center d-flex align-items-center justify-content-center text-nowrap">
                <Icon name="ph:images-light" class="icon-size"></Icon>
                <span class="ms-1">Gallery</span>
              </a>
            </div>
            <div class="col-4 mb-2">
              <a class="btn btn-main btn-card text-center d-flex align-items-center justify-content-center text-nowrap" :href="project.link" target="_blank">
                <Icon name="ph:link-simple" class="icon-size"></Icon>
                <span class="ms-1">Site Link</span>
              </a>
            </div>
            <div class="col-4">
              <a v-if="project.github == 'None'" class="btn btn-main btn-card text-center d-flex align-items-center justify-content-center text-nowrap disabled">
                <Icon name="uil:github" class="icon-size"></Icon>
                <span class="ms-1">Private</span>
              </a>
              <a v-else class="btn btn-main btn-card text-center d-flex align-items-center justify-content-center text-nowrap">
                <Icon name="uil:github" class="icon-size"></Icon>
                <span class="ms-1">Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>