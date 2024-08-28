<script setup lang="ts">
import { ref } from 'vue';
import { projects } from '@/assets/data/projectData';
import { tools } from '@/assets/data/tools';

type ToolKey = keyof typeof tools;

const showGallery = ref(false);
const currentGallery = ref<string[]>([]);
const currentIndex = ref(0);

function openGallery(images: string[]) {
  currentGallery.value = images;
  currentIndex.value = 0;
  showGallery.value = true;
}

function closeGallery() {
  showGallery.value = false;
}

function nextImage() {
  if (currentGallery.value.length === 0) return;
  currentIndex.value = (currentIndex.value + 1) % currentGallery.value.length;
}

function prevImage() {
  if (currentGallery.value.length === 0) return;
  currentIndex.value = (currentIndex.value - 1 + currentGallery.value.length) % currentGallery.value.length;
}

function selectImage(image: string) {
  currentIndex.value = currentGallery.value.indexOf(image);
}

useHead({
  title: 'Bryson Frost | Projects',
});
</script>

<template>
  <div class="container">
    <h1 class="mt-5 text-center">My Projects</h1>
    <div class="divider"></div>
    <div class="text-center mb-3">
      <p>The code for this website is also public on GitHub. You can view it <a
        href="https://github.com/bryson-frost/portfolio" target="_blank">here.</a></p>
    </div>
    <div id="project-list" class="row">
      <div v-for="project in projects" :key="project.id" class="col-12 col-md-6 col-xl-4 mb-4 mx-auto mx-lg-0">
        <div class="card p-3 h-100">
          <div class="card-head d-flex">
            <div class="col-3">
              <img class="img-fluid project-head-img" :src="project.headimage" />
            </div>
            <div class="flex-fill ms-3">
              <h5 class="me-3 mb-0">{{ project.name }}</h5>
              <p class="text-nowrap m-0">
                <a :href="project.link" target="_blank" class="card-link">{{ project.linkshort }}
                  <Icon name="ph:link-simple-bold" />
                </a>
              </p>
              <p class="card-time"><small>1 Year Ago</small></p>
            </div>
            <div class="col-3">
              <div class="tools-box row mx-auto">
                <div v-for="tool in project.toolList" :key="tool" class="col-4 tool">
                  <Icon :name="tools[tool as ToolKey]" class="tool-icon" v-if="tool != 'Stripe'"></Icon>
                  <Icon :name="tools[tool as ToolKey]" class="tool-icon" v-else style="color: #635BFF;"></Icon>
                  <div class="tool-name text-center">{{ tool }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-main mt-auto">
            <p>{{ project.description }}</p>
          </div>
          <div class="row d-flex justify-content-center mt-auto">
            <div class="col-4">
              <button @click="openGallery(project.images)"
                class="btn btn-main btn-card text-center d-flex align-items-center justify-content-center text-nowrap w-100">
                <Icon name="ph:images-light" class="icon-size"></Icon>
                <span class="ms-1">Gallery</span>
            </button>
            </div>
            <div class="col-4 mb-2">
              <a class="btn btn-main btn-card text-center d-flex align-items-center justify-content-center text-nowrap"
                :href="project.link" target="_blank">
                <Icon name="ph:link-simple" class="icon-size"></Icon>
                <span class="ms-1">Site Link</span>
              </a>
            </div>
            <div class="col-4">
              <a v-if="project.github == 'None'"
                class="btn btn-main btn-card text-center d-flex align-items-center justify-content-center text-nowrap disabled">
                <Icon name="uil:github" class="icon-size"></Icon>
                <span class="ms-1">Private</span>
              </a>
              <a v-else :href="project.github" target="_blank"
                class="btn btn-main btn-card text-center d-flex align-items-center justify-content-center text-nowrap">
                <Icon name="uil:github" class="icon-size"></Icon>
                <span class="ms-1">Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal for gallery -->
    <div v-if="showGallery" class="gallery-modal" @click="closeGallery">
      <div class="gallery-content" @click.stop>
        <button class="close-btn" @click="closeGallery">&times;</button>
        <div class="gallery-main-image">
          <img :src="currentGallery[currentIndex]" class="gallery-image row" />
          <button class="nav-btn nav-left" @click="prevImage">&#10094;</button>
          <button class="nav-btn nav-right" @click="nextImage">&#10095;</button>
        </div>
        <div class="mt-3 gallery-thumbnails">
          <div v-for="image in currentGallery" class="d-inline-block">
            <button @click="selectImage(image)" >
            <img :src="image" alt="" height="70px" width="100px">
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (min-width: 992px) {
  .gallery-content {
    width: 70%;
    height: 65%;
  }
}

@media only screen and (max-width: 992px) {}

.gallery-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  margin-top: 25px;
}

.gallery-main-image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 30px;
}

.gallery-content {
  background: rgb(241, 247, 255);
  padding: 0 25px 25px 25px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  width: 90%;
  height: fit-content;
  margin-top: 20px;
  max-width: 800px;
}

.card-link {
  font-size: .7rem;
}

.gallery-thumbnails {
  overflow: auto;
  height: 80px;
  white-space: nowrap;
}

.gallery-thumbnails button {
  border: none;
  background: none;
}

.gallery-thumbnails img {
  margin-right: 20px;
}

.gallery-image {
  width: 100%;
  max-width: 800px;
  max-height: 450px;
}

.close-btn {
  position: absolute;
  top: -5px;
  right: 5px;
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-btn {
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
  height: 100%;
}

.nav-left {
  left: 0;
}

.nav-right {
  right: 0;
}
</style>