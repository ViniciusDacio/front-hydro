<template>
  <div
    class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16"
  >
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full flex justify-center"></div>
        <div class="w-full text-center mt-20">
          <div class="flex justify-center lg:pt-4 pt-8 pb-0">
            <div class="p-3 text-center">
              <span
                class="text-xl font-bold block uppercase tracking-wide text-slate-700"
                >{{ pending }}</span
              >
              <span class="text-sm text-slate-400">Pedidos pendentes</span>
            </div>
            <div class="p-3 text-center">
              <span
                class="text-xl font-bold block uppercase tracking-wide text-slate-700"
                >0</span
              >
              <span class="text-sm text-slate-400">Pedidos enviados</span>
            </div>

            <div class="p-3 text-center">
              <span
                class="text-xl font-bold block uppercase tracking-wide text-slate-700"
                >0</span
              >
              <span class="text-sm text-slate-400">Pedidos avaliados</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-2">
        <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
          {{ user.first_name }} {{ user.last_name }}
        </h3>
        <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
          <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i
          >{{ user.endereco }}
        </div>
        <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
          <i class="fas fa-map-marker-alt mr-2 text-slate-300 opacity-75"></i
          >{{ user.telefone }}
        </div>
      </div>
      <div class="mt-6 py-6 border-t border-slate-200 text-center">
        <div class="flex flex-wrap justify-center">
          <div class="w-full px-4">
            <p class="font-light leading-relaxed text-slate-600 mb-4">
              Use o bot??o abaixo para sair da sua conta.
            </p>
            <a
              @click="
                () => {
                  $cookies.remove('token');
                  $router.push('/');
                }
              "
              class="font-normal text-slate-700 hover:text-slate-400"
            >
              Sair
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    pending: {
      type: Number,
      required: true,
    },
  },
};
</script>
