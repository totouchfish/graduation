<template>
  <!-- 简历管理页面 -->
  <div class="resumeHandle">
    <Tabs>
      <TabPane label="简历筛选">
          <Table :columns="column1" :data="selectData"></Table>
          <Page :total="total1" :current="currentPage1" class="paging" show-elevator @on-change="changepage1()"></Page>
      </TabPane>
      <TabPane label="简历审核">
        <Table :columns="column1" :data="checkData"></Table>
        <Page :total="total2" :current="currentPage2" class="paging" show-elevator @on-change="changepage2()"></Page>
      </TabPane>
      <TabPane label="回收站">
        <Table :columns="column2" :data="deleteData"></Table>
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
      total1:10,
      total2:10,
      total3:10,
      currentPage1:1,
      currentPage2:1,
      currentPage3:1,
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
      selectData:[
        {
          name:'test1',
          gender:'男',
          age:'32',
          job:'大前端工程师',
          applyDate:'2020-03-06'
        },
        {
          name:'test2',
          gender:'男',
          age:'32',
          job:'大前端工程师',
          applyDate:'2020-03-06'
        },
        {
          name:'test3',
          gender:'男',
          age:'32',
          job:'大前端工程师',
          applyDate:'2020-03-06'
        }
      ],
      checkData:[
        {
          name:'test1',
          gender:'男',
          age:'32',
          job:'大前端工程师',
          applyDate:'2020-03-06'
        },
        {
          name:'test2',
          gender:'男',
          age:'32',
          job:'大前端工程师',
          applyDate:'2020-03-06'
        },
        {
          name:'test3',
          gender:'男',
          age:'32',
          job:'大前端工程师',
          applyDate:'2020-03-06'
        }
      ],
      deleteData:[
        {
          name:'test1',
          gender:'男',
          age:'32',
          job:'大前端工程师',
          applyDate:'2020-03-06'
        },
        {
          name:'test2',
          gender:'男',
          age:'32',
          job:'大前端工程师',
          applyDate:'2020-03-06'
        },
        {
          name:'test3',
          gender:'男',
          age:'32',
          job:'大前端工程师',
          applyDate:'2020-03-06'
        }
      ]
    };
  },
  methods: {
    changepage1(val){
      this.currentPage1 = val;
    },
    changepage2(val){
      this.currentPage1 = val;
    },
    changepage3(val){
      this.currentPage1 = val;
    }
  }
}
</script>
<style scoped>
.resumeHandle {
  width: 1000px;
  height: 100vh;
  overflow-y: hidden;
}
</style>