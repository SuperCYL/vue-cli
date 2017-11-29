<template>
  <div id="HelloWorld">
    <el-container>
      <el-header>Header</el-header>
      <el-radio-group v-model="tabPosition">
        <el-radio-button label="top">top</el-radio-button>
        <el-radio-button label="right">right</el-radio-button>
      </el-radio-group>
      <el-main>
        <div id="chartdiv"></div>
        <div class="saleList"></div>
        <el-table :data="tableData5" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="商品 ID" prop="id"></el-table-column>
          <el-table-column label="商品名称" prop="name"></el-table-column>
          <el-table-column label="描述" prop="desc"></el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from "axios"
import {} from '../assets/plugins/ammap'
import {} from '../assets/plugins/worldLow'
import {} from '../assets/plugins/export.min'
import {} from '../assets/plugins/export.css'
import {} from '../assets/plugins/light'
import {} from '../assets/plugins/reportChart.css'
import {} from '../assets/plugins/reportChart'
export default {
  name: 'HelloWorld',
  data () {
    return {
      tabPosition: 'top',
       tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
    }
  },
}
</script>

<style lang="scss" type="text/css" scoped>
  
</style>
