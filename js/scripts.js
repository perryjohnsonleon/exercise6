const element1 = document.getElementById("myBar1");
const mask_item1 = document.getElementById("ymsitem-msg");
let show_YearRpt="" , show_SeasonRpt="" , show_MonthRpt="" , tr_line="" , itemYear_stockname="" ; 
    let width = 0 , intervalIds = [] , itemYear_arry1 = [] , itemYear_arry2 = [] , itemYear_arry3 = []  ;			  
    window.addEventListener('load',function(){
  if (mask_item1.style.display == "none" )
    hiddenMsg1.style.display = "none" ; 
  getDATA();
  element1.style.width = '0%';  
  document.getElementById("s01").addEventListener("change", refreshTime); 			  
    });
                            
    function refreshTime() {
       switch ( $(this).val()) {
                case "0": 
                    width = 100;
        refSec = 99999 ;
                     element1.style.width = '0%'; 
                    break;
                case "1": 
                    refSec = 3000 ;
                     break;
                case "2":
                     refSec = 5000 ;
                     break;
                case "3": 
                     refSec = 10000 ;
                     break;
                case "4": 
                     refSec = 20000 ;
                     break;
                case "5": 
                     refSec = 30000 ;
                     break;
                case "6": 
                   refSec = 60000 ;
                     break;
                case "7": 
                     refSec = 600000 ;
                     break; 
                case "8": 
                    refSec = 900000 ;
                     break;
                case "9": 
                   refSec = 1200000 ;
                     break;
                case "10": 
                     refSec = 1800000 ;
                    break;                                     
                default:
                   return;
              } 
  //   console.log("Refresh time:",refSec);
     while(intervalIds.length){
         //  console.log("No0:",refSec);
                    clearInterval(intervalIds.pop());
              }
     if  (refSec != 99999 ) {
       // console.log("No1:",refSec);
         id = setInterval(getDATA,refSec);
         intervalIds.push(id); 
     }
     else 
     {
          while(intervalIds.length){
                    clearInterval(intervalIds.pop());
                  }
      
     }

      }

     function progresswidth {
          if (width === 100 ) {
            width = 0; 
                } 
          else {  
                  console.log("OKK!" + width.toString()) ; 
                  width += 7 ;
                  if (width > 95) width = width-95 ; 
                  element1.style.width = width + '%'; 
         } 

     } 

     function Createfetch(stockid,item1,item2,item3,item4,item5){
        // 1st stock start       
              $.getJSON('https://ws.api.cnyes.com/ws/api/v1/charting/history?resolution=1&symbol=TWS:1102:STOCK&quote=1',function(data){
                // console.log('success');
              $.each(data,function(key1,item1){
                 if (key1 === 'data') {
                 //  $('ul').append('<li>'+item1+'</li>');
                var itemData = item1 ;
                span_rpt="<span class='span_rpt'>(<button onclick='showElement(1102);'>M</button>)</span>" ; 	          
                $.each(itemData,function(key2,item2){
                  if (key2  === 'quote' ) {
                      var itemData2 = item2;
                    // console.log(itemData2); 	
                      $.each(itemData2,function(key3,item3){  
                         if (key3 === '200009') {
                          $("#item-11").html(item3 + span_rpt); 
                         }
                         if (key3 === '6') {
                          $("#item-12").html(item3);}
                         if (key3 === '11') {
                             if (item3> 0) 
                                 {
                                    $("#item-12").addClass("risePrice"); 
                                    $("#item-13").addClass("risePrice"); 
                                  // $("#item-13").html("???" +???item3); 	
                                 } 
                             else {
                                if (item3 === 0){ 
                                   $("#item-12").addClass("flatPrice"); 
                                  $("#item-13").addClass("flatPrice"); 		
                                }
                                else {
                                   $("#item-12").addClass("fellPrice"); 
                                  $("#item-13").addClass("fellPrice"); 	
                                }
                             }
                             $("#item-13").html(item3); 
                         } 
                         if (key3 === '12') {
                              $("#item-14").html(item3); 
                         }
                         if (key3 === '13') {
                              $("#item-15").html(item3); 
                         } 
                    }) ;                 		
                  }
                 });
               //  console.log(item1[0]);
                   if ($("#item-14").html() >= $("#item-12").html() - $("#item-13").html())
                   {
                       $("#item-14").addClass("highestPrice");
                   }  
                   else {
                       $("#item-14").addClass("lowestPrice");
                   }
                   if ($("#item-15").html() >= $("#item-12").html() - $("#item-13").html())
                   {
                       $("#item-15").addClass("highestPrice");
                   }  
                   else {
                       $("#item-15").addClass("lowestPrice");
                   }                  
              }
             });
            });   
          // 1st stock end  

      }   


                     
    function getDATA() {
        var d = new Date() , span_rpt="" ;
       //  $('#date1').html((d.getMonth()+1) + '/' + d.getDate() + '&nbsp;' + d.getHours() + ':'  + d.getMinutes());

         // 1st stock start       
          $.getJSON('https://ws.api.cnyes.com/ws/api/v1/charting/history?resolution=1&symbol=TWS:1102:STOCK&quote=1',function(data){
              // console.log('success');
            $.each(data,function(key1,item1){
               if (key1 === 'data') {
               //  $('ul').append('<li>'+item1+'</li>');
              var itemData = item1 ;
              span_rpt="<span class='span_rpt'>(<button onclick='showElement(1102);'>M</button>)</span>" ; 	          
              $.each(itemData,function(key2,item2){
                if (key2  === 'quote' ) {
                    var itemData2 = item2;
                  // console.log(itemData2); 	
                    $.each(itemData2,function(key3,item3){  
                       if (key3 === '200009') {
                        $("#item-11").html(item3 + span_rpt); 
                       }
                       if (key3 === '6') {
                        $("#item-12").html(item3);}
                       if (key3 === '11') {
                           if (item3> 0) 
                               {
                                  $("#item-12").addClass("risePrice"); 
                                  $("#item-13").addClass("risePrice"); 
                                // $("#item-13").html("???" +???item3); 	
                               } 
                           else {
                              if (item3 === 0){ 
                                 $("#item-12").addClass("flatPrice"); 
                                $("#item-13").addClass("flatPrice"); 		
                              }
                              else {
                                 $("#item-12").addClass("fellPrice"); 
                                $("#item-13").addClass("fellPrice"); 	
                              }
                           }
                           $("#item-13").html(item3); 
                       } 
                       if (key3 === '12') {
                            $("#item-14").html(item3); 
                       }
                       if (key3 === '13') {
                            $("#item-15").html(item3); 
                       } 
                  }) ;                 		
                }
               });
             //  console.log(item1[0]);
                 if ($("#item-14").html() >= $("#item-12").html() - $("#item-13").html())
                 {
                     $("#item-14").addClass("highestPrice");
                 }  
                 else {
                     $("#item-14").addClass("lowestPrice");
                 }
                 if ($("#item-15").html() >= $("#item-12").html() - $("#item-13").html())
                 {
                     $("#item-15").addClass("highestPrice");
                 }  
                 else {
                     $("#item-15").addClass("lowestPrice");
                 }                  
            }
           });
          });   
        // 1st stock end

        // *** 2nd stock start ***
           $.getJSON('https://ws.api.cnyes.com/ws/api/v1/charting/history?resolution=1&symbol=TWS:2330:STOCK&quote=1',function(data){
              // console.log('success');
            $.each(data,function(key1,item1){
               if (key1 === 'data') {
               //  $('ul').append('<li>'+item1+'</li>');
              var itemData = item1 ;
              span_rpt="<span class='span_rpt'>(<button onclick='showElement(1102);'>M</button>)</span>" ; 	          
              $.each(itemData,function(key2,item2){
                if (key2  === 'quote' ) {
                    var itemData2 = item2;
                  // console.log(itemData2); 	
                    $.each(itemData2,function(key3,item3){  
                       if (key3 === '200009') {
                        $("#item-21").html(item3 + span_rpt); 
                       }
                       if (key3 === '6') {
                        $("#item-22").html(item3);}
                       if (key3 === '11') {
                           if (item3> 0) 
                               {
                                  $("#item-22").addClass("risePrice"); 
                                  $("#item-23").addClass("risePrice"); 
                                // $("#item-13").html("???" +???item3); 	
                               } 
                           else {
                              if (item3 === 0){ 
                                 $("#item-22").addClass("flatPrice"); 
                                $("#item-23").addClass("flatPrice"); 		
                              }
                              else {
                                 $("#item-22").addClass("fellPrice"); 
                                $("#item-23").addClass("fellPrice"); 	
                              }
                           }
                           $("#item-23").html(item3); 
                       } 
                       if (key3 === '12') {
                            $("#item-24").html(item3); 
                       }
                       if (key3 === '13') {
                            $("#item-25").html(item3); 
                       } 
                  }) ;                 		
                }
               });
             //  console.log(item1[0]);
                 if ($("#item-24").html() >= $("#item-22").html() - $("#item-23").html())
                 {
                     $("#item-24").addClass("highestPrice");
                 }  
                 else {
                     $("#item-24").addClass("lowestPrice");
                 }
                 if ($("#item-25").html() >= $("#item-22").html() - $("#item-23").html())
                 {
                     $("#item-25").addClass("highestPrice");
                 }  
                 else {
                     $("#item-25").addClass("lowestPrice");
                 }                  
            }
           });
          });           
        // *** 2nd stock End ***

        // *** 3rd stock start ***
        $.getJSON('https://ws.api.cnyes.com/ws/api/v1/charting/history?resolution=1&symbol=TWS:2324:STOCK&quote=1',function(data){
         // console.log('success');
       $.each(data,function(key1,item1){
          if (key1 === 'data') {
          //  $('ul').append('<li>'+item1+'</li>');
         var itemData = item1 ;
         span_rpt="<span class='span_rpt'>(<button onclick='showElement(1102);'>M</button>)</span>" ; 	          
         $.each(itemData,function(key2,item2){
           if (key2  === 'quote' ) {
               var itemData2 = item2;
             // console.log(itemData2); 	
               $.each(itemData2,function(key3,item3){  
                  if (key3 === '200009') {
                   $("#item-31").html(item3 + span_rpt); 
                  }
                  if (key3 === '6') {
                   $("#item-32").html(item3);}
                  if (key3 === '11') {
                      if (item3> 0) 
                          {
                             $("#item-32").addClass("risePrice"); 
                             $("#item-33").addClass("risePrice"); 
                           // $("#item-13").html("???" +???item3); 	
                          } 
                      else {
                         if (item3 === 0){ 
                            $("#item-32").addClass("flatPrice"); 
                           $("#item-33").addClass("flatPrice"); 		
                         }
                         else {
                            $("#item-32").addClass("fellPrice"); 
                           $("#item-33").addClass("fellPrice"); 	
                         }
                      }
                      $("#item-33").html(item3); 
                  } 
                  if (key3 === '12') {
                       $("#item-34").html(item3); 
                  }
                  if (key3 === '13') {
                       $("#item-35").html(item3); 
                  } 
             }) ;                 		
           }
          });
        //  console.log(item1[0]);
            if ($("#item-34").html() >= $("#item-32").html() - $("#item-33").html())
            {
                $("#item-34").addClass("highestPrice");
            }  
            else {
                $("#item-34").addClass("lowestPrice");
            }
            if ($("#item-35").html() >= $("#item-32").html() - $("#item-33").html())
            {
                $("#item-35").addClass("highestPrice");
            }  
            else {
                $("#item-35").addClass("lowestPrice");
            }                  
       }
      });
     });            
        // *** 3rd stock End ***
        // *** 4th stock start ***
        $.getJSON('https://ws.api.cnyes.com/ws/api/v1/charting/history?resolution=1&symbol=TWS:2303:STOCK&quote=1',function(data){
         // console.log('success');
       $.each(data,function(key1,item1){
          if (key1 === 'data') {
          //  $('ul').append('<li>'+item1+'</li>');
         var itemData = item1 ;
         span_rpt="<span class='span_rpt'>(<button onclick='showElement(1102);'>M</button>)</span>" ; 	          
         $.each(itemData,function(key2,item2){
           if (key2  === 'quote' ) {
               var itemData2 = item2;
             // console.log(itemData2); 	
               $.each(itemData2,function(key3,item3){  
                  if (key3 === '200009') {
                   $("#item-41").html(item3 + span_rpt); 
                  }
                  if (key3 === '6') {
                   $("#item-42").html(item3);}
                  if (key3 === '11') {
                      if (item3> 0) 
                          {
                             $("#item-42").addClass("risePrice"); 
                             $("#item-43").addClass("risePrice"); 
                           // $("#item-43").html("???" +???item3); 	
                          } 
                      else {
                         if (item3 === 0){ 
                            $("#item-42").addClass("flatPrice"); 
                           $("#item-43").addClass("flatPrice"); 		
                         }
                         else {
                            $("#item-42").addClass("fellPrice"); 
                           $("#item-43").addClass("fellPrice"); 	
                         }
                      }
                      $("#item-43").html(item3); 
                  } 
                  if (key3 === '12') {
                       $("#item-44").html(item3); 
                  }
                  if (key3 === '13') {
                       $("#item-45").html(item3); 
                  } 
             }) ;                 		
           }
          });
        //  console.log(item1[0]);
            if ($("#item-44").html() >= $("#item-42").html() - $("#item-43").html())
            {
                $("#item-44").addClass("highestPrice");
            }  
            else {
                $("#item-44").addClass("lowestPrice");
            }
            if ($("#item-45").html() >= $("#item-42").html() - $("#item-43").html())
            {
                $("#item-45").addClass("highestPrice");
            }  
            else {
                $("#item-45").addClass("lowestPrice");
            }                  
       }
      });
     });            
        // *** 4th stock End ***
             
        // *** 5th stock start ***
        $.getJSON('https://ws.api.cnyes.com/ws/api/v1/charting/history?resolution=1&symbol=TWS:1301:STOCK&quote=1',function(data){
         // console.log('success');
       $.each(data,function(key1,item1){
          if (key1 === 'data') {
          //  $('ul').append('<li>'+item1+'</li>');
         var itemData = item1 ;
         span_rpt="<span class='span_rpt'>(<button onclick='showElement(1102);'>M</button>)</span>" ; 	          
         $.each(itemData,function(key2,item2){
           if (key2  === 'quote' ) {
               var itemData2 = item2;
             // console.log(itemData2); 	
               $.each(itemData2,function(key3,item3){  
                  if (key3 === '200009') {
                   $("#item-51").html(item3 + span_rpt); 
                  }
                  if (key3 === '6') {
                   $("#item-52").html(item3);}
                  if (key3 === '11') {
                      if (item3> 0) 
                          {
                             $("#item-52").addClass("risePrice"); 
                             $("#item-53").addClass("risePrice"); 
                           // $("#item-53").html("???" +???item3); 	
                          } 
                      else {
                         if (item3 === 0){ 
                            $("#item-52").addClass("flatPrice"); 
                           $("#item-53").addClass("flatPrice"); 		
                         }
                         else {
                            $("#item-52").addClass("fellPrice"); 
                           $("#item-53").addClass("fellPrice"); 	
                         }
                      }
                      $("#item-53").html(item3); 
                  } 
                  if (key3 === '12') {
                       $("#item-54").html(item3); 
                  }
                  if (key3 === '13') {
                       $("#item-55").html(item3); 
                  } 
             }) ;                 		
           }
          });
        //  console.log(item1[0]);
            if ($("#item-54").html() >= $("#item-52").html() - $("#item-53").html())
            {
                $("#item-54").addClass("highestPrice");
            }  
            else {
                $("#item-54").addClass("lowestPrice");
            }
            if ($("#item-55").html() >= $("#item-52").html() - $("#item-53").html())
            {
                $("#item-55").addClass("highestPrice");
            }  
            else {
                $("#item-55").addClass("lowestPrice");
            }                  
       }
      });
     });    
         
        // *** 5th stock End ***

        // *** 6th stock start ***
       $.getJSON('https://ws.api.cnyes.com/ws/api/v1/charting/history?resolution=1&symbol=TWS:2002:STOCK&quote=1',function(data){
         // console.log('success');
       $.each(data,function(key1,item1){
          if (key1 === 'data') {
          //  $('ul').append('<li>'+item1+'</li>');
         var itemData = item1 ;
         span_rpt="<span class='span_rpt'>(<button onclick='showElement(1102);'>M</button>)</span>" ; 	          
         $.each(itemData,function(key2,item2){
           if (key2  === 'quote' ) {
               var itemData2 = item2;
             // console.log(itemData2); 	
               $.each(itemData2,function(key3,item3){  
                  if (key3 === '200009') {
                   $("#item-61").html(item3 + span_rpt); 
                  }
                  if (key3 === '6') {
                   $("#item-62").html(item3);}
                  if (key3 === '11') {
                      if (item3> 0) 
                          {
                             $("#item-62").addClass("risePrice"); 
                             $("#item-63").addClass("risePrice"); 
                           // $("#item-13").html("???" +???item3); 	
                          } 
                      else {
                         if (item3 === 0){ 
                            $("#item-62").addClass("flatPrice"); 
                           $("#item-63").addClass("flatPrice"); 		
                         }
                         else {
                            $("#item-62").addClass("fellPrice"); 
                           $("#item-63").addClass("fellPrice"); 	
                         }
                      }
                      $("#item-63").html(item3); 
                  } 
                  if (key3 === '12') {
                       $("#item-64").html(item3); 
                  }
                  if (key3 === '13') {
                       $("#item-65").html(item3); 
                  } 
             }) ;                 		
           }
          });
        //  console.log(item1[0]);
            if ($("#item-64").html() >= $("#item-62").html() - $("#item-63").html())
            {
                $("#item-64").addClass("highestPrice");
            }  
            else {
                $("#item-64").addClass("lowestPrice");
            }
            if ($("#item-65").html() >= $("#item-62").html() - $("#item-63").html())
            {
                $("#item-65").addClass("highestPrice");
            }  
            else {
                $("#item-65").addClass("lowestPrice");
            }                  
       }
      });
     });   
         
        // *** 6th stock End ***

        //  Weighed index  section   
           $.getJSON('https://ws.api.cnyes.com/ws/api/v1/charting/history?symbol=TWS:TSE01:INDEX&resolution=D&quote=1&from=NaN&to=NaN',function(data){
              // console.log('success');
            $.each(data,function(key11,item11){
               if (key11 === 'data') {
               //  $('ul').append('<li>'+item1+'</li>');                   	
              var itemData11 = item11; 	          
              $.each(itemData11,function(key21,item21){
                if (key21  === 'o' ){
                   $("#wi-o").html(item21 + 'O' ); 
                  }
                if (key21  === 'h' ){
                   $("#wi-h").html(item21 + 'H' ); 
                   }
                if (key21  === 'l' ){
                   $("#wi-l").html(item21 + 'L'); 
                   }
                if (key21  === 'c' ){
                   $("#wi-c").html(item21 + 'C' );                     	                   	 	
                }
                
                if (key21  === 'quote' ) {
                    var itemData21 = item21;
                   // console.log(itemData21); 	
                    $.each(itemData21,function(key31,item31){  
                       if (key31 === '200009') {
                       //		$("#wi-t").addClass("wi-t"); 
                        //   $("#wi-t").html(item31); 
                       }
                       if (key31 === '11') {
                           if (item31> 0) 
                               {
                                  $("#wi-d").addClass("wi-risePrice"); 
                               } 
                           else {
                              if (item31 === 0){ 
                                $("#wi-d").addClass("wi-flatPrice");                             	  	 		
                              }
                              else {

                                $("#wi-d").addClass("wi-fellPrice"); 	
                              }
                           }
                           $("#wi-d").html(item31); 
                       } 
                  }) ;                 		
                }
               });
             //  console.log(item1[0]);
                 if ($("#span24").html() >= $("#span22").html() - $("#span23").html())
                    {
                       $("#span24").addClass("highestPrice");
                    }  
                 else {
                     $("#span24").addClass("lowestPrice");
                    }
                 if ($("#span25").html() >= $("#span22").html() - $("#span23").html())
                    {
                     $("#span25").addClass("highestPrice");
                    }  
                 else {
                     $("#span25").addClass("lowestPrice");
                 }                  
            }
           });
          });    
        //  Ending Weighed index section   
         };  
         
           
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Begin
