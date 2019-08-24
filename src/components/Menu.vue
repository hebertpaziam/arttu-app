  <template>
  <div class="component-menu">
    <button type="button" class="authenticated" v-if="isAuthenticated">
      <div class="avatar">
        <fa-icon icon="user-circle" class="icon" />
        <span class="picture" :style="{backgroundImage: `url(${user.avatar_url})`}"></span>
      </div>

      <div class="greetings">
        <span class="username">Olá, {{ getUserFirstName }}</span>
        <fa-icon icon="caret-down" />
      </div>
    </button>
    <button type="button" class="not-authenticated" v-else @click="requestAuthorization">Entre</button>
  </div>
</template>

  <script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Menu",
  computed: {
    ...mapState("AuthModule", ["user"]),
    ...mapGetters("AuthModule", ["isAuthenticated", "getUserFirstName"])
  },
  methods: {
    ...mapActions("AuthModule", ["requestAuthorization"])
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

      > .icon {
        vertical-align: top;
      }

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