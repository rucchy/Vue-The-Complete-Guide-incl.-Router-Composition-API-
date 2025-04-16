<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button mode="flat" @click="deleteResource(id)"
          >Delete</base-button
        >
      </header>

      <p>{{ description }}</p>
      <nav>
        <a :href="link" target="_blank">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  inject: ['deleteResource'],
  props: ['title', 'description', 'link', 'id'],
};
</script>

<style scoped lang="css" src="./learning-resource.css"></style>
