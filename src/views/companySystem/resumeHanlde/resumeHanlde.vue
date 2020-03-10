<template>
  <!-- 简历管理页面 -->
  <div class="main">
    <Tabs>
      <TabPane label="简历筛选">
        <ul class="fillIn clear">
          <li class="liStyle">
            <label for="">姓名：</label>
            <Input v-model="search.userName" placeholder="请输入姓名" style="width: 160px"></Input>
          </li>
          <li class="liStyle">
            <label for="">岗位：</label>
            <Input v-model="search.jobName" placeholder="请输入岗位名称" style="width: 160px"></Input>
          </li>
          <!-- <li class="liStyle">
            <span>状态：</span>
            <Select v-model="search.status" style="width: 120px">
              <Option value="0">全部</Option>
              <Option value="1">已邀请</Option>
              <Option value="2">已录取</Option>
              <Option value="3">未录取</Option>
              <Option value="4">二次面试</Option>
            </Select>
          </li> -->
          <li class="liStyle">
            <Button icon="ios-search" class="button" type="primary" @click="searchData()">搜 索</Button>
          </li>
        </ul>
        <Table :columns="column1" :data="selectData"></Table>
        <Page :total="total1" :current="currentPage1" class="paging" show-elevator @on-change="changepage1()"></Page>
      </TabPane>
      <TabPane label="简历审核">
        <ul class="fillIn clear">
          <li class="liStyle">
            <label for="">姓名：</label>
            <Input v-model="search.userName" placeholder="请输入姓名" style="width: 160px"></Input>
          </li>
          <li class="liStyle">
            <label for="">岗位：</label>
            <Input v-model="search.jobName" placeholder="请输入岗位名称" style="width: 160px"></Input>
          </li>
          <!-- <li class="liStyle">
            <span>状态：</span>
            <Select v-model="search.status" style="width: 120px">
              <Option value="0">全部</Option>
              <Option value="1">已邀请</Option>
              <Option value="2">已录取</Option>
              <Option value="3">未录取</Option>
              <Option value="4">二次面试</Option>
            </Select>
          </li> -->
          <li class="liStyle">
            <Button icon="ios-search" class="button" type="primary" @click="searchData()">搜 索</Button>
          </li>
        </ul>
        <Table :columns="column2" :data="checkData"></Table>
        <Page :total="total2" :current="currentPage2" class="paging" show-elevator @on-change="changepage2()"></Page>
      </TabPane>
      <TabPane label="回收站">
        <ul class="fillIn clear">
          <li class="liStyle">
            <label for="">姓名：</label>
            <Input v-model="search.userName" placeholder="请输入姓名" style="width: 160px"></Input>
          </li>
          <li class="liStyle">
            <label for="">岗位：</label>
            <Input v-model="search.jobName" placeholder="请输入岗位名称" style="width: 160px"></Input>
          </li>
          <!-- <li class="liStyle">
            <span>状态：</span>
            <Select v-model="search.status" style="width: 120px">
              <Option value="0">全部</Option>
              <Option value="1">已邀请</Option>
              <Option value="2">已录取</Option>
              <Option value="3">未录取</Option>
              <Option value="4">二次面试</Option>
            </Select>
          </li> -->
          <li class="liStyle">
            <Button icon="ios-search" class="button" type="primary" @click="searchData()">搜 索</Button>
          </li>
        </ul>
        <Table :columns="column3" :data="deleteData"></Table>
        <Page :total="total3" :current="currentPage3" class="paging" show-elevator @on-change="changepage3()"></Page>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userType: sessionStorage.getItem('userType') || 1,
      search:{
        userName:'',
        jobName:'',
        status:'0'
      },
      total1: 10,
      total2: 10,
      total3: 10,
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      column1: [
        {
          type: "index",
          title: "序号",
          width: 80,
          align: "center",
          // render: (h, params) => {
          //   return h(
          //     "span",
          //     (params.index + 1) + (this.currentPage - 1) * 10
          //   );
          // }
        },
        {
          title: "姓名",
          key: "name",
          align: "center"
        },
        {
          title: "性别",
          key: "gender",
          align: "center"
        },
        {
          title: "年龄",
          key: "age",
          align: "center"
        },
        // {
        //   title: "状态",
        //   key: "status",
        //   align: "center"
        // },
        {
          title: "应聘岗位",
          key: "job",
          align: "center"
        },
        // {
        //   title: "状态",
        //   key: "status",
        //   align: "center"
        // },
        {
          title: "申请日期",
          key: "applyDate",
          align: "center"
        },
        {
          title: "操作",
          key: "action",
          width: 300,
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
                "添加审核"
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
          width: 80,
          align: "center",
          // render: (h, params) => {
          //   return h(
          //     "span",
          //     (params.index + 1) + (this.currentPage - 1) * 10
          //   );
          // }
        },
        {
          title: "姓名",
          key: "name",
          align: "center"
        },
        {
          title: "性别",
          key: "gender",
          align: "center"
        },
        {
          title: "年龄",
          key: "age",
          align: "center"
        },
        // {
        //   title: "状态",
        //   key: "status",
        //   align: "center"
        // },
        {
          title: "应聘岗位",
          key: "job",
          align: "center"
        },
        // {
        //   title: "状态",
        //   key: "status",
        //   align: "center"
        // },
        {
          title: "申请日期",
          key: "applyDate",
          align: "center"
        },
        {
          title: "操作",
          key: "action",
          width: 300,
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
                "邀请面试"
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
      column3: [
        {
          type: "index",
          title: "序号",
          width: 80,
          align: "center",
          // render: (h, params) => {
          //   return h(
          //     "span",
          //     (params.index + 1) + (this.currentPage - 1) * 10
          //   );
          // }
        },
        {
          title: "姓名",
          key: "name",
          align: "center"
        },
        {
          title: "性别",
          key: "gender",
          align: "center"
        },
        {
          title: "年龄",
          key: "age",
          align: "center"
        },
        // {
        //   title: "状态",
        //   key: "status",
        //   align: "center"
        // },
        {
          title: "应聘岗位",
          key: "job",
          align: "center"
        },
        // {
        //   title: "状态",
        //   key: "status",
        //   align: "center"
        // },
        {
          title: "申请日期",
          key: "applyDate",
          sortable: "true",
          align: "center"
        },
        {
          title: "操作",
          key: "action",
          width: 300,
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
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.handleDelete(params.row.id);
                    }
                  }
                },
                "恢复"
              )
            ]);
          }
        }
      ],
      selectData: [
        {
          name: 'test1',
          gender: '男',
          age: '32',
          job: '前端开发工程师',
          applyDate: '2020-03-06'
        },
        {
          name: 'test2',
          gender: '男',
          age: '32',
          job: '前端开发工程师',
          applyDate: '2020-03-06'
        },
        {
          name: 'test3',
          gender: '男',
          age: '32',
          job: '前端开发工程师',
          applyDate: '2020-03-06'
        }
      ],
      checkData: [
        {
          name: 'test1',
          gender: '男',
          age: '32',
          job: '前端开发工程师',
          applyDate: '2020-03-06'
        },
        {
          name: 'test2',
          gender: '男',
          age: '32',
          job: '前端开发工程师',
          applyDate: '2020-03-06'
        },
        {
          name: 'test3',
          gender: '男',
          age: '32',
          job: '前端开发工程师',
          applyDate: '2020-03-06'
        }
      ],
      deleteData: [
        {
          name: 'test1',
          gender: '男',
          age: '32',
          job: '前端开发工程师',
          applyDate: '2020-03-06'
        },
        {
          name: 'test2',
          gender: '男',
          age: '32',
          job: '前端开发工程师',
          applyDate: '2020-03-06'
        },
        {
          name: 'test3',
          gender: '男',
          age: '32',
          job: '前端开发工程师',
          applyDate: '2020-03-06'
        }
      ]
    };
  },
  methods: {
    changepage1 (val) {
      this.currentPage1 = val;
    },
    changepage2 (val) {
      this.currentPage1 = val;
    },
    changepage3 (val) {
      this.currentPage1 = val;
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