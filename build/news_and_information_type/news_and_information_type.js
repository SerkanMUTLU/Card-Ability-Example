!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([,,,function(t,e,n){n(4),n(8);var o=n(12),i=n(13),a=n(14);$app_define$("@app-component/news_and_information_type",[],(function(t,e,n){a(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=o,n.exports.style=i})),$app_bootstrap$("@app-component/news_and_information_type",{packagerName:"fa-toolkit",packagerVersion:"2.6.2-Stable.302"})},function(t,e,n){var o=n(5),i=n(6),a=n(7);$app_define$("@app-component/card_title",[],(function(t,e,n){a(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=o,n.exports.style=i}))},function(t,e){t.exports={type:"div",attr:{},classList:["cardtitle_box"],children:[{type:"image",attr:{src:function(){return this.logoUrl}},classList:["cardtitle_title_img"]},{type:"text",attr:{value:function(){return this.title}},classList:["cardtitle_title"]}]}},function(t,e){t.exports={".cardtitle_box":{height:"83.33333px"},".cardtitle_title_img":{marginTop:"33.33333px",marginRight:"16.66667px",marginBottom:"16.66667px",marginLeft:"0px",width:"33.33333px",height:"33.33333px",borderRadius:"8.33333px"},".cardtitle_title":{lines:1,textOverflow:"ellipsis",color:"rgba(0,0,0,0.9)",fontSize:"25px",marginTop:"33.33333px",marginRight:"100px",marginBottom:"16.66667px",marginLeft:"0px"}}},function(t,e){t.exports=function(t,e,n){"use strict";t.exports={props:["title","logoUrl"],data:{title:"TITLE",logoUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAMGSURBVHhe7Zm/axRBFMff7mVPEwMWEoKCooVgIaicoIkBCztrwfwHdooglt7FUgKiXf6DCNZ2dpoo5FDBQrAQFJQQLIToxdyP9b3dl7txMxuzM7O7Z2Y+MHl3k9nsfL/zY+dtPFhYCcFifI7W4gzgaC3OAI7W4gzgaC3OAI7W4gzgaC3lGRBiCvK7Exf6XBLFG0BiN1A0lvnLx6Oy9b0MI4rLBqMR70axfukYNM4f4V/ENFa+wtzLz9gjD2BfJY4FkL8BgvB7KHwuITxJHY24X6AR+RkgjvgMjnhtZ+FJGk2cES/yN8K8AZrCk+RthDkDROGSNa5LXnuEvgE5C09i2gh1A/rCceOaOao91bMSL40vpEDLCDUDWHx9GoXnPOL/IpoRS2iEognZDSDxvzoQ3r7IFcOB9/AVwNhIZhNcLsDRWtSWwEYX1m7UcBvoRV/LJH4Y+DCx0ATYn30fUN8EW+VmcX9Bokezr39C/TG4RzCzB+BS6Ke0YkmbIZt4fki2pToZ0ZJLtKVC9zSA/gzAjtQmx+Hu2UlYbw86dbBagWvPPgKMoMfi1EShd/DscObQKGz24ltXfQ/efW/BPD7TAa/rQ+I7PXh69ST8EAwaD3x48HYVmqvrALj+ddA3oN2F66cmYPHKCa4Y4D1+vf2A0mrD0uxpmELTRJZRzPTie1zLAdcgZAAeuMKbF7hiwOzzT/DkwxpAIBimgJEl0OGR3C0tyfSV1e1E1numYf05wBnA0VqcARytxRnA0VqcARwLRZazZc/jzGDEgGolpfsp1WOUHySQ1UWk/I3Ue2ZEPxeg83oXiyyboxydFIh9pfbUlq4RIUGUCIl5Q9QEf9C7hyTUlq5ReAcgYuZ9AImSQh3kjyJp7WVitkyQoSmeUDOABAip71CAKbKKIdkNIPGYo986dxg9CNPGpjBIcuB78OjNt+3vHnaBmgHu/wJ7B2cAR2ux3gD1x+DPdhyHAdr4DgSZN0DCzEHoP8btARytxRnA0VqcARytxRnA0VqcARytxXIDAP4AUsZc4MS2z/wAAAAASUVORK5CYII="}};var o=e.default||t.exports,i=["public","protected","private"];if(o.data&&i.some((function(t){return o[t]})))throw new Error("For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.");o.data||(o.data={},o._descriptor={},i.forEach((function(t){var e=typeof o[t];if("object"===e)for(var n in o.data=Object.assign(o.data,o[t]),o[t])o._descriptor[n]={access:t};else"function"===e&&console.warn("For VM objects, attribute "+t+" value must not be a function. Change the value to an object.")})))}},function(t,e,n){var o=n(9),i=n(10),a=n(11);$app_define$("@app-component/card_bottom_3",[],(function(t,e,n){a(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=o,n.exports.style=i}))},function(t,e){t.exports={type:"div",attr:{},classList:["cardbottom3_box"],children:[{type:"text",attr:{value:function(){return this.buttonArray}},classList:["cardbottom3_button"]}]}},function(t,e){t.exports={".cardbottom3_box":{height:"100px",width:"100%"},".cardbottom3_button":{color:"#007DFF",fontSize:"29.16667px",fontWeight:"500"},".cardbottom3_buttonMargin":{marginLeft:"50px"}}},function(t,e){t.exports=function(t,e,n){"use strict";t.exports={props:["buttonArray"],data:{}};var o=e.default||t.exports,i=["public","protected","private"];if(o.data&&i.some((function(t){return o[t]})))throw new Error("For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.");o.data||(o.data={},o._descriptor={},i.forEach((function(t){var e=typeof o[t];if("object"===e)for(var n in o.data=Object.assign(o.data,o[t]),o[t])o._descriptor[n]={access:t};else"function"===e&&console.warn("For VM objects, attribute "+t+" value must not be a function. Change the value to an object.")})))}},function(t,e){t.exports={type:"div",attr:{widgetid:"fd112a16-ed5d-4e4c-b068-87dd80bd27c2"},classList:["newsandinformationtype_box"],children:[{type:"card_title",attr:{title:function(){return this.currencyCardTitle}}},{type:"div",attr:{},classList:["newsandinformationtype_content_box"],children:[{type:"block",attr:{},repeat:function(){return this.currencies},children:[{type:"div",attr:{},classList:function(){return[this.dividings[this.$idx],"newsandinformationtype_item_box"]},children:[{type:"div",attr:{},style:{flexDirection:"column",flex:1,alignSelf:"flex-end"},children:[{type:"div",attr:{},style:{flex:1,alignItems:"flex-start"},children:[{type:"text",attr:{value:function(){return this.$item.rate}},classList:["newsandinformationtype_textSizeBody2","newsandinformationtype_textColorPrimary","newsandinformationtype_textMedium","newsandinformationtype_lineTwo","newsandinformationtype_marginVerticalM"]}]},{type:"text",attr:{value:function(){return this.UpdatedTime}},classList:["newsandinformationtype_textColorTertiary","newsandinformationtype_textSizeCaption"]}]},{type:"image",attr:{src:function(){return this.$item.imgUrl}},classList:["newsandinformationtype_img","newsandinformationtype_marginHorizontalL"]}]}]}]},{type:"card_bottom_3",attr:{buttonArray:function(){return this.currencyCardButton}},events:{click:"redirectToApp"}}]}},function(t,e){t.exports={".newsandinformationtype_box":{flexDirection:"column",paddingTop:"0px",paddingRight:"33.33333px",paddingBottom:"0px",paddingLeft:"33.33333px"},".newsandinformationtype_content_box":{flexDirection:"column"},".newsandinformationtype_dividing":{borderBottomColor:"#989898",borderBottomWidth:"1px"},".newsandinformationtype_item_box":{paddingTop:"25px",paddingRight:"0px",paddingBottom:"25px",paddingLeft:"0px"},".newsandinformationtype_img":{width:"133.33333px",height:"83.33333px",borderRadius:"8.33333px"},".newsandinformationtype_textColorPrimary":{color:"rgba(0,0,0,0.9)"},".newsandinformationtype_textColorTertiary":{color:"rgba(0,0,0,0.38)"},".newsandinformationtype_textSizeBody2":{fontSize:"33.33333px"},".newsandinformationtype_textSizeCaption":{fontSize:"25px"},".newsandinformationtype_textMedium":{fontWeight:"500"},".newsandinformationtype_marginVerticalM":{marginBottom:"8.33333px"},".newsandinformationtype_marginHorizontalL":{marginLeft:"33.33333px"},".newsandinformationtype_lineTwo":{lines:2,textOverflow:"ellipsis"}}},function(t,e){t.exports=function(t,e,n){"use strict";var o=c(n("@app-module/system.fetch")),i=c(n("@app-module/system.router")),a=c(n("@app-module/system.app")),r=c(n("@app-module/system.package"));function c(t){return t&&t.__esModule?t:{default:t}}var s="com.dtse.banking";t.exports={data:{currencies:[{name:"GBP",rate:"0.00",imgUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAFY0lEQVR42u2baYgcVRSFbxJQ4zIqREXUBP2hqEncBUGDRMQFEcQl4oKJ/nEDg1EUFUlASQRFBHVcwETFFUTF/IgruOSHS1xwQzQ4JMExKrjghsbEc3hTmerq6u7prhrP7fF+cJjuanhzX516+61JFkiZpA7g/04YICYMEBMGiAkDxIQBYsIAMWGAmDBATBggJgwQEwaICQPEhAFiwgAxYYCYMEBMGCAmDBATBogJA8SEAWLCADH9YsBk6GBoLnToiIp8DH0GvQatgf5RBz0WvBuwLTQfugyanYt5S4fPQ9BD0P3Q9+pKtMOzASdBd0EHVChjI3QF9Iy6Mq3wasAS6EZLXU8WZ6envtVncp8lI7aYMzwasBS6zsZ2c9dD20B7WHsD+P1e6EpzZoI3A/iU3t3m93XQA9Aq6CvoZ2gKtCN0NHQhNM+SKWWcCz2lrmQeTwbMgD6CBnKxZU/rZugW6Fbo7w7lHAU9Ce1bqCfL+hE6yNLY4AJPBgxCl1pzN7IJWgA91kVZ0yxNSacVyiLLoBvUlc3wYsB2lp7KgZLfroHu6KHME6GXSq4PW2ptnVrSf4IXA86CnrbmgfRLSwuwXm8WF2XHl5Q7B3pTXeksGA/cDC225ht1PXRbhXI56D5eUi7/1xJ1pbNgPLDc0oq3yBHQ+xXK3clS1za1cP056Ax1pYknAy6y5vn79tCfFcvmzGq2NbaAIWucJcnwbsDk3oprgHtCC6zRgA3QdHOwKPNkwPyS67OgTyqWfSe0sOT6LpYWclK8GHCVpRtVHCzPg56oWDbXFoPWvL7Y1cKArXDO/qI1G8CWcXHFsnew0QVZnnUWXdBWuJczPPI3b8B30H7Qb+oAxwsvBpBHoQtKrnNwfkQd3HjhyYBjoLdyMWXdEXc9uYG2SR3geODJAPIGdGwutqw74jiwQh3ceODNAG4lv1Nyna2AR5Ob1QHWjQcDzoRuz32fkYstPyB/A/3VoaxfoEPUFeoGDwZwkF2ei6fXs19+/snS/L5v8GLAiprKCgN6oGyhxDPdty1tF2Rx8kn/HDrNWo8FvL5eXaFu8GBAKx6ELsnFmXU1HKjXqIOrC88G8NTq9ZLrPJi/SR1cXXg2gLBPH7DGFsA9o1PUgdWFdwNWQqdaowE8YDlMHVhdeDeg7JyA2xXHqQOri34woHhS9rClE64JgXcD3oMOt0YDmL44qA6sLjwbwPXBr4VrnOfPtLQemBB4NuAcSzmeWZxsAc+bk3SSuvBswGpLZwRZnDwPYAb0B+rA6sSrAWdbSlXMw0y2xerA6sajAXtb2mrY3UYH3hcs5Y+6SKitE28GMEuaL1/MsdF+/xVLG3CdzgL6Ek8GMA2RT/rc3DUOuswNOtDSUeXOllIKP7RkCFvKpzb2rIn9Le0jMVfod3WFiRcD9rSUFXGCjXY7HAOGoPMtdUutDmH+sLQ98bKl1sNt7OI7wuzO+KrrtZamt0wCu1pd6awCajiv543bq3CdN3FKD+X9AL0LfTHynTOnI63xvTGuJ9jNrVZX3oMB7Pd5ED/Tqh9JtntLsvjbWnNw0O/BAMLdTW6ycRzI3yimpn9rKSuCOf5sJdOtOXeo3edWv7GlnGzV3j+ojBcDyOXQPSOfOcjyZbpXLd2oPDwfYJfCfNLTLSVtdcuz0CLoa3WlPRlA+EY7T8G6yYjex9LMieJMiQM2+/vsiedYwixozpjYyvjK0lp1RTO8GVAHu1nqyjI4XR1WB9WKiWhAXxEGiAkDxIQBYsIAMWGAmDBATBggJgwQEwaICQPEhAFiwgAxYYCYMEBMGCAmDBATBogJA8SEAWLCADFhgJgwQEwYICYMEPMvzBj7YdwffSsAAAAASUVORK5CYII="},{name:"EUR",rate:"0.00",imgUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAE2UlEQVR42u2cW4hVVRzG/2pekjCExMugBInh5cULIl4SDaEbgwnlk04g+JBQWoIE+qIgKFgPvlQ+JF0I0iijQh8aR5AKbw9GCoKI90kLyczbFNP3sc5mNvucPXOOZ3bfOsf/Dz7mjOecPWvt39l77bPWfzvAHCkD1A142HEBYlyAGBcgxgWIcQFiXIAYFyDGBYhxAWJcgBgXIMYFiHEBYlyAGBcgxgWIcQFiXIAYFyDGBYhxAWJcgBgXIKaRBbQgC5CZyETkUeRp5E/kHHIBOY60I5fUjc2jEQUsRd5C5iCDq3j9v8hJ5EPkE+RvdQfSNJKA2cjO0s/uVPv7epz+/QayEdmF/KPuUNKwRuANZDsyxKrb6XkCkse/IquRH9Udi13AQGQH8mYBbf0JmavuYOwC+Klfb/mf7ovIB8hhC4Mv4VHCgfk55HkL40T2/RwXeCo7oe5gzALakI9S7UzvQA6kbyO7kXu9bINXRxtL20q//wtkubqDSWNi5CkLVy7DKzx3GVmMnKlhe9zZHMBHIfeRSch5dSdJrAK+RV608tPObWSG1bbzE7jT9yD7kQ3qDibEKGAhctAqn/dfQz6uY9tPWDgCbqo7mRCjgA4LErJ8Y+FLWHdNW4uc2ATw9HIs1bb0EcCrlqPqBvY3sQl438IXpKRtiYADFi4pm46YBPB6nVcmYys89wqyV93AIohJwCwLp5jswPsXMhq5q25gEcQk4B1kq5UL2Ie8rG5cUcQk4DvkBSsXwHmgnerGFYVSQCvytfXs6Ly2dFvtM6DZ2VAeXduEfc1FKeAHZJHVt3OredyFTEB+E/Y1F5WAacgvVv+nu5rHnyIrRf3sE5WA9yxMKyQ8gjxW4XVctbpV59961iKYds4jlkE4b/6nw8JpqmlxAWLUAh4v/ZxvYQo6C1e6Xqpj+5z1jHryTimAS4bfW3GDMCsgWDt0R9jHPlEK6ECeseIEcD05moWXPFQCJiOnCtw+F91ZJXdW1L+qUQngt9JXU7+z/GS8Vf5Ecw241iIqjh0rRH2rCfUgnDDIQv3mGCsXsMTCt+amJBYB5JCFMSELz+Pb1Y0ripgEvIuss/IjgJUMUdTwFEFMApYhX1q5gGsWxocudQOLICYBI5GryNAKz3E+p13dwCKISQD52UL1Q9K25GjgYv3r6sYVQWwC1ljP6ldaAGtBOad/Q93A/iY2ATwNXbdwWZqFZerr1Q3sb2ITQFgR3WblX8pYUjjd6v8GzbKXYRbuI5MTowCWlPMOFtb5Z6+I+O/z7MFrO1l1zeJcHkn71B1NOhYjm5FNOc8dsVCmcqXGbfJKipe5nAJnjakL6AXecsr5nOmpdqaPBu78tRaq5fqa7x9nQeYqC0uffL8LqAKeLjg90dLLazgefGZBFh//bqHEcUopraVkb/RwAVXC5cjPLZQm1lMXlH3OBdQAB+WvkKmpNruA/5kRFqrbeIf8kDq2w+VJ3jG/BflD3SnSKAISOCnHWlFO3D1p1R8BnRbuqOR/VXBa3Yk0jSYg3W7OGfF+YA62LaXwLsjOUljQdbwUzjFFOZvaqAKaBhcgxgWIcQFiXIAYFyDGBYhxAWJcgBgXIMYFiHEBYlyAGBcgxgWIcQFiXIAYFyDGBYhxAWJcgBgXIMYFiHEBYlyAmP8ArDD+YQAA5EkAAAAASUVORK5CYII="}],UpdatedTime:null,currencyCardTitle:"Currencies",currencyCardButton:"More Currencies",dividings:["newsandinformationtype_dividing","newsandinformationtype_dividing"]},onInit:function(){this.showMyMessage()},showMyMessage:function(t){var e=this;o.default.fetch({url:"https://api.exchangeratesapi.io/latest?base=TRY",success:function(t){var n=JSON.parse(t.data);if(!n.error){e.currencies[0].rate="GBP : "+n.rates.GBP.toFixed(3),e.currencies[1].rate="EUR : "+n.rates.EUR.toFixed(3);var o=new Date,i=o.getDate(),a=o.getMonth()+1,r=o.getFullYear(),c=o.getHours(),s=o.getMinutes();e.UpdatedTime="Based on TRY\nLast Updated : "+c+":"+s+"\t"+i+"/"+a+"/"+r}},fail:function(t,e){console.log("handling fail, code = "+e)}})},redirectToApp:function(){i.default.push({uri:"referenceapp://bank/currencies"})}};try{a.default.getPackageInfo({packageName:s,success:function(t){t.versionCode<t.deeplinkEnableVersionCode&&i.default.push({uri:"appmarket://details?id="+s})},fail:function(t,e){i.default.push({uri:"appmarket://details?id="+s})}})}catch(t){r.default.hasInstalled({package:s,success:function(t){console.log("handling success: "+t.result)},fail:function(t,e){i.default.push({uri:"appmarket://details?id="+s})}})}var d=e.default||t.exports,p=["public","protected","private"];if(d.data&&p.some((function(t){return d[t]})))throw new Error("For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.");d.data||(d.data={},d._descriptor={},p.forEach((function(t){var e=typeof d[t];if("object"===e)for(var n in d.data=Object.assign(d.data,d[t]),d[t])d._descriptor[n]={access:t};else"function"===e&&console.warn("For VM objects, attribute "+t+" value must not be a function. Change the value to an object.")})))}}]);