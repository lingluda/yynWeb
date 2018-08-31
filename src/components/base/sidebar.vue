<template>
 <Menu :theme="theme2">
            <MenuItem name="1">
                <Icon type="md-document" />
                文章管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="md-chatbubbles" />
                评论管理
            </MenuItem>
               <MenuItem name="3">
                <Icon type="md-chatbubbles" />
                评论管理
            </MenuItem>
</Menu>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      theme2: "dark"
    };
  }
};
</script>

<style scoped>
.layout-con {
  height: 100%;
  width: 100%;
}
ul.ivu-menu.ivu-menu-dark.ivu-menu-vertical{
    width: unset !important;
}
div.ivu-layout-sider-children{
    background: red;
}
</style>
