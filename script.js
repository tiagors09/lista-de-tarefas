const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const novaTarefa = ref("");

    const situacao = ref(0);

    const tarefas = ref([]);

    adicionarTarefa = () => {
      tarefas.value.push(novaTarefa.value);
      novaTarefa.value = "";
    }
    modificaSituacao = () => {
      situacao.value = (situacao.value + 1) % 4
    }

    return { novaTarefa, tarefas, adicionarTarefa, modificaSituacao, situacao };
  }
}).mount("#app");
