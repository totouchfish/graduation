<template>
  <div>
    <Layout>
      <Header>
        <div class="header">
          <input
            type="text"
            v-model="searchContent"
            :placeholder="searchTips"
            class="searchContent"
          />
          <Button class="searchButton">搜 索</Button>
        </div>
      </Header>
      <Content style="margin-top:20px;">
        <div class="search">
          <ul class="searchType">
            <li>
              <dl>
                <dt style="font-weight:bold;">工作城市:</dt>
                <dd
                  v-for="(item,index) in workCityLists"
                  :class="item.choose?'choose':''"
                  :key="index"
                  @click="chooseWorkCity(index)"
                >{{item.name}}</dd>
              </dl>
              <dl>
                <dt>工作性质:</dt>
                <dd
                  v-for="(item,index) in workCharacterLists"
                  :class="item.choose?'choose':''"
                  :key="index"
                  @click="chooseWorkCharacter(index)"
                >{{item.name}}</dd>
              </dl>
              <dl>
                <dt>职能类型:</dt>
                <dd
                  v-for="(item,index) in workTypeLists"
                  :class="item.choose?'choose':''"
                  :key="index"
                  @click="chooseWorkType(index)"
                >{{item.name}}</dd>
              </dl>
              <dl>
                <dt>职能类型:</dt>
                <dd
                  v-for="(item,index) in workTypeLists"
                  :class="item.choose?'choose':''"
                  :key="index"
                  @click="chooseWorkType(index)"
                >{{item.name}}</dd>
              </dl>
            </li>
          </ul>
        </div>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    msg: String
  },
  data() {
    return {
      selectPosition: 1,
      selectPositionLists: [
        {
          value: 1,
          label: "职位"
        },
        {
          value: 2,
          label: "公司"
        }
      ],
      searchContent: "",
      searchTips: "请输入关键字,例如：IT、JAVA、百度、华为等",
      workCityLists: [
        {
          name: "不限",
          code: "city00",
          choose: true
        },
        {
          name: "北京",
          code: "city01",
          choose: false
        },
        {
          name: "上海",
          code: "city02",
          choose: false
        },
        {
          name: "广州",
          code: "city03",
          choose: false
        },
        {
          name: "深圳",
          code: "city04",
          choose: false
        },
        {
          name: "杭州",
          code: "city05",
          choose: false
        },
        {
          name: "苏州",
          code: "city06",
          choose: false
        },
        {
          name: "大连",
          code: "city07",
          choose: false
        },
        {
          name: "成都",
          code: "city08",
          choose: false
        },
        {
          name: "武汉",
          code: "city09",
          choose: false
        },
        {
          name: "天津",
          code: "city10",
          choose: false
        }
      ],
      workCharacterLists: [
        {
          name: "不限",
          code: "character00",
          choose: true
        },
        {
          name: "应届",
          code: "character01",
          choose: false
        },
        {
          name: "实习",
          code: "character02",
          choose: false
        }
      ],
      workTypeLists: [
        {
          name: "不限",
          code: "type00",
          choose: true
        },
        {
          name: "互联网/游戏/软件",
          code: "type01",
          choose: false
        },
        {
          name: "电子/通信/硬件",
          code: "type02",
          choose: false
        },
        {
          name: "房地产/建筑/物业",
          code: "type03",
          choose: false
        },
        {
          name: "金融",
          code: "type04",
          choose: false
        },
        {
          name: "消费品",
          code: "type05",
          choose: false
        },
        {
          name: "汽车/机械/制造",
          code: "type06",
          choose: false
        },
        {
          name: "服务/外包/中介",
          code: "type07",
          choose: false
        },
        {
          name: "消费品",
          code: "type08",
          choose: false
        },
        {
          name: "广告/传媒/教育/文化",
          code: "type09",
          choose: false
        },
        {
          name: "交通/贸易/物流",
          code: "type10",
          choose: false
        },
        {
          name: "制药/医疗",
          code: "type11",
          choose: false
        },
        {
          name: "能源/化工/环保",
          code: "type12",
          choose: false
        },
        {
          name: "政府/农林牧渔",
          code: "type13",
          choose: false
        }
      ],
      workCity: 0,
      workCharacter: 0,
      workType: 0,
      companyType: 0
    };
  },
  watch: {
    selectPosition(val) {
      if (val == 1) {
        this.searchTips = "请输入关键字,例如：IT,JAVA,前端,后端等";
      } else {
        this.searchTips = "请输入公司名称或者关键词,例如：百度,华为等";
      }
    }
  },
  components: {},
  computed: {},
  methods: {
    chooseWorkCity(index, id) {
      this.workCityLists[this.workCity].choose = false;
      this.workCityLists[index].choose = true;
      this.workCity = index;
      sessionStorage.setItem("workCity", index);
    },
    chooseWorkCharacter(index, id) {
      this.workCharacterLists[this.workCharacter].choose = false;
      this.workCharacterLists[index].choose = true;
      this.workCharacter = index;
      sessionStorage.setItem("workCharacter", index);
    },
    chooseWorkType(index, id) {
      this.workTypeLists[this.workType].choose = false;
      this.workTypeLists[index].choose = true;
      this.workType = index;
      sessionStorage.setItem("workType", index);
    }
  },
  created() {
    // 加载已选中的城市
    if (sessionStorage.getItem("workCity")) {
      this.chooseWorkCity(sessionStorage.getItem("workCity"));
    }
    if (sessionStorage.getItem("workCharacter")) {
      this.chooseWorkCharacter(sessionStorage.getItem("workCharacter"));
    }
    if (sessionStorage.getItem("workType")) {
      this.chooseWorkType(sessionStorage.getItem("workType"));
    }
  }
};
</script>

<style scoped>
.header {
  width: 800px;
  height: 100px;
  /* background-color: #fff; */
  padding: 20px 18px;
}
.selectPosition {
  cursor: pointer;
  width: 80px;
  height: 60px;
  font-size: 22px;
  padding-left: 8px;
  vertical-align: middle;
  border-top-left-radius: 0.2em;
  border-bottom-left-radius: 0.2em;
}
.searchContent {
  min-width: 600px;
  width: 600px;
  height: 40px;
  font-size: 16px;
  padding-left: 10px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 42px;
  border-top-left-radius: 0.2em;
  border-bottom-left-radius: 0.2em;
  border: 0.5px solid #a9a9a9;
  border-right: 0;
}
.searchButton {
  width: 80px;
  height: 40px;
  font-size: 16px;
  border: 0.5px solid #a9a9a9;
  margin-left: -3.5px;
  border-radius: 0;
  border-top-right-radius: 0.2em;
  border-bottom-right-radius: 0.2em;
}
/* .hostSearch {
  font-size: 17px;
  margin-left: 10px;
  color: #666;
  cursor: pointer;
}
.hostSearch:hover {
  color: #1890ff;
} */
.search {
  width: 800px;
  height: 500px;
  background-color: #fafafa;
  padding: 20px 15px;
  font-size: 15px;
}
.searchType {
  list-style: none;
  /* padding-left: 0; */
}
dl {
  position: relative;
  padding-left: 65px;
  display: inline-block;
}
dt {
  position: absolute;
  font-weight: bold;
  left: 0;
  top: 0;
}
dd {
  float: left;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 0.2em;
   padding: 1px 5px;

}
.choose {
  background-color: #41af55;
  /* padding: 1px 5px; */
}
</style>
