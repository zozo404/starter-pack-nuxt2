<template>
  <div>
    <footer class="bg-bluefooter text-gray-100 relative pb-4 lg:pt-0">
      <div>
        <div class="pt-4">
          <!-- summary -->
          <ul class="flex justify-around text-center gap-1">
            <li
              v-for="section in sections"
              :key="section.id"
              class="hover:text-[#68C3D4] transition fade-scroll"
              :class="{ visible: isVisible }"
            >
              <NuxtLink :to="section.link">
                {{ section.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- copyrights -->
      <div class="text-center pt-4">
        <p class="fade-scroll" :class="{ visible: isVisible }">
          &copy; 2023-2024 Name.netlify.app <br />
          <NuxtLink to="legal-mention">Legal Mention</NuxtLink> | All rights reserved
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
import scrollFadeMixin from "~/mixins/scrollFadeMixin";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  mixins: [scrollFadeMixin],
  data() {
    return {
      sections: [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Part 1", link: "part1" },
        { id: 3, name: "Part 2", link: "part2" },
        { id: 4, name: "Part 3", link: "part3" },
        { id: 5, name: "Part 4", link: "part4" },
      ],
    };
  },
};
</script>