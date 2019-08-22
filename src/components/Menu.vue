  <template>
  <div class="component-menu">
    <button v-if="user.isAuthenticated" type="button" class="authenticated">
      <div class="avatar">
        <fa-icon icon="user-circle" />
        <span :style="{backgroundImage: `url(${user.avatar})`}" class="picture"></span>
      </div>

      <div class="greetings">
        <span class="username">Olá, {{ user.name }}</span>
        <fa-icon icon="caret-down" />
      </div>
    </button>
  </div>
</template>

  <script>
import { mapState } from "vuex";
export default {
  name: "Menu",
  computed: mapState({
    user: state => state.user
  })
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
}
</style>