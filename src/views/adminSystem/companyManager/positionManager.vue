<template>
  <!-- 职位管理页面 -->
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
        <Page :total="total" :current="currentPage" class="paging" show-elevator @on-change="changepage"></Page>
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
      companyName: '',
      positionName: '',
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
          key: "pname",
          align: "center"
        },
        {
          title: "公司名称",
          key: "companyName",
          align: "center"
        },
        // {
        //   title: "发布者",
        //   key: "age",
        //   align: "center"
        // },
        {
          title: "工作地点",
          key: "address",
          align: "center"
        },
        {
          title: "发布日期",
          key: "publicTime",
          sortable: "true",
          align: "center"
        },
        {
          title: "状态",
          key: "state",
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
                      this.handleDelete(params.row);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      positionData: []
    };
  },
  methods: {
    changepage (val) {
      this.currentPage = val;
      this.initData();
    },
    searchData(){
      this.currentPage = 1;
      this.initData();
    },
    handleDelete(row){
      API.delPosition({
        pid:row.pid
      }).then(res => {
        if (res.code == 200) {
          this.initData();
        }
      });
    },
    initData () {
      this.selectData=[],
      API.queryPositionAll({
        pageNum:this.currentPage,
        pageSize:10,
        positionName:this.positionName.trim(),
        companyName:this.companyName.trim()
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          _data.forEach(item => {
            item.state == '1' ? item.state = '招聘中' : item.state = '停止招聘';
            item.publicTime = tool.formatDate2(item.publicTime);
            item.address=item.workProvince+"-"+item.workCity;
          });
          this.total=res.total;
          this.positionData = _data;
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