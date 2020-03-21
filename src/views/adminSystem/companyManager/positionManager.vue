<template>
  <!-- 企业认证页面 -->
  <div class="main">
        <ul class="fillIn clear">
          <li class="liStyle">
            <label for="">职位名称：</label>
            <Input v-model="positionName" placeholder="请输入职位名称" style="width: 160px"></Input>
          </li>
          <li class="liStyle">
            <label for="">公司名称：</label>
            <Input v-model="companyName" placeholder="请输入公司名称" style="width: 160px"></Input>
          </li>
          <li class="liStyle">
            <Button icon="ios-search" class="button" type="primary" @click="searchData()">搜 索</Button>
          </li>
        </ul>
        <Table :columns="column" :data="positionData"></Table>
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
      companyName: '',
      legalPerson: '',
      status: '1',
      type:'1',
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
          title: "职位名称",
          key: "name",
          align: "center"
        },
        {
          title: "公司名称",
          key: "gender",
          align: "center"
        },
        {
          title: "发布者",
          key: "age",
          align: "center"
        },
        {
          title: "工作地点",
          key: "age",
          align: "center"
        },
        {
          title: "发布日期",
          key: "applyDate",
          sortable: "true",
          align: "center"
        },
        {
          title: "操作",
          key: "action",
          width: 200,
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
      positionData: [
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
</style>