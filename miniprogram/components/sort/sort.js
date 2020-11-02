//Component Object
Component({
    properties: {
        source:{
            type: Array,
            value: []
        },

    },
    data: {
        currentField: 'sales',  // 当前排序字段
        fieldValue: 1 // 当前排序值 1：降序   2： 升序
    },
    methods: {
        changeSortField(e){
            const { field, type } = e.currentTarget.dataset;
            this.setData({
                currentField: field,
                fieldValue: type==1? 2 : 1
            })
        }
    },
    created: function(){

    },
    attached: function(){
        const { source } = this.data;
        let sortObj = {};
        source.forEach(item => {
            sortObj[item.prop] = item.prop;
        })
    },
    ready: function(){

    },
    moved: function(){

    },
    detached: function(){

    },
});