<script setup lang="ts">
import type { ChatRole } from "@/types";
import ImageAvatar from "@/assets/images/avatar.png";
defineProps<{
  role: ChatRole;
}>();

const avatars = {
  assistant: "/assistant.webp",
  system: "/system.png",
  user: ImageAvatar,
};
</script>

<template>
  <img
    class="hidden sm:block w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-slate-100"
    :src="avatars[role]"
    :alt="role"
  />
</template>
