//响应式布局，计算根节点参考字体大小
export default {
	data() {
		return {
		}
	},
	created(){
    this.renderBase();
  },
  beforeDestroy(){
    window.onresize = null;
  },
	methods: {
		bind(){
      window.onresize = ()=>{
        this.renderBase();
      };
    },
    renderBase(){
      var winH = window.innerHeight;
      if(winH < 550) winH = 550;//页面高度最小550px
      var base = winH * 100 / 768;//100：为基准的100px；768：为设计稿的高
      document.documentElement.style.fontSize = base + 'px';
    }
	}
}