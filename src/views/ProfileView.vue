<template>
  <NavBarVue />
  <main class="flex flex-row w-full h-full bg-gray-200">
    <div class="w-1/3 p-2 flex justify-center items-center">
      <!-- Aqui vem o card com as informações do perfil -->
      <ProfileInfo :user="user" :pending="ordersQntd" />
    </div>
    <div class="w-2/3 p-4">
      <!-- Aqui vem o card com as informações de compra do perfil + artes -->
      <div>
        <h1 class="font-bold text-xl">Envios pendentes:</h1>
        <div
          v-for="pendingOrder in pendingOrders"
          class="w-full flex-2 flex-row"
        >
          <div>
            <BottleComp :order="pendingOrder" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProfileInfo from "../components/ProfileInfo.vue";
import BottleComp from "../components/BottleComp.vue";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default {
  name: "ProfileView",
  components: {
    ProfileInfo,
    BottleComp,
  },
  data() {
    return {
      user: {},
      pendingOrders: [],
      sendedOrders: [],
      ordersQntd: 0,
    };
  },
  async created() {
    const token = this.$cookies.get("token");
    if (!token) {
      this.$router.push("/");
    }
    const decoded = jwt_decode(token);
    const id = decoded.user_id;
    const response = await axios.get(
      `https://back-endgarrafinhas-production.up.railway.app/users/${id}/`
    );
    console.log(id, decoded, response);
    this.user = response.data;

    const pending = await axios
      .get(`https://back-endgarrafinhas-production.up.railway.app/orders/`)
      .then((response) => {
        let pendente = response.data.filter(
          (order) => order.order_status === "Pendente"
        );
        console.log(response.data);
        // filtro para os pedidos pendentes apenas de um usuário
        pendente = pendente.filter((order) => order.user === id);

        this.pendingOrders = pendente;
        console.log(pendente);
        this.ordersQntd = pendente.length;
      });
  },
};
</script>
