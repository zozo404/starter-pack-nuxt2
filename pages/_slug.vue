<template>
  <section>
    <!-- Slug page content -->
    <div v-if="isValidContent">
      <!-- Votre contenu spécifique ici -->
      <p>{{ routeSlug }}</p>
    </div>
    <!-- Redirection vers le layout 404 -->
    <div v-else>
      <router-view name="error" />
    </div>
  </section>
</template>

<script>
import scrollFadeMixin from "~/mixins/scrollFadeMixin";

export default {
  name: "SlugPage",
  mixins: [scrollFadeMixin],
  data() {
    return {
      currentSlide: 0,
    };
  },
  computed: {
    routeSlug() {
      return this.$route.params.slug;
    },
    isValidContent() {
      // Ajoutez ici les noms de pages que vous souhaitez accepter
      const allowedPages = ["part1", "part2", "part3", "part4"];
      const isValid = allowedPages.includes(this.routeSlug);

      // Si le contenu n'est pas valide, redirigez vers le layout d'erreur
      if (!isValid) {
        this.$router.push("../layouts/error");
      }

      return isValid;
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
/* Vos styles spécifiques ici */
</style>
