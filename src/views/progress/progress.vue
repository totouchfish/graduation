<template>  
    <div class="container">
      
      <Layout>
        <Layout :style="{width: '600px',minWidth: '700px',}">
          <Header>
            <div class="st-nav">
                <ul>
                    <li class="on">
                        <a>投递成功</a>
                    </li> 
                     <li><a>被查看
                        <span class="st-dot"></span>
                        </a>
                    </li>
                    <li><a>邀请面试
                        <span class="st-dot"></span>
                        </a>
                    </li>
                     <li><a>已面试
                        <span class="st-dot"></span>
                        </a>
                    </li>
                </ul>
            </div>
          </Header>
          <Content>
              <div class="js">
                 <div class="ji js-item">
                     <div class="ji-item clearfix">
                         <div class="ji-item-info fl">
                             <a class="ji-item-info-jobName" href="" target="_blank">2020届java开发工程师</a>
                             <p>10K-15K</p>
                             <a class="ji-item-info-companyName" href="" target="_blank">北京思特奇信息技术股份有限公司</a>
                        </div> 
                        <div class="ji-item-status fr">
                             <p>成功投递</p> 
                             <div><span>2020-02-26</span></div>
                        </div>
                     </div>
                </div>
              </div>
          </Content>

        </Layout>
      </Layout>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    msg: String
  },
  data () {
    return {     
      allData: [],
      interview:[]
    };
  },
  components: {},
  watch: {},

  methods: {
    initData () {
    }
  },
  created () {
    this.initData();
  }
}
</script>
<style scoped>
.st-nav {
    height: 30px;
    background: #fff;
    margin-bottom: 10px;
}
li, ul {
    list-style: none;
}
.st-nav ul li {
    width: 175px;
    height: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    float: left;
    border-right: 1px solid #eee;
}
.st-nav ul .on > a {
    color: #1787fb;
}
.st-nav ul li a {
    line-height: 30px;
    font-size: 14px;
    color: #666;
    cursor: pointer;
    position: relative;
    display: block;
}
a, a:hover, a:link, a:visited {
    text-decoration: none;
}
.st-dot {
    width: 4px;
    height: 4px;
    display: none;
    background: #ff5959;
    border-radius: 50%;
    position: absolute;
    top: 17px;
    right: 61px;
}

.js {
    margin-top: 16px;
}
:first-child.js-item {
    border-top: 1px solid transparent;
}
.js-item {
    border-top: 1px solid #ededed;
      background: #fff;
}
.clearfix {
    zoom: 1;
    display: block;
}
.ji-item .ji-item-info {
    padding-left: 25px;
    max-width: 580px;
}
.fl {
    float: left;
}
.ji-item .ji-item-info-jobName {
    margin-top: 30px;
    display: block;
    font-size: 18px;
    color: #333;
}

.ji-item .ji-item-info p {
    margin: 4px 0 3px;
    font-size: 18px;
    color: #ff5959;
    font-weight: 700;
}
.ji-item .ji-item-info-companyName {
    display: block;
    font-size: 14px;
    color: #999;
    margin-bottom: 29px;
}
.ji-item .ji-item-status {
    padding: 31px 25px 31px 0;
    display: block;
    text-align: right;
    cursor: pointer;
}
.fr {
    float: right;
}
.ji-item .ji-item-status p {
    font-size: 14px;
    color: #666;
    height: 47px;
}
.ji-item .ji-item-status div span {
    margin-top: 11px;
    display: inline-block;
    font-size: 14px;
    color: #999;
}


</style>