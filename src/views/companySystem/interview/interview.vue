<template>
  <!-- 面试管理页面 -->
  <div class="main">
    <ul class="fillIn clear">
      <li class="liStyle">
        <label for="">姓名：</label>
        <Input v-model="userName" placeholder="请输入姓名" style="width: 160px"></Input>
      </li>
      <li class="liStyle">
        <label for="">职位：</label>
        <Input v-model="jobName" placeholder="请输入职位名称" style="width: 160px"></Input>
      </li>
      <li class="liStyle">
        <span>状态：</span>
        <Select v-model="status" style="width: 120px">
          <Option v-for="(item, index) in interviewStatus" :key="index" :value="item.value">{{item.label}}</Option>
          <!-- <Option value="4">未邀请</Option>
          <Option value="5">已邀请</Option>
          <Option value="6">未录取</Option>
          <Option value="7">已录取</Option> -->
        </Select>
      </li>
      <li class="liStyle">
        <Button icon="ios-search" class="button" type="primary" @click="searchData()">搜 索</Button>
      </li>
    </ul>
    <Table :columns="column" :data="interviewData"></Table>
    <Page :total="total" :current="currentPage" class="paging" show-elevator @on-change="changepage"></Page>
  </div>
</template>
<script>

import * as API from "@/api/company.js";
import tool from "../../../utils/formatDate";

export default {
  data () {
    return {
      userType: sessionStorage.getItem('userType') || 1,
      total: 10,
      currentPage: 1,
      userName: '',
      jobName: '',
      status: '10',

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
          width: 180
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
          align: "center",
          width: 70
        },
        {
          title: "应聘职位",
          key: "job",
          align: "center"
        },
        {
          title: "申请日期",
          key: "applyDate",
          align: "center",
          width: 150
        },
        {
          title: "状态",
          key: "status",
          align: "center",
          width: 110,
          render: (h, params) => {
            if (params.row.statusFlag) {
              let interviewStatus = this.interviewStatus.slice().splice(1);
              return h('Select', {
                props: {
                  value: params.row.status, // 获取选择的下拉框的值
                  size: 'small',
                  transfer: true
                },
                on: {
                  'on-change': e => {
                    params.row.value = e // 改变下拉框赋值
                    params.row.change = e; // 将改变的值存入暂存字段change
                  }
                }
              }, interviewStatus.map((item) => { // this.interviewStatus 下拉框里的data
                return h('Option', { // 下拉框的值
                  props: {
                    value: item.value,
                    label: item.label
                  }
                })
              }))
            } else {
              return h('span', {
                domProps: { innerHTML: params.row.statusFont }
              });
            }
          }
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
                    type: params.row.statusFlag ? "success" : "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.modifyStatus(params.row);
                    }
                  }
                },
                params.row.statusFlag ? "确认修改" : "修改状态"
              ),
            ]);
          }
        }
      ],
      interviewStatus: [
        {
          value: '10',
          label: '全部'
        },
        {
          value: '4',
          label: '未邀请'
        },
        {
          value: '5',
          label: '已邀请'
        },
        {
          value: '6',
          label: '未录取'
        }, {
          value: '7',
          label: '已录取'
        }
      ],
      interviewData: []
    };
  },
  methods: {
    changepage (val) {
      this.currentPage = val;
      this.initData();
    },
    searchData () {
      this.currentPage = 1;
      this.initData();
    },
    modifyStatus (row) {
      if (row.statusFlag) {
        // 修改状态接口
        API.updateInterviewState({
          pid: row.pid,
          rid: row.rid,
          state: row.change
        }).then(res => {
          if (res.code == 200) {
            this.initData();
            this.$Message.success('修改成功！');
          } else {
            this.$Message.error('修改失败！');
          }
        });
      } else {
        row.statusFlag = !row.statusFlag;
      }
    },
    initData () {
      this.interviewData = [];
      API.queryInterview({
        publicId: sessionStorage.getItem("userId"),
        pname: this.jobName,
        rname: this.userName,
        state: this.status,
        pageSize:10,
        pageNum:this.currentPage
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          _data.forEach(item => {
            if (item.status == '10') {
              item.statusFont = '全部'
            } else if (item.status == '4') {
              item.statusFont = '未邀请'
            } else if (item.status == '5') {
              item.statusFont = '已邀请'
            } else if (item.status == '6') {
              item.statusFont = '未录取'
            } else if (item.status == '7') {
              item.statusFont = '已录取'
            }
            item.gender == '1' ? item.gender = '男' : item.gender = '女';
            item.age = tool.getAge(item.birthday);
            item.applyDate = tool.formatDate2(item.applyDate);
            item.statusFlag = false;
            item.change = '';
          });
          this.total = res.total;
          this.interviewData = _data;
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