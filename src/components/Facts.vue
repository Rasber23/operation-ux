<template>
  <div id="fact-modal" v-if="!isMobile || showModal">
    <div class="modal-wrapper">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <h2><slot name="heading"></slot></h2>
            <h5><slot name="subheading"></slot></h5>
            <p><slot name="text"></slot></p>
            <p v-if="show">width: {{ width }}</p>
          </div>
          <div v-if="isMobile" class="modal-footer">
            <div class="close" data-dismiss="modal" aria-label="Close">
              <img
                aria-hidden="true"
                @click="showModal = false"
                class="paddingForSvg"
                src="./../assets/Icons/Close_meny_black.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-end flex-row" v-if="isMobile">
    <img
      v-if="!showModal"
      @click="showModal = true"
      class="paddingForSvg"
      src="./../assets/Icons/question-circle-regular.svg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 0,
      isMobile: false,
      showModal: false,
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize)
    this.handleResize()
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth
    },
    addMask() {
      // create a new div element
      // const mask = document.createElement("div")
      // mask.className = 'modal-mask'
      // add the newly created element and its content into the DOM
      //document.querySelector("fact-modal").appendChild(mask)
    },
    removeMask() {},
  },
  watch: {
    width: function() {
      if (this.width < 768 && !this.isMobile) {
        console.log("mobile!")
        this.isMobile = true
      }
      if (this.width > 768 && this.isMobile) {
        console.log("deskop!")
        this.isMobile = false
      }
    },
  },
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.paddingForSvg {
  padding: 1em;
}

.modal-dialog {
  max-width: none;
}

.modal-content {
  background-color: var(--white);
  border: none;
}
</style>
