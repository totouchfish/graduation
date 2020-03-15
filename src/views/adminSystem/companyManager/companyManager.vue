<template>
  <!-- 简历管理页面 -->
  <div class="main">
    <ul class="fillIn clear">
      <li class="liStyle">
        <label for="">姓名：</label>
        <Input v-model="search.userName" placeholder="请输入姓名" style="width: 160px"></Input>
      </li>
      <li class="liStyle">
        <label for="">职位：</label>
        <Input v-model="search.jobName" placeholder="请输入职位名称" style="width: 160px"></Input>
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
        <Button icon="ios-search" class="button" type="primary" @click="searchData()">搜 索</Button>
      </li>
    </ul>
    <Table :columns="column" :data="resumeData"></Table>
    <Page :total="total" :current="currentPage" class="paging" show-elevator @on-change="changepage()"></Page>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userType: sessionStorage.getItem('userType') || 1,
      total: 10,
      currentPage: 1,
      search:{
        userName:'',
        jobName:'',
        status:'0'
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
          title: "姓名",
          key: "name",
          align: "center",
          maxWidth:220,
          minWidth:100
        },
        {
          title: "性别",
          key: "gender",
          align: "center",
          maxWidth: 80
        },
        {
          title: "年龄",
          key: "age",
          align: "center",
          maxWidth: 80
        },
        // {
        //   title: "状态",
        //   key: "status",
        //   align: "center"
        // },
        {
          title: "应聘职位",
          key: "job",
          align: "center",
          minWidth:100
        },
        {
          title: "申请日期",
          key: "applyDate",
          align: "center",
          sortable: "true",
          width: 110
        },
        {
          title: "状态",
          key: "status",
          align: "center",
          width: 110
        },
        {
          title: "操作",
          key: "action",
          width: 160,
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
                    marginRight: "10px"
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
                "修改状态"
              ),
              // h(
              //   "Button",
              //   {
              //     props: {
              //       type: "error",
              //       size: "small"
              //     },
              //     on: {
              //       click: () => {
              //         this.handleDelete(params.row.id);
              //       }
              //     }
              //   },
              //   "删除"
              // )
            ]);
          }
        }
      ],
      resumeData: [
        {
          name: 'test1',
          gender: '男',
          age: '32',
          job: '前端开发工程师',
          applyDate: '2020-03-06',
          status: '已邀请'
        },
        {
          name: 'test1',
          gender: '男',
          age: '32',
          job: '前端开发工程师',
          applyDate: '2020-03-06',
          status: '已录取'
        },
        {
          name: 'test2',
          gender: '男',
          age: '32',
          job: '前端开发工程师',
          applyDate: '2020-03-06',
          status: '未录取'
        },
        {
          name: 'test3',
          gender: '男',
          age: '32',
          job: '前端开发工程师',
          applyDate: '2020-03-06',
          status: '二次面试'
        }
      ]
    };
  },
  methods: {
    changepage (val) {
      this.currentPage = val;
    },
  }
}
</script>
<style scoped>
.main {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
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
.liStyle{
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
</style>