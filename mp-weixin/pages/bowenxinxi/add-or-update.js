(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bowenxinxi/add-or-update"],{"10c8":function(e,n,t){"use strict";t.r(n);var i=t("5432"),r=t.n(i);for(var u in i)"default"!==u&&function(e){t.d(n,e,(function(){return i[e]}))}(u);n["default"]=r.a},"14e6":function(e,n,t){"use strict";(function(e){t("d603"),t("921b");i(t("66fd"));var n=i(t("e020"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"26ce":function(e,n,t){"use strict";var i=t("944c"),r=t.n(i);r.a},5432:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,i,r,u,a){try{var o=e[u](a),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(i,r)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var a=e.apply(n,t);function o(e){u(a,i,r,o,s,"next",e)}function s(e){u(a,i,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("381f"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{bowenbiaoti:"",biaoqian:"",bowenleixing:"",tupian:"",neirong:"",faburiqi:"",yonghuming:"",youxiang:"",thumbsupnum:"",crazilynum:"",clicktime:"",clicknum:""},bowenleixingOptions:[],bowenleixingIndex:0,user:{},ro:{bowenbiaoti:!1,biaoqian:!1,bowenleixing:!1,tupian:!1,neirong:!1,faburiqi:!1,yonghuming:!1,youxiang:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=a(i.default.mark((function n(t){var r,u,a,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:return u=n.sent,this.user=u.data,this.ruleForm.yonghuming=this.user.yonghuming,this.ruleForm.youxiang=this.user.youxiang,n.next=9,this.$api.option("bowenleixing","bowenleixing",{});case 9:if(u=n.sent,this.bowenleixingOptions=u.data,this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=19;break}return this.ruleForm.id=t.id,n.next=17,this.$api.info("bowenxinxi",this.ruleForm.id);case 17:u=n.sent,this.ruleForm=u.data;case 19:if(!t.cross){n.next=74;break}a=e.getStorageSync("crossObj"),n.t0=i.default.keys(a);case 22:if((n.t1=n.t0()).done){n.next=74;break}if(o=n.t1.value,"bowenbiaoti"!=o){n.next=28;break}return this.ruleForm.bowenbiaoti=a[o],this.ro.bowenbiaoti=!0,n.abrupt("continue",22);case 28:if("biaoqian"!=o){n.next=32;break}return this.ruleForm.biaoqian=a[o],this.ro.biaoqian=!0,n.abrupt("continue",22);case 32:if("bowenleixing"!=o){n.next=36;break}return this.ruleForm.bowenleixing=a[o],this.ro.bowenleixing=!0,n.abrupt("continue",22);case 36:if("tupian"!=o){n.next=40;break}return this.ruleForm.tupian=a[o],this.ro.tupian=!0,n.abrupt("continue",22);case 40:if("neirong"!=o){n.next=44;break}return this.ruleForm.neirong=a[o],this.ro.neirong=!0,n.abrupt("continue",22);case 44:if("faburiqi"!=o){n.next=48;break}return this.ruleForm.faburiqi=a[o],this.ro.faburiqi=!0,n.abrupt("continue",22);case 48:if("yonghuming"!=o){n.next=52;break}return this.ruleForm.yonghuming=a[o],this.ro.yonghuming=!0,n.abrupt("continue",22);case 52:if("youxiang"!=o){n.next=56;break}return this.ruleForm.youxiang=a[o],this.ro.youxiang=!0,n.abrupt("continue",22);case 56:if("thumbsupnum"!=o){n.next=60;break}return this.ruleForm.thumbsupnum=a[o],this.ro.thumbsupnum=!0,n.abrupt("continue",22);case 60:if("crazilynum"!=o){n.next=64;break}return this.ruleForm.crazilynum=a[o],this.ro.crazilynum=!0,n.abrupt("continue",22);case 64:if("clicktime"!=o){n.next=68;break}return this.ruleForm.clicktime=a[o],this.ro.clicktime=!0,n.abrupt("continue",22);case 68:if("clicknum"!=o){n.next=72;break}return this.ruleForm.clicknum=a[o],this.ro.clicknum=!0,n.abrupt("continue",22);case 72:n.next=22;break;case 74:this.styleChange();case 75:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},faburiqiChange:function(e){this.ruleForm.faburiqi=e.target.value,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},bowenleixingChange:function(e){this.bowenleixingIndex=e.target.value,this.ruleForm.bowenleixing=this.bowenleixingOptions[this.bowenleixingIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.bowenbiaoti){e.next=3;break}return this.$utils.msg("博文标题不能为空"),e.abrupt("return");case 3:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){e.next=6;break}return this.$utils.msg("赞应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){e.next=9;break}return this.$utils.msg("踩应输入整数"),e.abrupt("return");case 9:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=12;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 12:if(!this.ruleForm.id){e.next=17;break}return e.next=15,this.$api.update("bowenxinxi",this.ruleForm);case 15:e.next=19;break;case 17:return e.next=19,this.$api.add("bowenxinxi",this.ruleForm);case 19:this.$utils.msgBack("提交成功");case 20:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},"944c":function(e,n,t){},e020:function(e,n,t){"use strict";t.r(n);var i=t("e248"),r=t("10c8");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("26ce");var a,o=t("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"275bc833",null,!1,i["a"],a);n["default"]=s.exports},e248:function(e,n,t){"use strict";var i={"w-picker":function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"381f"))}},r=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return i}))}},[["14e6","common/runtime","common/vendor"]]]);