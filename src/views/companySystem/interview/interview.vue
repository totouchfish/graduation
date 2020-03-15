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
          <Option value="10">全部</Option>
          <Option value="4">未邀请</Option>
          <Option value="5">已邀请</Option>
          <Option value="6">未录取</Option>
          <Option value="7">已录取</Option>
        </Select>
      </li>
      <li class="liStyle">
        <Button icon="ios-search" class="button" type="primary" @click="searchData()">搜 索</Button>
      </li>
    </ul>
    <Table :columns="column" :data="interviewData"></Table>
    <Page :total="total" :current="currentPage" class="paging" show-elevator @on-change="changepage()"></Page>
  </div>
</template>
<script>

import * as API from "@/api/resumeHanlde.js";
import tool from "../../../utils/formatDate";

export default {
  data () {
    return {
      userType: sessionStorage.getItem('userType') || 1,
      total: 10,
      currentPage: 1,
      userName:'',
      jobName:'',
      status:'10',
     
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
            ]);
          }
        }
      ],
      interviewData: []
    };
  },
  methods: {
    changepage (val) {
      this.currentPage = val;
    },
    searchData(){
      this.initData();
    },
    initData () {
      API.queryInterview({
        publicId:"4",
        pname: this.jobName ,
        rname: this.userName,
        state: this.status       
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          _data.forEach(item => {
            item.gender == '1' ? item.gender = '男' : item.gender = '女';
            item.age = tool.getAge(item.birthday);
            item.applyDate=tool.formatDate2(item.applyDate)
          });
          this.interviewData=_data;
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