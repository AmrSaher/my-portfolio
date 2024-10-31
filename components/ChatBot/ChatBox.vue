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
      <div class="flex flex-col gap-2 p-2 overflow-x-hidden" ref="chatBox">
        <p class="w-full flex" :style="message.role == 'user' ? 'justify-content: flex-end' : 'justify-content: flex-start'" v-for="message in messages">
          <span class="p-2 rounded-md" :style="message.role == 'user' ? 'background: #4f4f4f9f' : 'background: #0e949e'">{{ message.content }}</span>
        </p>
      </div>
      <form
        @submit.prevent="sendMessage"
        class="w-full p-2 flex items-center gap-3"
      >
        <input
          type="text"
          placeholder="Enter your message"
          class="w-full p-2 rounded-md bg-[#232323] border border-[#333333] outline-none"
          v-model="message"
          :disabled="isGenerating"
        />
        <button type="submit" class="hover:text-[#0e949e] transition-colors" :disabled="isGenerating">
          <Icon class="text-2xl" name="uil:message" />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const { isOpened } = defineProps(["isOpened"]);
const emit = defineEmits(["close"]);
const chatBox = ref()
const message = ref('');
const messages = ref([])
const { LLM_API_URL, LLM_API_KEY, LLM_MODEL } = useRuntimeConfig().public
const isGenerating = ref(false)
const MY_INFO = {
  name: 'Amr Saher',
  age: '17 years old',
  role: '.NET Developer',
  country: 'Egypt',
  email: 'amrosaher1234@gmail.com',
  bio: 'Passionate software engineer dedicated to crafting elegant and efficient solutions that transcend code, turning complex challenges into seamless experiences.',
  skills: [
    'html',
    'css',
    'javascript',
    'sass',
    'tailwind css',
    'vue.js',
    'nuxt.js',
    'pinia',
    'php',
    'mysql',
    'laravel',
    'python',
    'c#',
    '.net',
    'data structures & algorithms',
    'object oriented programming',
    'MVC',
    'git',
    'github',
  ],
  social: {
    instagram: 'https://www.instagram.com/amrsaher56/',
    linkedin: 'https://www.linkedin.com/in/amr-saher-a9003b230/',
    github: 'https://github.com/AmrSaher',
  },
  experience: [
    {
      from: 'May 2021',
      to: 'Aug 2021',
      title: 'Backend Developer',
      description: "As a Backend Developer at Twision, I played a key role in enhancing our clients' digital presence. I focused on designing and implementing robust backend systems, collaborating with frontend developers, and contributing to strategic marketing plans. My work ensured seamless web development and solidified Twision's reputation as an innovative digital marketing agency.",
      skills: [
        'php',
        'apache',
        'laravel',
        'mysql',
        'backend',
      ],
      company: 'twision',
      type: 'internship',
    },
  ],
}
const MAIN_PROMPT = `
This is my info ${JSON.stringify(MY_INFO)}. All of questions I will ask you this is a questions come from people how wants to know information about me so tell them the answers and if they ask a question and this is not exist in my data, sorry to them and tell him i do not know. and if anyone asks for anything else tell him I am her to give you information about Amr. and respond normally like me. 
`

watch(messages.value, () => setTimeout(() => scrollDownChatBox(), 10))

const close = () => emit("close");
const sendMessage = async () => {
  if (message.value.trim() == '' || isGenerating.value) return
  messages.value.push({
    role: 'user',
    content: message.value,
  })
  message.value = ''
  await askAI()
}
const askAI = async () => {
  isGenerating.value = true
  const { data } = await fetch(LLM_API_URL, {
    method: 'post',
    watch: false,
    body: {
      'model': LLM_MODEL,
      'max_tokens': 512,
      'temperature': 0.7,
      'top_p': 0.7,
      'top_k': 50,
      'repetition_penalty': 1,
      'stop': [
        '<|eot_id|>',
      ],
      'messages': [
        {
          role: 'user',
          content: MAIN_PROMPT,
        },
        ...messages.value,
      ],
    },
    headers: {
      Authorization: 'Bearer ' + LLM_API_KEY,
    },
  })
  messages.value.push(data.value.choices[0].message)
  isGenerating.value = false
}
const scrollDownChatBox = () => {
  chatBox.value.scrollTop = chatBox.value.scrollHeight
}
</script>