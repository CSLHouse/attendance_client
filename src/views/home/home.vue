<style lang="less">
    @import "./home.less";
</style>
<template>
    <div class="home-main">

        <Card>
            <h1>Home</h1>
        </Card>

        <Row ><p class="record-type-name">考勤记录</p></Row>
        <Card :class="">
            <Row class-name="made-child-con-middle" type="flex" align="middle">
                <Col span="8"><p>选择时间</p></Col>
                <Col span="16" >
                <DatePicker @on-change="handleChange" type="daterange" :options="options2" placement="bottom-end" placeholder="请选择时间段" style="width: 200px"></DatePicker>
                </Col>

            </Row>
            <Row>
                <Table :columns="columns8" :data="data7" size="small" ref="table"></Table>
                <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出数据</Button>
            </Row>

        </Card>


    </div>
</template>

<script>
    import data from '../../data/data.js';
export default {
    name: 'home',
    data () {
        return {
            columns8: data.columns8,
            data7: data.data7,
            options2: data.options2,
            dataValue: null
        };
    },
    mounted () {
    },
    beforeDestroy () {

    },
    methods: {
        handleChange (daterange) {
            this.dataValue = daterange;
            // console.log(this.dataValue);
            var filterUrl = '/api/attendance';
            this.$axios.post(filterUrl, {
                'start': this.dataValue[0],
                'end': this.dataValue[1]
            })
                .then((respose) => {
                    ;
                }).catch(function (response) {
                ;
            });
        }

    }
};
</script>
