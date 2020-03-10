<template>
  <!-- 简历管理页面 -->
  <div class="main">
    <Table :columns="column" :data="selectData"></Table>
    <Page :total="total" :current="currentPage" class="paging" show-elevator @on-change="changepage()"></Page>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userType: sessionStorage.getItem('userType') || 1,
      total:10,
      currentPage:1,
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
      selectData:[
        {
          jobName:'前端开发工程师',
          salary:'6k-8k/月',
          degree:'本科',
          address:'天津-河东区-融资服务中心',
          releaseDate:'2020-03-06',
          status:"招聘中"
        },
        {
          jobName:'前端开发工程师',
          salary:'7w-8w/年',
          degree:'本科',
          address:'天津-河东区-融资服务中心',
          releaseDate:'2020-03-06',
          status:"招聘中"
        },
        {
          jobName:'前端开发工程师',
          salary:'6k-8k/月',
          degree:'本科',
          address:'天津-河东区-融资服务中心',
          releaseDate:'2020-03-06',
          status:"停止招聘"
        }
      ]
    };
  },
  methods: {
    changepage(val){
      this.currentPage = val;
    }
  }
}
</script>
<style scoped>
.main {
  width: 1000px;
  height: 100vh;
  overflow-y: hidden;
}
.paging{
  float: right;
  margin-top: 10px;
}
</style>