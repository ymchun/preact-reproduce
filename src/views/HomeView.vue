<template>
  <poc-component :test-number="10" test-string="testing" />
</template>

<script lang="ts">
import Vue from "vue";

import { registerPocComponentElement } from "react-to-webcomponent-demo-component";

registerPocComponentElement();

export default Vue.extend({
  name: "HomeView",
});
</script>
