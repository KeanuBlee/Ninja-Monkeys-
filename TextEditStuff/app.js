(function(){
    var app = angular.module('myModule', []);

    app.controller("LanguageController", function(){
        this.products = options;
        this.currentOption = this.products[0].name;
        this.setOption = function(val){
            change(this.products[val].name);
            this.currentOption = this.products[val].name;
        };
    });

    var options = [
        {name: 'python'},
        {name: 'javascript'},
        {name: 'css'}
    ];
}) ();