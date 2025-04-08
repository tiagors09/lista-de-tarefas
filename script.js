const { createApp, ref, reactive } = Vue;

const app = createApp({
  setup() {
    const novaTarefa = reactive({
      descricao: "",
      situacao: 0,
    });

    const tarefas = ref([]);

    adicionarTarefa = () => {
      tarefas.value.push({ ...novaTarefa });

      novaTarefa.descricao = "";
      novaTarefa.situacao = 0;
    }

    modificaSituacao = (tarefa) => {
      tarefa.situacao = (tarefa.situacao + 1) % 4
    }

    return { novaTarefa, tarefas, adicionarTarefa, modificaSituacao };
  }
}).mount("#app");
