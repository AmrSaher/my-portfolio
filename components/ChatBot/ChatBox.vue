<template>
  <div
    class="ChatBotChatBox overflow-hidden fixed bottom-7 right-7 max-sm:bottom-0 max-sm:right-0 w-[400px] h-[600px] max-sm:w-full max-sm:h-full bg-[#4f4f4f33] transition-all rounded-lg z-30 border border-[#434343] duration-500 backdrop-blur-sm"
    :style="!isOpened ? 'width: 0; height: 0; border: 0;' : ''"
  >
    <header
      class="absolute top-0 left-0 w-full px-3 h-[80px] flex items-center justify-between bg-[#0e949e] rounded-tl-lg rounded-tr-lg"
    >
      <div>
        <h3 class="font-medium">Amr Saher Bot 👾</h3>
        <p class="font-light text-sm tracking-wider">Ask me any thing</p>
      </div>
      <button
        class="w-10 h-10 flex justify-center items-center rounded-md transition-colors hover:bg-[#3bb6be]"
        @click="close"
      >
        <Icon class="text-2xl" name="uil:x" />
      </button>
    </header>
    <div
      class="absolute top-[80px] left-0 w-full h-[calc(100%-80px)] rounded-bl-lg rounded-br-lg flex flex-col justify-between"
    >
      <div class="flex flex-col gap-2 p-2 overflow-y-auto">
        <p class="w-full flex justify-start">
          <span class="p-2 bg-[#0e949e] rounded-md">Hello world</span>
        </p>
        <p class="w-full flex justify-end">
          <span class="p-2 bg-[#4f4f4f9f] rounded-md">Hi</span>
        </p>
      </div>
      <form @submit.prevent="" class="w-full p-2 flex items-center gap-3">
        <input
          type="text"
          placeholder="Enter your message"
          class="w-full p-2 rounded-md bg-[#232323] border border-[#333333] outline-none"
        />
        <button type="submit" class="hover:text-[#0e949e] transition-colors">
          <Icon class="text-2xl" name="uil:message" />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const { isOpened } = defineProps(["isOpened"]);
const emit = defineEmits(["close"]);

const close = () => emit("close");
</script>
