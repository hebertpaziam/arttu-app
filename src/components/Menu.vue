  <template>
  <div class="component-menu">
    <button type="button" class="authenticated" v-if="user.isAuthenticated" @click="newTattoo">
      <div class="avatar">
        <fa-icon icon="user-circle" />
        <span class="picture" :style="{backgroundImage: `url(${user.avatar})`}"></span>
      </div>

      <div class="greetings">
        <span class="username">Olá, {{ user.name }}</span>
        <fa-icon icon="caret-down" />
      </div>
    </button>
    <button type="button" class="not-authenticated" v-else @click="authenticate">Entre</button>
  </div>
</template>

  <script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Menu",
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  methods: {
    newTattoo() {
      let newId = Math.ceil(Math.random() * (100 - 7) + 7);
      this.addTattoo({
        id: newId,
        src: "/images/tattoos/tupac.jpg",
        desc: `HIP-HOP ${newId}`
      });
    },
    ...mapActions(["authenticate", "addTattoo"])
  }
};
</script>

  <style lang="scss">
.component-menu {
  > .authenticated {
    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    border: none;

    > .avatar {
      position: relative;
      width: 30px;
      height: 30px;
      font-size: 30px;

      > .picture {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
    > .greetings {
      display: flex;
      max-width: 200px;
      margin-left: 10px;
      font-weight: 700;
      > .username {
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: uppercase;
        white-space: nowrap;
        margin-right: 5px;
      }
    }
  }
  > .not-authenticated {
    width: 150px;
    line-height: 21px;
    margin: 5px auto;
    padding: 4px 20.8px;
    color: #000;
    background-color: $primary-color;
    font-weight: 700;
    font-size: 1.1rem;
    text-transform: uppercase;
    border: none;
    border-radius: 30px;
    transition: all 150ms ease-in-out;

    &:hover {
      background-color: $primary-color-lighten;
    }
  }
}
</style>