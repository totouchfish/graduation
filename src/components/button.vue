<script>
export default {
  props: {
    type: {
      type: String,
      default: "normal"
    },
    text: {
      type: String,
      default: "normal"
    }
  },
  render(h) {
    return h("button", {
      // v-bind:class
      class: {
        bth: true,
        "bth-success": this.type === "success",
        "bth-danger": this.type === "danger",
        "bth-warning": this.type === "warning",
        "bth-normal": !this.type
      },
      //  dom 属性
      domProps: {
        innerText: this.text || "默认"
      },
      on: {
        click: this.handleClick
      }
    });
  },
  methods: {
    handleClick() {
      this.$emit("myEvent");
    }
  }
};
</script>
<style scoped>
.bth {
  width: 100px;
  height: 40px;
  line-height: 40px;
  color: #ffffff;
  font-size: 18px;
}
.bth-success {
  background-color: green;
}
.bth-danger {
  background-color: red;
}
.bth-warning {
  background-color: orange;
}
.bth-normal {
  background-color: grey;
}
</style>