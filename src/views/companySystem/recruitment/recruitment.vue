<template>
  <!-- 简历管理页面 -->
  <div class="main">
    <ul class="fillIn clear">
      <li class="liStyle">
        <label for="">职位：</label>
        <Input v-model="search.jobName" placeholder="请输入职位名称" style="width: 160px"></Input>
      </li>
      <li class="liStyle">
        <label for="">学历：</label>
        <Select v-model="search.degree" style="width: 120px">
          <Option value="0">全部</Option>
          <Option value="1">高中</Option>
          <Option value="2">中专</Option>
          <Option value="3">大专</Option>
          <Option value="4">本科</Option>
          <Option value="5">硕士</Option>
          <Option value="6">博士</Option>
          <Option value="9">其他</Option>
        </Select>
      </li>
      <li class="liStyle">
        <span>状态：</span>
        <Select v-model="search.status" style="width: 120px">
          <Option value="0">全部</Option>
          <Option value="1">已邀请</Option>
          <Option value="2">已录取</Option>
          <Option value="3">未录取</Option>
          <Option value="4">二次面试</Option>
        </Select>
      </li>
      <li class="liStyle">
        <Button icon="ios-search" type="primary" @click="searchData()">搜 索</Button>
      </li>
    </ul>
    <div>
      <Button icon="ios-add" class="add_button" type="primary" @click="addData()">新增职位</Button>
    </div>
    <div style="margin-top:60px;">
      <Table :columns="column" :data="selectData"></Table>
      <Page :total="total" :current="currentPage" class="paging" show-elevator @on-change="changepage()"></Page>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userType: sessionStorage.getItem('userType') || 1,
      total: 10,
      currentPage: 1,
      search: {
        jobName: '',
        degree: '0',
        status: '0'
      },
      column: [
        {
          type: "index",
          title: "序号",
          width: 60,
          align: "center",
          render: (h, params) => {
            return h(
              "span",
              (params.index + 1) + (this.currentPage - 1) * 10
            );
          }
        },
        {
          title: "职位",
          key: "jobName",
          align: "center"
        },
        {
          title: "薪资",
          key: "salary",
          align: "center",
          width: 100
        },
        {
          title: "学历",
          key: "degree",
          align: "center",
          width: 80,
        },
        {
          title: "地点",
          key: "address",
          align: "center"
        },
        // {
        //   title: "招聘方式",
        //   key: "recruitmentWay",
        //   align: "center"
        // },
        {
          title: "发布日期",
          key: "releaseDate",
          align: "center",
          width: 100
        },
        {
          title: "状态",
          key: "status",
          align: "center",
          width: 100,
        },
        {
          title: "操作",
          key: "action",
          width: 170,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.handleDetails(params);
                    }
                  }
                },
                "查看"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.handleShow(params);
                    }
                  }
                },
                "修改"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.handleDelete(params.row.id);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      selectData: [
        {
          jobName: '前端开发工程师',
          salary: '6k-8k/月',
          degree: '本科',
          address: '天津-河东区-融资服务中心',
          releaseDate: '2020-03-06',
          status: "招聘中"
        },
        {
          jobName: '前端开发工程师',
          salary: '7w-8w/年',
          degree: '本科',
          address: '天津-河东区-融资服务中心',
          releaseDate: '2020-03-06',
          status: "招聘中"
        },
        {
          jobName: '前端开发工程师',
          salary: '6k-8k/月',
          degree: '本科',
          address: '天津-河东区-融资服务中心',
          releaseDate: '2020-03-06',
          status: "停止招聘"
        }
      ]
    };
  },
  methods: {
    changepage (val) {
      this.currentPage = val;
    },
    searchData(){},
    addData(){
      this.$router.push({
        name:'add_recruitment',
        // params:{
        //   id:'1'
        // }
      })
    }
  }
}
</script>
<style scoped>
.main {
  width: 1000px;
  height: 100vh;
  overflow-y: hidden;
  background-color: #fff;
  padding: 15px;
  border-radius: 0.5em;
}
.paging {
  float: right;
  margin-top: 10px;
}
.fillIn {
  list-style-type: none;
  margin-bottom: 30px;
}
.liStyle {
  float: left;
  margin: 20px 20px 0 0;
}
.clear {
  zoom: 1;
}
.clear:after {
  content: '';
  display: block;
  clear: both;
}
.add_button{
  float: right;
  margin-top: -20px;
}
</style>