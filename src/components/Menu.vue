  <template>
  <div class="component-menu">
    <div class="content">
      <button type="button" class="sign-in" v-if="!isAuthenticated" @click="requestAuthorization">
        <fa-icon class="icon" :icon="['fab', 'github']" />Entre
      </button>

      <button type="button" class="authenticated" v-else>
        <div class="avatar">
          <fa-icon icon="user-circle" class="icon" />
          <span class="picture" :style="{backgroundImage: `url(${user.avatar_url})`}"></span>
        </div>

        <div class="greetings">
          <span class="username">Olá, {{ getUserFirstName }}</span>
          <fa-icon icon="caret-down" />
        </div>
      </button>
    </div>
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
  .content {
    > .authenticated {
      @include display-flex(nowrap, row, center, center);

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
          @include absolute-fulled-up;
          @include bg-cover-center;
          border-radius: 50%;
        }
      }
      > .greetings {
        @include display-flex(wrap, row, flex-start, flex-start);

        max-width: 200px;
        margin-left: 10px;
        font-weight: 700;
        > .username {
          margin-right: 5px;
          @include whitespace-nowrap;
        }
      }
    }
    > .sign-in {
      width: 150px;
      @include btn-config($primary-color);

      > .icon {
        margin-right: 5px;
      }
    }
  }
}
</style>