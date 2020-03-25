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
        <Page :total="total1" :current="currentPage1" class="paging" show-elevator @on-change="changepage"></Page>
      </TabPane>
      <TabPane label="未审核" name="0">
        <ul class="fillIn clear">
          <li class="liStyle">
            <label for="">企业名称：</label>
            <Input v-model="companyName2" placeholder="请输入企业名称" style="width: 160px"></Input>
          </li>
          <li class="liStyle">
            <label for="">法人名称：</label>
            <Input v-model="legalPerson2" placeholder="请输入法人名称" style="width: 160px"></Input>
          </li>
          <li class="liStyle">
            <Button icon="ios-search" class="button" type="primary" @click="searchData()">搜 索</Button>
          </li>
        </ul>
        <Table :columns="column2" :data="notReviewedData"></Table>
        <Page :total="total2" :current="currentPage2" class="paging" show-elevator @on-change="changepage"></Page>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>

import * as API from "@/api/admin.js";
import tool from "@/utils/formatDate"

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
      companyName2: '',
      legalPerson2: '',
      status: '1',
      type: '1',
      column1: [
        {
          type: "index",
          title: "序号",
          width: 80,
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
          key: "companyName",
          align: "center"
        },
        {
          title: "法代表人名称",
          key: "legalPersonName",
          align: "center"
        },
        {
          title: "企业联系方式",
          key: "companyPhone",
          align: "center"
        },
        {
          title: "省市",
          key: "address",
          align: "center"
        },
        {
          title: "企业官网",
          key: "companyUrl",
          align: "center"
        },
        {
          title: "申请日期",
          key: "registerTime",
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
                  style: {
                    marginRight: "10px"
                  },
                  on: {
                    click: () => {
                      this.handleUpdate(params.row);
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
          title: "企业名称",
          key: "companyName",
          align: "center"
        },
        {
          title: "法代表人名称",
          key: "legalPersonName",
          align: "center"
        },
        {
          title: "企业联系方式",
          key: "companyPhone",
          align: "center"
        },
        {
          title: "省市",
          key: "address",
          align: "center"
        },
        {
          title: "企业官网",
          key: "companyUrl",
          align: "center"
        },
        {
          title: "申请日期",
          key: "registerTime",
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
                      this.handlePass(params.row);
                    }
                  }
                },
                "通过"
              )
            ]);
          }
        }
      ],
      reviewedData: [],
      notReviewedData: []
    };
  },
  methods: {
    changepage1 (val) {
      this.currentPage1 = val;
    },
    changepage2 (val) {
      this.currentPage2 = val;
    },
     handleUpdate (row) {
      this.$router.push('update_review?id=' + row.vid);
    },
    handleDelete(row){
       API.delCertification({
        vid:row.vid
      }).then(res => {
        if (res.code == 200) {
          this.initData();
        }
      });
    },
    handlePass(row){
      API.updateState({
        vid:row.vid
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
      this.type == '1' ? this.reviewedData = [] : this.notReviewedData = [];
      API.queryCertification({
        companyName: this.type == '1' ? this.companyName : this.companyName2,
        legalPersonName: this.type == '1' ? this.legalPerson : this.legalPerson2,
        state: this.type,
        pageSize: 10,
        pageNum: this.type == '1' ? this.currentPage1 : this.currentPage2,
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          _data.forEach(item => {
            item.registerTime = tool.formatDate2(item.registerTime);
            item.address = item.companyProvince + "-" + item.companyCity;
          });
          this.type == '1' ? this.total1 = res.total : this.total2 = res.total;
          this.type == '1' ? this.reviewedData = _data : this.notReviewedData = _data;
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