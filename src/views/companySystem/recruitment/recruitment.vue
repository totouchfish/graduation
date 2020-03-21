<template>
  <!-- 简历管理页面 -->
  <div class="main">
    <ul class="fillIn clear">
      <li class="liStyle">
        <label for="">职位：</label>
        <Input v-model="jobName" placeholder="请输入职位名称" style="width: 160px"></Input>
      </li>
      <li class="liStyle">
        <label for="">学历：</label>
        <Select v-model="degree" style="width: 120px">
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
        <Select v-model="status" style="width: 120px">
          <Option value="0">全部</Option>
          <Option value="1">招聘中</Option>
          <Option value="2">停止招聘</Option>
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

import * as API from "@/api/position.js";
import tool from "../../../utils/formatDate";

export default {
  data () {
    return {
      userType: sessionStorage.getItem('userType') || 1,
      total: 10,
      currentPage: 1,
      jobName: '',
      degree: '0',
      status: '0',
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
          key: "p_name",
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
          width: 100,
        },
        {
          title: "地点",
          key: "address",
          align: "center"
        },
        {
          title: "发布日期",
          key: "publicTime",
          align: "center",
          width: 100
        },
        {
          title: "状态",
          key: "state",
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
                      this.handleShow(params.row);
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
      selectData: []
    };
  },
  methods: {
    changepage (val) {
      this.currentPage = val;
    },
    searchData () {
      this.currentPage = 1;
      this.initData();
    },
    addData () {
      this.$router.push({
        name: 'add_recruitment',
        params:{
          id:'add'
        }
      })
    },
    handleShow(row){
        this.$router.push({
        name: 'add_recruitment',
        params:{
          id: row.p_id
        }
      })
    },
    initData () {
      this.selectData=[],
      API.queryPersonalPosition({
        pageNum:2,
        pageSize:10,
        publicId: "4",
        pname:this.jobName,
        degree:this.degree,
        state: this.status
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          _data.forEach(item => {
            item.state == '1' ? item.state = '招聘中' : item.state = '停止招聘';
            item.publicTime = tool.formatDate2(item.publicTime)
          });
          this.selectData = _data;
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
.add_button {
  float: right;
  margin-top: -20px;
}
</style>