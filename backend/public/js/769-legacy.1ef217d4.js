"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[769],{769:function(t,e,o){o.r(e),o.d(e,{default:function(){return l}});var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("글을 작성하는 곳입니다")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),o("br"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.memo,expression:"memo"}],attrs:{cols:"30",rows:"10"},domProps:{value:t.memo},on:{input:function(e){e.target.composing||(t.memo=e.target.value)}}}),t._v(" "),o("br"),o("button",{on:{click:t.addmemo}},[t._v("제출")]),o("hr"),o("h1",[t._v("폼을 통해서 작성하는 곳입니다")]),t._m(0)])},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{attrs:{action:"/api/memo/writeform/form",method:"post"}},[o("input",{attrs:{type:"text",name:"title"}}),t._v(" "),o("br"),o("textarea",{attrs:{name:"memo",cols:"30",rows:"10"}}),o("br"),o("input",{attrs:{type:"submit",value:"제출"}})])}],m={data(){return{title:"",memo:""}},methods:{addmemo(){this.$http.post("/api/memo/writeform",{data:{title:this.title,memo:this.memo}}).then((t=>{console.log(t.data)})),this.$router.push("/")}}},n=m,i=o(1),s=(0,i.Z)(n,r,a,!1,null,null,null),l=s.exports}}]);
//# sourceMappingURL=769-legacy.1ef217d4.js.map