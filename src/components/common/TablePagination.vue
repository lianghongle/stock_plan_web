<template>
    <div class="table-pagination">

        <el-table
                border
                stripe
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    v-for="colConfig in this.columns"
                    :prop="colConfig.field"
                    :label="colConfig.title"
            >
            </el-table-column>
        </el-table>

        <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 25, 50, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
        </el-pagination>

    </div>
</template>

<style>

</style>

<script>

    import axios from 'axios'

    export default {
        data() {
            return {
                total:0,
                currentPage:1,
                pageSize:10,
                tableData: []
            }
        },
        props:[
            'url',
            'columns',
        ],
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pageSize = val
                axios
                    .get(this.url, {
                        params:{
                            page:this.currentPage,
                            page_size:this.pageSize
                        }
                    })
                    .then(response => {
                        this.total = response.data.data.data.total_page
                        this.currentPage = response.data.data.data.current_page
                        this.tableData = response.data.data.data.list
                    })
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage = val
                axios
                    .get(this.url, {
                        params:{
                            page:this.currentPage,
                            page_size:this.pageSize,
                        }
                    })
                    .then(response => {
                        this.total = response.data.data.data.total_page
                        this.currentPage = response.data.data.data.current_page
                        this.tableData = response.data.data.data.list
                    })
            }
        },
        mounted () {
            axios
                .get(this.url)
                .then(response => {
                    // console.log(response.data.data.data)
                    this.total = response.data.data.data.total_page
                    this.currentPage = response.data.data.data.current_page
                    this.tableData = response.data.data.data.list
                })
        },
    };
</script>
