<template>
  <div>
    <Layout class="layout">
      <Header>
        <div class="header">
          <span>我的简历</span>
        </div>
      </Header>
      <Content class="content">
        <Table border :columns="columns" :data="myResume"></Table>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "index",
  data () {
    return {
      columns: [
        {
          title: '简历名称',
          key: 'resumeName'
        },
        {
          title: '更新日期',
          key: 'updateDate'
        },
        {
          title: '操作',
          key: 'action',
          width: 300,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.refresh(params)
                  }
                }
              }, '刷新'),
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '导出'),
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '编辑'),
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '预览'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '删除')
            ]);
          }
        }
      ],
      myResume: [
        {
          resumeName: "工作简历一",
          updateDate: "2019-11-10 13:15:00",
        }, {
          resumeName: "工作简历一",
          updateDate: "2019-11-10 13:15:00",
        }, {
          resumeName: "工作简历一",
          updateDate: "2019-11-10 13:15:00",
        }, {
          resumeName: "工作简历一",
          updateDate: "2019-11-10 13:15:00",
        }, {
          resumeName: "工作简历一",
          updateDate: "2019-11-10 13:15:00",
        }, {
          resumeName: "工作简历一",
          updateDate: "2019-11-10 13:15:00",
        }, {
          resumeName: "工作简历二",
          updateDate: "2019-11-10 13:15:00",
        },
      ],
    };
  },
  watch: {
  },
  components: {},
  computed: {},
  methods: {
    refresh(params){
      console.log(params.row.resumeName)
      this.$Message.success("简历的名字是："+params.row.resumeName)
    }
  },
  created () {

  }
};
</script>

<style scoped> 
.layout{
  width: 1000px;
  /* background-color: #f5f7f9; */
}
.header {
  font-size: 24px;
}
.content{
  margin-top: 20px;
}
</style>
