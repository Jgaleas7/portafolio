
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
          <p>I’m a full-stack developer based in Victoria, Canada. I have a passion for building beautiful and functional websites. I’m always looking for new challenges and opportunities to learn and grow.</p>
        </div>
      </section>
      <section id="projects">
        <div class="content">
          <h2>Recent Projects</h2>
          </div>
      </section>
      <section id="contact">
        <div class="content">
          <h2>Get In Touch</h2>
        </div>
      </section>
    </v-main>
  </v-app>
</template>

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
</style>
