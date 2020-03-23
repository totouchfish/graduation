<template>
  <!-- 简历管理页面 -->
  <div class="main">
    <ul class="fillIn clear">
      <li class="liStyle">
        <label for="">公告内容：</label>
        <Input v-model="noticeName" placeholder="请输入公告标题" style="width: 160px"></Input>
      </li>
      <li class="liStyle">
        <label for="">公告内容：</label>
        <Input v-model="noticeContent" placeholder="请输入公告内容" style="width: 160px"></Input>
      </li>
      <li class="liStyle">
        <Button icon="ios-search" type="primary" @click="searchData()">搜 索</Button>
      </li>
    </ul>
    <div>
      <Button icon="ios-add" class="add_button" type="primary" @click="addData()">新增公告</Button>
    </div>
    <div style="margin-top:60px;">
      <Table :columns="column" :data="tableData"></Table>
      <Page :total="total" :current="currentPage" class="paging" show-elevator @on-change="changepage()"></Page>
    </div>
  </div>
</template>
<script>

import * as API from "@/api/admin.js";
import tool from "../../../utils/formatDate";

export default {
  data () {
    return {
      userType: sessionStorage.getItem('userType') || 1,
      total: 10,
      currentPage: 1,
      noticeName: '',
      noticeContent: '',
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
          title: "公告标题",
          key: "noticeName",
          align: "center"
        },
        {
          title: "公告内容",
          key: "noticeContent",
          align: "center"
        },
        {
          title: "发布日期",
          key: "publicTime",
          align: "center"
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
                    type: "primary  ",
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
      tableData: []
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
        name: 'add_systemNotice',
        // params:{
        //   id:'1'
        // }
      })
    },
    handleShow(row){
        this.$router.push({
        name: 'add_systemNotice',
        params:{
          id: row.p_id
        }
      })
    },
    initData () {
      // this.tableData=[],
      // API.querySystemNotice({
      //   pageNum: this.currentPage,
      //   pageSize:10,
      //   pname:this.noticeName,
      //   content: this.noticeContent
      // }).then(res => {
      //   if (res.code == 200) {
      //     let _data = res.result;
      //     // _data.forEach(item => {
      //     //   item.state == '1' ? item.state = '招聘中' : item.state = '停止招聘';
      //     //   item.publicTime = tool.formatDate2(item.publicTime)
      //     // });
      //     this.tableData = _data;
      //   }
      // });
    }
  },
  created () {
    this.initData();
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
.add_button {
  float: right;
  margin-top: -20px;
}
</style>