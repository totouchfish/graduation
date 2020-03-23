<template>
  <!-- 简历管理页面 -->
  <div class="main">
    <ul class="fillIn clear">
      <li class="liStyle">
        <label for="">姓名：</label>
        <Input v-model="name" placeholder="请输入昵称" style="width: 160px"></Input>
      </li>
      <li class="liStyle">
        <label for="">求职意向：</label>
        <Input v-model="expectPost" placeholder="请输入姓名" style="width: 160px"></Input>
      </li>
      <li class="liStyle">
        <Button icon="ios-search" class="button" type="primary" @click="searchData()">搜 索</Button>
      </li>
    </ul>
    <Table :columns="column" :data="resumeData"></Table>
    <Page :total="total" :current="currentPage" class="paging" show-elevator @on-change="changepage()"></Page>
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
      name:'',
      expectPost:'',
      status:'0',    
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
          align: "center"
        },
        {
          title: "年龄",
          key: "age",
          align: "center"
        },
        {
          title: "性别",
          key: "gender",
          align: "center"
        },
        {
          title: "出生地",
          key: "birthAdress",
          align: "center"
        },
        {
          title: "职位意向",
          key: "expectPost",
          align: "center"
        },
        {
          title: "手机号",
          key: "phone",
          align: "center"
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
                    type: "primary",
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
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.handleShow(params);
                    }
                  }
                },
                "删除"
              ),
            ]);
          }
        }
      ],
      resumeData: []
    };
  },
  methods: {
    changepage (val) {
      this.currentPage = val;
    },
    initData(){
      this.resumeData = [];
      API.queryResumeAll({
           rname:this.name,
           expectPost:this.expectPost
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
           _data.forEach(item => {
          item.gender == '1' ? item.gender = '男' : item.gender = '女';
          item.age = tool.getAge(item.birthDate);
          item.birthAdress=item.birthProvince+"-"+item.birthCity;
           });
          this.resumeData = _data;
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