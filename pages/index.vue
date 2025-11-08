
<template>
  <v-app dark>
    <v-main>
      <section id="welcome">
        <div class="content">
          <h1>Juan Galeas</h1>
          <h2>Full-Stack Developer</h2>
          <p>The best web developer in Victoria BC.</p>
        </div>
      </section>
      <section id="about">
        <div class="content">
          <h2>About Me</h2>
          <p>Hello, my name is Juan Galeas, I'm a Computer Science graduate with a passion for Software Development. I have over 8 years of experience building applications using various programming languages.</p>
        </div>
      </section>
      <section id="projects">
        <div class="content">
          <h2>Recent Projects</h2>
          <div class="projects-container">
            <div class="project" v-for="project in projects" :key="project.name">
              <img :src="project.image" :alt="project.name">
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div class="content">
          <h2>Get In Touch</h2>
          <div class="contact-links">
            <a href="https://www.instagram.com/jgaleas7" target="_blank" class="contact-link">Instagram</a>
            <a href="https://github.com/Jgaleas7" target="_blank" class="contact-link">GitHub</a>
            <p>Email: ...</p>
          </div>
        </div>
      </section>
    </v-main>
  </v-app>
</template>

<script>
import project11Image from '@/assets/project11.jpg'
import project22Image from '@/assets/project22.jpg'
import project33Image from '@/assets/project33.jpg'
import project44Image from '@/assets/project44.jpg'

export default {
  layout: 'futuristic',
  data() {
    return {
      projects: [
        {
          name: 'Project 1',
          description: 'A brief description of Project 1.',
          image: project11Image
        },
        {
          name: 'Project 2',
          description: 'A brief description of Project 2.',
          image: project22Image
        },
        {
          name: 'Project 3',
          description: 'A brief description of Project 3.',
          image: project33Image
        },
        {
          name: 'Project 4',
          description: 'A brief description of Project 4.',
          image: project44Image
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

:root {
  --primary-color: #00ffcc;
  --secondary-color: #ff00ff;
  --background-color: #000000;
  --text-color: #ffffff;
}

#app {
  font-family: 'Orbitron', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
}

section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.content {
  text-align: center;
  z-index: 1;
}

h1, h2 {
  color: var(--primary-color);
  text-shadow: 0 0 10px var(--primary-color);
}

p {
  color: var(--text-color);
}

.projects-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.project {
  margin: 20px;
  text-align: center;
}

.project img {
  width: 100%;
  max-width: 300px;
  height: auto;
  border: 2px solid var(--primary-color);
  border-radius: 10px;
}

.contact-links {
  margin-top: 20px;
}

.contact-link {
  color: var(--primary-color);
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.2em;
  transition: all 0.3s ease;
}

.contact-link:hover {
  text-shadow: 0 0 15px var(--primary-color);
}
</style>
