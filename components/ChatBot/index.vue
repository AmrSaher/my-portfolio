<template>
  <ChatBotChatBox :isOpened="isOpened" @close="toggle" />
  <button
    class="ChatBot fixed bottom-7 right-7 z-40 bg-[#0e949e] w-12 h-12 rounded-full transition-all duration-500"
    :class="{
      'p-0 w-0 h-0 overflow-hidden': isOpened,
    }"
    @click="toggle"
  >
    <Icon class="text-2xl" name="uil:chat" />
  </button>
</template>

<script setup>
const isOpened = ref(false);

const toggle = () => {
  isOpened.value = !isOpened.value;
};
</script>
