  <template>
  <div class="component-menu">
    <button v-if="isLoggedIn" type="button" class="logged-in">
      <div class="avatar">
        <FontAwesomeIcon icon="user-circle" />
        <span :style="{backgroundImage: `url(${userAvatar})`}" class="picture"></span>
      </div>

      <div class="greetings">
        Olá, {{ username }}
        <FontAwesomeIcon icon="caret-down" />
      </div>
    </button>
  </div>
</template>

  <script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Menu",
  components: {
    FontAwesomeIcon
  },
  data: function() {
    return {
      userAvatar: "/images/tattoos/japanese.jpg",
      isLoggedIn: true,
      username: "Daniel"
    };
  }
};
</script>

  <style lang="scss" scoped>
.component-menu {
  > .logged-in {
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
      margin-left: 10px;
      font-weight: 700;
      text-transform: uppercase;
      @include font-primary-family();
    }
  }
}
</style>