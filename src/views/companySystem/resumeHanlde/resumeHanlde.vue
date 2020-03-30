<template>
  <!-- 简历管理页面 -->
  <div class="main">
    <Tabs @on-click="browseNotice">
      <TabPane label="简历筛选" name="1">
        <ul class="fillIn clear">
          <li class="liStyle">
            <label for="">姓名：</label>
            <Input v-model="selectName" placeholder="请输入姓名" style="width: 160px"></Input>
          </li>
          <li class="liStyle">
            <label for="">职位：</label>
            <Input v-model="selectJob" placeholder="请输入职位名称" style="width: 160px"></Input>
          </li>
          <li class="liStyle">
            <Button icon="ios-search" class="button" type="primary" @click="searchData()">搜 索</Button>
          </li>
        </ul>
        <Table :columns="column1" :data="selectData"></Table>
        <Page :total="total1" :current="currentPage1" class="paging" show-elevator @on-change="changepage1"></Page>
      </TabPane>
      <TabPane label="简历审核" name="3">
        <ul class="fillIn clear">
          <li class="liStyle">
            <label for="">姓名：</label>
            <Input v-model="reviewName" placeholder="请输入姓名" style="width: 160px"></Input>
          </li>
          <li class="liStyle">
            <label for="">职位：</label>
            <Input v-model="reviewJob" placeholder="请输入职位名称" style="width: 160px"></Input>
          </li>
          <li class="liStyle">
            <Button icon="ios-search" class="button" type="primary" @click="searchData()">搜 索</Button>
          </li>
        </ul>
        <Table :columns="column2" :data="checkData"></Table>
        <Page :total="total2" :current="currentPage2" class="paging" show-elevator @on-change="changepage2"></Page>
      </TabPane>
      <TabPane label="回收站" name="0">
        <ul class="fillIn clear">
          <li class="liStyle">
            <label for="">姓名：</label>
            <Input v-model="deleteName" placeholder="请输入姓名" style="width: 160px"></Input>
          </li>
          <li class="liStyle">
            <label for="">职位：</label>
            <Input v-model="deleteJob" placeholder="请输入职位名称" style="width: 160px"></Input>
          </li>
          <!-- <li class="liStyle">
            <span>状态：</span>
            <Select v-model="status" style="width: 120px">
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
        <Page :total="total3" :current="currentPage3" class="paging" show-elevator @on-change="changepage3"></Page>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
import * as API from "@/api/company.js";
import tool from "../../../utils/formatDate";

export default {
  data () {
    return {
      userType: sessionStorage.getItem('userType') || 1,
      selectName: '',
      selectJob: '',
      reviewName: '',
      reviewJob: '',
      deleteName: '',
      deleteJob: '',
      status: '1',
      type: '1',
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
          width: 70,
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
          align: "center"
        },
        {
          title: "性别",
          key: "gender",
          align: "center",
          width: 70
        },
        {
          title: "年龄",
          key: "age",
          align: "center"
        },
        {
          title: "应聘职位",
          key: "job",
          align: "center",
          width: 180
        },

        {
          title: "申请日期",
          key: "applyDate",
          sortable: "true",
          align: "center",
          width: 180
        },
        {
          title: "操作",
          key: "action",
          width: 250,
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
                      this.handleDetails(params.row);
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
                      this.addReview(params.row);
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
                      this.handleDelete(params.row);
                    }
                  }
                },
                "不合适"
              )
            ]);
          }
        }
      ],
      column2: [
        {
          type: "index",
          title: "序号",
          width: 70,
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
          align: "center"
        },
        {
          title: "性别",
          key: "gender",
          align: "center",
          width: 70
        },
        {
          title: "年龄",
          key: "age",
          align: "center"
        },

        {
          title: "应聘职位",
          key: "job",
          align: "center",
           width: 180
        },

        {
          title: "申请日期",
          key: "applyDate",
          sortable: "true",
          align: "center",
          width: 180
        },
        {
          title: "操作",
          key: "action",
          width: 250,
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
                      this.handleDetails(params.row);
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
                      this.handleInvitation(params.row);
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
                      this.handleDelete(params.row);
                    }
                  }
                },
                "不合适"
              )
            ]);
          }
        }
      ],
      column3: [
        {
          type: "index",
          title: "序号",
          width: 70,
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
          align: "center"
        },
        {
          title: "性别",
          key: "gender",
          align: "center",
          width: 70
        },
        {
          title: "年龄",
          key: "age",
          align: "center"
        },
        {
          title: "应聘职位",
          key: "job",
          align: "center",
          width: 180
        },
        {
          title: "申请日期",
          key: "applyDate",
          sortable: "true",
          align: "center",
          width: 180
        },
        {
          title: "操作",
          key: "action",
          width: 250,
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
                      this.handleDetails(params.row);
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
                      this.handleResume(params.row);
                    }
                  }
                },
                "恢复"
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
                      this.handleDel(params.row);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      selectData: [],
      checkData: [],
      deleteData: []
    };
  },
  methods: {
    changepage1 (val) {
      this.currentPage1 = val;
      this.initData();
    },
    changepage2 (val) {
      this.currentPage2 = val;
      this.initData();
    },
    changepage3 (val) {
      this.currentPage3 = val;
      this.initData();
    },

    handleDetails(row){
        //this.$router.push('')
    },
    // 添加审核
    addReview (row) {
      console.log(row);
      API.verifyResume({
        pid: row.pid,
        rid: row.rid
      }).then(res => {
        if (res.code == 200) {
          this.initData();
        }
      });
    },
    // 不合适
    handleDelete (row) {
      console.log(row);
      API.resumeUnsuit({
        pid: row.pid,
        rid: row.rid
      }).then(res => {
        if (res.code == 200) {
          this.initData();
        }
      });
    },
    // 邀请面试
    handleInvitation (row) {
      console.log(row);
      API.requestInterview({
        pid: row.pid,
        rid: row.rid
      }).then(res => {
        if (res.code == 200) {
          this.initData();
        }
      });
    },
    // 恢复
    handleResume (row) {
      console.log(row);
      API.resumeResume({
        pid: row.pid,
        rid: row.rid
      }).then(res => {
        if (res.code == 200) {
          this.initData();
        }
      });
    },
    //删除
    handleDel (row) {
      console.log(row);
      API.delResume({
        pid: row.pid,
        rid: row.rid
      }).then(res => {
        if (res.code == 200) {
          this.initData();
        }
      });
    },
    browseNotice (type) {
      this.type = type;
      this.initData();
    },
    searchData () {
      this.currentPage = 1;
      this.initData();
    },
    initData () {
      this.type == '1' ? this.selectData = [] : this.type == '3' ? this.checkData = [] : this.deleteData = [];
      API.searchDeliver({
        publicId: sessionStorage.getItem("userId"),
        pname: this.type == '1' ? this.selectJob : this.type == '3' ? this.reviewJob : this.deleteJob,
        rname: this.type == '1' ? this.selectName : this.type == '3' ? this.reviewName : this.deleteName,
        state: this.type,
        pageSize:10,
        pageNum:this.type == '1' ? this.currentPage1 : this.type == '3' ? this.currentPage2 : this.currentPage3,
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          _data.forEach(item => {
            item.gender == '1' ? item.gender = '男' : item.gender = '女';
            item.age = tool.getAge(item.birthday);
          });
          this.type == '1' ? this.total1 =res.total : this.type == '3' ? this.total2 = res.total : this.total3 = res.total;
          this.type == '1' ? this.selectData = _data : this.type == '3' ? this.checkData = _data : this.deleteData = _data;
        }
      });
    }
  },
  created () {
    this.initData();
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
</style>