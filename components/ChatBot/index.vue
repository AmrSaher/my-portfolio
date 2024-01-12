<template>
  <ChatBotChatBox :isOpened="isOpened" @close="toggle" />
  <button
    class="ChatBot overflow-hidden fixed bottom-7 right-7 z-40 bg-[#0e949e] w-12 h-12 rounded-full transition-all duration-500"
    :style="isOpened ? 'padding: 0; width: 0; height: 0;' : ''"
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
