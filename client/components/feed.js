angular.module("app").component("feed", {
    // sweet alert message
    controller: function(
        feedbacks
    ) 
    
    
    {
      this.feeds = [];
       this.add = function(feed) {
        console.log("noooooooooooo")
            feedbacks.set(feed,function(data){
              console.log("status", data);
              if (data.data == 1) {
                console.log("hhhhh")
              }
                else {
                  console.log("noooooooooooo")
                }
            })
          };
          //this.feeeds = [];
          this.seefeedBack = function() {
            that = this
            feedbacks.getfeed(function(data) {
             
              console.log("datadatadatadata",data);
              that.feeds = data.data

              
            })
          }

         // this.getfeeds();
    },
    bindings: {},
    template: `
    <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </head>
<body>
             
  <header></header>
    <section id="contact">
      <div class="section-content">
        <h1 class="section-header">Welcome <span class="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Feedback</span></h1>
        <h3> We all need people who will give us feedback </h3>
        <meta name="viewport" content="width=device-width, initial-scale=1">

      </div>
  
  <form style="background-color:blue">
  <div class="form-group">
   <title> Welcome </title>
    Message:<input ng-model="feed.message" class="form-control" type="text">
  </div>
  <div class="form-group">
    
  
  <button type="button" class="btn btn-primary"  data-dismiss="modal" ng-click="$ctrl.add(feed)">Save changes</button>
  <button type="button" class="btn btn-primary"  data-dismiss="modal" ng-click="$ctrl.seefeedBack()">See all</button>


</div>
</form>
<ul ng-repeat="feeddata in $ctrl.feeds">
<li>{{feeddata.message}}</li>
</ul>
    </body> 
   
    `
  });
  