<template>
  <!-- 企业认证页面 -->
  <div class="main">
    <Tabs @on-click="browseNotice">
      <TabPane label="已审核" name="1">
        <ul class="fillIn clear">
          <li class="liStyle">
            <label for="">企业名称：</label>
            <Input v-model="companyName" placeholder="请输入企业名称" style="width: 160px"></Input>
          </li>
          <li class="liStyle">
            <label for="">法人名称：</label>
            <Input v-model="legalPerson" placeholder="请输入法人名称" style="width: 160px"></Input>
          </li>
          <li class="liStyle">
            <Button icon="ios-search" class="button" type="primary" @click="searchData()">搜 索</Button>
          </li>
        </ul>
        <Table :columns="column1" :data="reviewedData"></Table>
        <Page :total="total1" :current="currentPage1" class="paging" show-elevator @on-change="changepage()"></Page>
      </TabPane>
      <TabPane label="未审核" name="2">
        <Table :columns="column2" :data="notReviewedData"></Table>
        <Page :total="total2" :current="currentPage2" class="paging" show-elevator @on-change="changepage()"></Page>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userType: sessionStorage.getItem('userType') || 1,
      total1: 10,
      total2: 10,
      currentPage1: 1,
      currentPage2: 1,
      companyName: '',
      legalPerson: '',
      status: '1',
      type:'1',
      column1: [
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
          title: "企业名称",
          key: "name",
          align: "center"
        },
        {
          title: "法代表人名称",
          key: "gender",
          align: "center"
        },
        {
          title: "企业联系方式",
          key: "age",
          align: "center"
        },
        {
          title: "申请日期",
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
      column2: [
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
          title: "企业名称",
          key: "name",
          align: "center"
        },
        {
          title: "法代表人名称",
          key: "gender",
          align: "center"
        },
        {
          title: "企业联系方式",
          key: "age",
          align: "center"
        },
        {
          title: "申请日期",
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
                    type: "primary",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.handleDelete(params.row.id);
                    }
                  }
                },
                "通过"
              )
            ]);
          }
        }
      ],
      reviewedData: [
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
      ],
       notReviewedData: [
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