//Component Object
Component({
    properties: {
        show:{
            type: Boolean,
            value: false,
        },

    },
    data: {
    },
    methods: {
        hideShareModal(){
            this.triggerEvent('hidemodal')
        }
    },
    created: function(){

    },
    attached: function(){

    },
    ready: function(){

    },
    moved: function(){

    },
    detached: function(){

    },
});