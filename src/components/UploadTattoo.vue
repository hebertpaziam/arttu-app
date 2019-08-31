<template>
  <form class="component-upload-tattoo" novalidate @submit.prevent="onSubmitHandler">
    <label
      id="dropArea"
      ref="dropArea"
      class="drop-area"
      for="tattooSource"
      draggable
      @drop.capture.prevent="processFile"
    >
      {{ labelText }}
      <img :src="thumb" class="preview" />
      <input
        id="tattooSource"
        ref="tattooSource"
        type="file"
        accept="image/*"
        required
        @change="processFile"
      />
    </label>
    <div class="form-group">
      <label for="tattooId" class="form-label">Titulo</label>
      <input
        id="tattooId"
        v-model="tattoo.title"
        name="tattooId"
        type="title"
        class="form-control"
        placeholder="Digite um titulo"
        required
      />
    </div>
    <button type="submit" class="action">Enviar</button>
    <div v-if="sending" class="loading"></div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'UploadTattoo',
  data() {
    return {
      sending: false,
      thumb: '',
      tattoo: {
        source: null,
        title: null
      }
    }
  },
  computed: {
    labelText() {
      return !this.thumb.length ? 'Arraste ou selecione uma imagem' : null
    }
  },
  methods: {
    processFile(e) {
      let data = e.target.files || e.dataTransfer.files
      this.tattoo.source = data[0]
      const reader = new FileReader()

      reader.readAsDataURL(data[0])
      reader.onloadend = () => {
        const img = reader.result
        this.thumb = img
      }
    },
    onSubmitHandler(e) {
      if (this.tattoo.source === null) alert('insira uma imagem!')
      if (this.tattoo.title === null) alert('digite um titulo')

      this.sending = true
      this.uploadTattoo(this.tattoo)
    },
    ...mapActions('TattooModule', ['uploadTattoo'])
  }
}
</script>

<style lang="scss">
.component-upload-tattoo {
  width: 90%;
  height: 90%;
  max-width: 700px;
  max-height: 400px;
  padding: 20px;
  text-align: right;
  background-color: #ffffff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);

  > .drop-area {
    @include display-flex(row, wrap, center, center);
    width: 100%;
    height: calc(100% - 130px);
    margin-bottom: 30px;
    border: 2px dashed $primary-color;
    font-size: 1.2rem;
    cursor: pointer;
    > input[type='file'] {
      display: none;
    }
    > .preview {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: auto;
      width: auto;
      height: 90%;
      transform: translate(-50%, -50%);
    }
    &.-filled {
      border: none;
    }
  }
  > .form-group {
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
    text-align: left;
    > .form-label {
      display: inline-block;
      vertical-align: middle;
      width: 60px;
      font-size: 1.5rem;
      margin-right: 10px;
    }
    > .form-control {
      display: inline-block;
      vertical-align: middle;
      width: calc(100% - 70px);
      padding: 5px 10px;
      font-size: 1.5rem;
      border: 1px solid $primary-color;
      border-radius: 4px;
    }
  }
  > .action {
    @include btn-config($primary-color);
  }
  > .loading {
    @include backdrop-props();
  }
}
</style>
