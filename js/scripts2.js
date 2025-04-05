          const element1 = document.getElementById("myBar1");
		  const mask_item1 = document.getElementById("hiddenElement1");
		  const mask_item2 = document.getElementById("hiddenElement2");
		  const mask_item3 = document.getElementById("hiddenElement3");
		  let show_YearRpt="" , show_SeasonRpt="" , show_MonthRpt="" , tr_line="" , itemYear_stockname="" ; 
          let width = 0 , intervalIds = [] , itemYear_arry1 = [] , itemYear_arry2 = [] , itemYear_arry3 = []  ;
		  let str_1="https://ws.api.cnyes.com/ws/api/v1/charting/history?resolution=1&symbol=TWS:", 
			  str_2="2449", 
			  str_3=":STOCK&quote=1" ,
			  ajaxURL= str_1 + str_2 + str_3 ,
			  s01_val="0" ; 				  
          window.addEventListener('load',function(){
	    // document.getElementById('hiddenElement').classList.add('displayElementYN');
		  if (mask_item1.style.display == "none" )
			  hiddenMsg1.style.display = "none" ; 
		  if (!mask_item1.style.displayElementYN ) { 
			  // console.log("NNN") ;
			  //  mask_item1.classList.add('displayElementYN');
				mask_item1.style.display = 'none';
			  // console.log(mask_item1.style.display) ;
			   }
            else 
			{ 
              // console.log(mask_item1.style.display) ;
		    }
		  getDATA();
          getWDATA();
          element1.style.width = '0%';  
          document.getElementById("s01").addEventListener("change", refreshTime); 
          document.getElementById("s02").addEventListener("change", optionSel); 			  
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
                   str_2=document.getElementById("s02").value ;
				   while(intervalIds.length){
                          clearInterval(intervalIds.pop());
                    }
				   if  (refSec != 99999 ) {
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
			
          function optionSel() {
			 s01_val=document.getElementById("s01").value ;
			 switch ( s01_val ) {
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
					
                   str_2= $(this).val() ;
				   getDATA();
                 //  str_2=document.getElementById("s02").value ;
				   while(intervalIds.length){
                          clearInterval(intervalIds.pop());
                    }
				   if  (refSec != 99999 ) {
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
			
                     
          function getDATA() {
           	   var d = new Date() , span_rpt="" ;
               $('#date1').html((d.getMonth()+1) + '/' + d.getDate() + '&nbsp;' + d.getHours() + ':'  + d.getMinutes());
               if (width === 100 ) {
				   width = 0; 
                   } else {
                    width += 7 ;
                   if (width > 95) width = width-95 ; 
                      element1.style.width = width + '%'; 
                   } 
				           	
                $.getJSON('https://ws.api.cnyes.com/ws/api/v1/charting/history?resolution=1&symbol=TWS:1102:STOCK&quote=1',function(data){
                    // console.log('success');
                  $.each(data,function(key1,item1){
                     if (key1 === 'data') {
                   	//  $('ul').append('<li>'+item1+'</li>');
                    var itemData = item1 ;
					span_rpt="<span class='span_rpt'>(<button onclick='showElement(1102);'>M</button>)</span><span class='span_rpt'>(<a href='./revenueS.json'>S</a>)</span><span class='span_rpt'>(<a href='./revenueY.json'>Y</a>)</span>" ; 	          
                    $.each(itemData,function(key2,item2){
                    	if (key2  === 'quote' ) {
                    		  var itemData2 = item2;
                    		//  console.log(itemData2); 	
                    		  $.each(itemData2,function(key3,item3){  
                             if (key3 === '200009') {
                 	           $("#span11").html(item3 + span_rpt); 
                             }
                             if (key3 === '6') {
                 	           $("#span12").html(item3);}
                             if (key3 === '11') {
                             	  if (item3> 0) 
                             	      {
                             	       	$("#span12").addClass("risePrice"); 
                             	       	$("#span13").addClass("risePrice"); 
                             	       // $("#span13").html("???" +???item3); 	
                             	      } 
                             	  else {
                             	  	 if (item3 === 0){ 
                             	  	 	 $("#span12").addClass("flatPrice"); 
                             	       $("#span13").addClass("flatPrice"); 		
                             	  	 }
                             	  	 else {
                             	  	 	 $("#span12").addClass("fellPrice"); 
                             	       $("#span13").addClass("fellPrice"); 	
                             	  	 }
                             	  }
                             	  $("#span13").html(item3); 
                             } 
                             if (key3 === '12') {
                 	               $("#span14").html(item3); 
                             }
                             if (key3 === '13') {
                 	               $("#span15").html(item3); 
                             } 
                        }) ;                 		
                    	}
                     });
                   //  console.log(item1[0]);
                       if ($("#span14").html() >= $("#span12").html() - $("#span13").html())
                       {
                       	  $("#span14").addClass("highestPrice");
                       }  
                       else {
                       	  $("#span14").addClass("lowestPrice");
                       }
                       if ($("#span15").html() >= $("#span12").html() - $("#span13").html())
                       {
                       	  $("#span15").addClass("highestPrice");
                       }  
                       else {
                       	  $("#span15").addClass("lowestPrice");
                       }                  
                  }
                 });
                });     
                     
              //  2nd stock section		  
                 $.getJSON('https://ws.api.cnyes.com/ws/api/v1/charting/history?resolution=1&symbol=TWS:2324:STOCK&quote=1',function(data){
                    // console.log('success');
                  $.each(data,function(key11,item11){
                     if (key11 === 'data') {
                     var itemData = item11 ;
					 span_rpt="<span class='span_rpt'>(<button onclick='showElement(2324);'>M</button>)</span><span class='span_rpt'>(<a href='./revenueS.json'>S</a>)</span><span class='span_rpt'>(<a href='./revenueY.json'>Y</a>)</span>" ; 	 
                   	//  $('ul').append('<li>'+item1+'</li>');                   	
                    var itemData11 = item11; 	          
                    $.each(itemData11,function(key21,item21){
                    	if (key21  === 'quote' ) {
                    		  var itemData21 = item21;
                    		 // console.log(itemData21); 	
                    		  $.each(itemData21,function(key31,item31){  
                             if (key31 === '200009') {
                 	              $("#span21").html(item31 + span_rpt); 
                             }
                             if (key31 === '6') {
                 	              $("#span22").html(item31); 
                             }
                             if (key31 === '11') {
                             	  if (item31> 0) 
                             	      {
                             	       	$("#span22").addClass("risePrice"); 
                             	       	$("#span23").addClass("risePrice"); 
                             	      } 
                             	  else {
                             	  	 if (item31 === 0){ 
                             	  	 	  $("#span22").addClass("flatPrice"); 
                             	        $("#span23").addClass("flatPrice"); 		
                             	  	 }
                             	  	 else {
                             	  	 	 $("#span22").addClass("fellPrice"); 
                             	       $("#span23").addClass("fellPrice"); 	
                             	  	 }
                             	  }
                             	  $("#span23").html(item31); 
                             } 
                             if (key31 === '12') {
                 	               $("#span24").html(item31); 
                             }
                             if (key31 === '13') {
                 	               $("#span25").html(item31); 
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
            //  Ending 2nd stock section 
            //  3rd stock section   
                 $.getJSON('https://ws.api.cnyes.com/ws/api/v1/charting/history?resolution=1&symbol=TWS:1102:STOCK&quote=1',function(data){
                    // console.log('success');
                  $.each(data,function(key11,item11){
                     if (key11 === 'data') {
                   	//  $('ul').append('<li>'+item1+'</li>');                   	
                    var itemData11 = item11; 
					span_rpt="<span class='span_rpt'>(<button onclick='showElement(1102);'>M</button>)</span><span class='span_rpt'>(<a href='./revenueS.json'>S</a>)</span><span class='span_rpt'>(<a href='./revenueY.json'>Y</a>)</span>" ; 	 					
                    $.each(itemData11,function(key21,item21){
                    	if (key21  === 'quote' ) {
                    		  var itemData21 = item21;
                    		 // console.log(itemData21); 	
                    		  $.each(itemData21,function(key31,item31){  
                             if (key31 === '200009') {
                 	              $("#span31").html(item31 + span_rpt); 	
                             }
                             if (key31 === '6') {
                 	              $("#span32").html(item31); 
                             }
                             if (key31 === '11') {
                             	  if (item31> 0) 
                             	      {
                             	       	$("#span32").addClass("risePrice"); 
                             	       	$("#span33").addClass("risePrice"); 
                             	       // $("#span13").html("???" +???item3); 	
                             	      } 
                             	  else {
                             	  	 if (item31 === 0){ 
                             	  	 	  $("#span32").addClass("flatPrice"); 
                             	        $("#span33").addClass("flatPrice"); 		
                             	  	 }
                             	  	 else {
                             	  	 	 $("#span32").addClass("fellPrice"); 
                             	       $("#span33").addClass("fellPrice"); 	
                             	  	 }
                             	  }
                             	  $("#span33").html(item31); 
                             } 
                             if (key31 === '12') {
                 	               $("#span34").html(item31); 
                             }
                             if (key31 === '13') {
                 	               $("#span35").html(item31); 
                             } 
                        }) ;                 		
                    	}
                     });
                   //  console.log(item1[0]);
                       if ($("#span34").html() >= $("#span32").html() - $("#span33").html())
                          {
                       	    $("#span34").addClass("highestPrice");
                          }  
                       else {
                       	  $("#span34").addClass("lowestPrice");
                          }
                       if ($("#span35").html() >= $("#span32").html() - $("#span33").html())
                          {
                       	  $("#span35").addClass("highestPrice");
                          }  
                       else {
                       	  $("#span35").addClass("lowestPrice");
                       }                  
                  }
                 });
                });    
              //  Ending 3rd stock section 
              //  4th stock section   
                 $.getJSON('https://ws.api.cnyes.com/ws/api/v1/charting/history?resolution=1&symbol=TWS:2330:STOCK&quote=1',function(data){
                    // console.log('success');
                  $.each(data,function(key11,item11){
                     if (key11 === 'data') {
                   	//  $('ul').append('<li>'+item1+'</li>');                   	
                    var itemData11 = item11; 
					span_rpt="<span class='span_rpt'>(<button onclick='showElement(2330);'>M</button>)</span><span class='span_rpt'>(<a href='./revenueS.json'>S</a>)</span><span class='span_rpt'>(<a href='./revenueY.json'>Y</a>)</span>" ; 	 					
                    $.each(itemData11,function(key21,item21){
                    	if (key21  === 'quote' ) {
                    		  var itemData21 = item21;
                    		 // console.log(itemData21); 	
                    		  $.each(itemData21,function(key31,item31){  
                             if (key31 === '200009') {
                 	              $("#tsmc1").html(item31 + span_rpt); 	
                             }
                             if (key31 === '6') {
                 	              $("#tsmc2").html(item31); 
                             }
                             if (key31 === '11') {
                             	  if (item31> 0) 
                             	      {
                             	       	$("#tsmc2").addClass("risePrice"); 
                             	       	$("#tsmc3").addClass("risePrice"); 
                             	      } 
                             	  else {
                             	  	 if (item31 === 0){ 
                             	  	 	$("#tsmc2").addClass("flatPrice"); 
                             	        $("#tsmc3").addClass("flatPrice"); 		
                             	  	 }
                             	  	 else {
                             	  	   $("#tsmc2").addClass("wi-fellPrice"); 
                             	       $("#tsmc3").addClass("wi-fellPrice"); 	
                             	  	 }
                             	  }
                             	  $("#tsmc3").html(item31); 
                             } 
                             if (key31 === '12') {
                 	               $("#tsmc4").html(item31); 
                             }
                             if (key31 === '13') {
                 	               $("#tsmc5").html(item31); 
                             } 
                        }) ;                 		
                    	}
                     });
                   //  console.log(item1[0]);
                       if ($("#tsmc4").html() >= $("#tsmc2").html() - $("#tsmc3").html())
                          {
                       	    $("#tsmc4").addClass("highestPrice");
                          }  
                       else {
                       	  $("#tsmc4").addClass("lowestPrice");
                          }
                       if ($("#tsmc5").html() >= $("#tsmc2").html() - $("#tsmc3").html())
                          {
                       	  $("#tsmc5").addClass("highestPrice");
                          }  
                       else {
                       	  $("#tsmc5").addClass("lowestPrice");
                       }                  
                  }
                 });
                });    
              //  Ending 4th stock section                            
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
              //  Option selected index  section
			 if (str_2 !="0") {
				 ajaxURL=str_1 + str_2 + str_3 ;
              //  console.log(ajaxURL);		 
                 $.getJSON(ajaxURL,function(data){
                    // console.log('success');
                  $.each(data,function(key11,item11){
                     if (key11 === 'data') {
                   	//  $('ul').append('<li>'+item1+'</li>');                   	
                    var itemData11 = item11; 
					// span_rpt="<span class='span_rpt'>(<button onclick='showElement(3481);'>M</button>)</span><span class='span_rpt'>(<a href='./revenueS.json'>S</a>)</span><span class='span_rpt'>(<a href='./revenueY.json'>Y</a>)</span>" ; 	 					
                    span_rpt="<span class='span_rpt'>(<button onclick='showElement(" + str_2 + " );'>M</button>)</span><span class='span_rpt'>(<a href='./revenueS.json'>S</a>)</span><span class='span_rpt'>(<a href='./revenueY.json'>Y</a>)</span>" ; 	 
					$.each(itemData11,function(key21,item21){
                    	if (key21  === 'quote' ) {
                    		  var itemData21 = item21;
                    		 // console.log(itemData21); 	
                    		  $.each(itemData21,function(key31,item31){  
                             if (key31 === '200009') {
                 	              $("#op11").html(item31 + span_rpt); 
                             }
                             if (key31 === '6') {
                 	              $("#op12").html(item31); 
                             }
                             if (key31 === '11') {
                             	  if (item31> 0) 
                             	      {
                             	       	$("#op12").addClass("risePrice"); 
                             	       	$("#op13").addClass("risePrice"); 
                             	      } 
                             	  else {
                             	  	 if (item31 === 0){ 
                             	  	 	$("#op12").addClass("flatPrice"); 
                             	        $("#op13").addClass("flatPrice"); 		
                             	  	 }
                             	  	 else {
                             	  	  $("#op12").addClass("fellPrice"); 
                             	       $("#op13").addClass("fellPrice"); 	
                             	  	 }
                             	  }
                             	  $("#op13").html(item31); 
                             } 
                             if (key31 === '12') {
                 	               $("#op14").html(item31); 
                             }
                             if (key31 === '13') {
                 	               $("#op15").html(item31); 
                             } 
                        }) ;                 		
                    	}
                     });
                   //  console.log(item1[0]);
                       if ($("#op14").html() >= $("#op12").html() - $("#op13").html())
                          {
                       	    $("#op14").addClass("highestPrice");
                          }  
                       else {
                       	  $("#op14").addClass("lowestPrice");
                          }
                       if ($("#op15").html() >= $("#op12").html() - $("#op13").html())
                          {
                       	  $("op15").addClass("highestPrice");
                          }  
                       else {
                       	  $("#op15").addClass("lowestPrice");
                       }                  
                  }
                 });
                });  					
				}			
              //  Ending Option selected index section  
               };  
               
                   
          function getWDATA() {
               /*
                if (firstVisit === false) {
                   document.getElementById("s01").addEventListener("change", myFunction);   
                } 
               */              	
                $.getJSON('https://ws.api.cnyes.com/ws/api/v3/universal/quote?type=IDXMAJOR&column=B&page=2&limit=10',function(data){
                    // console.log('success');
                  $.each(data,function(key1,item1){
                     if (key1 === 'data') {
                   	//  $('ul').append('<li>'+item1+'</li>');
                    var itemData = item1; 	          
                    $.each(itemData,function(key2,item2){
                    	if (key2  === 'items' ) {
                    		  var itemData2 = item2;
                    		  var itemDataTemp ;
                    		//  Dowjon - starting
                    		  $.each(itemData2[3],function(key3,item3){
                            if (key3 === '6') {
                 	           itemDataTemp = item3 ;
                 	            }
                    		if (key3 === '200009') {
                    		  	$("#dowjon").html(item3 + '<BR>' + itemDataTemp );
                             }   
                             if (key3 === '11') {
                 	              $("#dowjon-p").html(item3);                             	
                             	  if (item3> 0) 
                             	      {
                             	       	$("#dowjon-p").addClass("risePrice"); 
                             	       	$("#dowjon-p").addClass("risePrice"); 
                             	      } 
                             	  else {
                             	  	 if (item3 === 0){ 
                             	  	 	 $("#dowjon-p").addClass("flatPrice"); 
                             	       $("#dowjon-p").addClass("flatPrice"); 		
                             	  	 }
                             	  	 else {
                             	  	 	 $("#dowjon-p").addClass("fellPrice"); 
                             	       $("#dowjon-p").addClass("fellPrice"); 	
                             	  	 }
                             	  }
                             } 
                        }) ; 
                    		//  Dowjon - Ending  
                    		//  Nasdaq - starting
                    		  $.each(itemData2[5],function(key3,item3){
                    		  	if (key3 === '6') {
                 	              itemDataTemp = item3 ;
                 	            }
                    		  	if (key3 === '200009') {
                    		  		  $("#nasdaq").html(item3 + '<BR>' + itemDataTemp );
                             }   
                            if (key3 === '11') {
                  	            $("#nasdaq-p").html(item3);                              	
                             	  if (item3> 0) 
                             	      {
                             	       	$("#nasdaq-p").addClass("risePrice"); 
                             	       	$("#nasdaq-p").addClass("risePrice"); 
                             	      } 
                             	  else {
                             	  	 if (item3 === 0){ 
                             	  	 	 $("#nasdaq-p").addClass("flatPrice"); 
                             	       $("#nasdaq-p").addClass("flatPrice"); 		
                             	  	 }
                             	  	 else {
                             	  	 	 $("#nasdaq-p").addClass("fellPrice"); 
                             	       $("#nasdaq-p").addClass("fellPrice"); 	
                             	  	 }
                             	  }
                             } 
                        }) ; 
                    		//  Nasdaq - Ending  
                    		//  Sp500 - starting
                    		  $.each(itemData2[5],function(key3,item3){
                    		  	 if (key3 === '6') {
                 	              itemDataTemp = item3 ;
                 	            }
                    		  	 if (key3 === '200009') {
                    		  		  $("#sp500").html(item3 + itemDataTemp );
                             } 
                             if (key3 === '11') {
                  	            $("#sp500-p").html(item3);                              	
                             	  if (item3> 0) 
                             	      {
                             	       	$("#sp500-p").addClass("risePrice"); 
                             	       	$("#sp500-p").addClass("risePrice"); 
                             	      } 
                             	  else {
                             	  	 if (item3 === 0){ 
                             	  	 	 $("#sp500-p").addClass("flatPrice"); 
                             	       $("#sp500-p").addClass("flatPrice"); 		
                             	  	 }
                             	  	 else {
                             	  	 	 $("#sp500-p").addClass("fellPrice"); 
                             	       $("#sp500-p").addClass("fellPrice"); 	
                             	  	 }
                             	  }
                             } 
                        }) ; 
                    		//  Sp500 - Ending  
                    		//  pdpsc - starting
                    		  $.each(itemData2[7],function(key3,item3){  
                    		  	 if (key3 === '6') {
                 	              itemDataTemp = item3 ;
                 	            }
                    		  	 if (key3 === '200009') {
                    		  		  $("#pdpsc").html(item3 + itemDataTemp );
                             } 
                             if (key3 === '11') {
                  	            $("#pdpsc-p").html(item3);                              	
                             	  if (item3> 0) 
                             	      {
                             	       	$("#pdpsc-p").addClass("risePrice"); 
                             	       	$("#pdpsc-p").addClass("risePrice"); 
                             	      } 
                             	  else {
                             	  	 if (item3 === 0){ 
                             	  	 	 $("#pdpsc-p").addClass("flatPrice"); 
                             	       $("#pdpsc-p").addClass("flatPrice"); 		
                             	  	 }
                             	  	 else {
                             	  	 	 $("#pdpsc-p").addClass("fellPrice"); 
                             	       $("#pdpsc-p").addClass("fellPrice"); 	
                             	  	 }
                             	  }
                             } 
                        }) ; 
                    		//  pdpsc - Ending                 		                    		                         		              		
                    	}
                     });               
                  }
                 });
                }); 
               };  

       async function getYSMDATA2() {
			 var url = "https://marketinfo.api.cnyes.com/mi/api/v1/financialIndicator/revenue/TWS:2330:STOCK?resolution=Y&year=5&to=1561305600";
             $.getJSON(url)
               .done(function(data){
                  $.each(data,function(key1,item1){
                     if (key1 === 'data') {
                        var itemData = item1[0]; 	  
                        $.each(itemData,function(key2,item2){
                    	   if (key2  === 'revenue' ) {
							    itemYear_arry2= item2/1000;
                    		    var itemData2 = item2;
                    		    var itemDataTemp ;       		              		
                    	    }  
                        // YearRevenue - Ending   
						//  ***************************************
                    	   if (key2  === 'revenueYOY' ) {
							   	itemYear_arry3= item2;
                    		    var itemData2 = item2;
                    		    var itemDataTemp ;           		              		
                    	   }  
						 // YOY - Ending   
						 //  ***************************************						
                    	   if (key2  === 'time' ) {
							    itemYear_arry1= item2;
                    		    var itemData2 = item2;
                    		    var itemDataTemp ;            		              		
                    	   }  
						  // YOY - Ending    
						  //  ***************************************							
                        }); 
                     };
                  });
				console.log("AJAX request successfully completed.");
                })
                .fail(function(jqxhr, textStatus, error) {
                       $("#hiddenElement").html("<p>An error occurred while loading data.</p>");
                       console.error("AJAX request failed: " + textStatus + ", " + error);
                })
                .always(function() {
                       console.log("AJAX request completed (success or fail).");
                });                  		
			 //  return itemYear_arry2 ;
		  }

      function getYSMDATA() {
               /*
                if (firstVisit === false) {
                   document.getElementById("s01").addEventListener("change", myFunction);   
                } 
               */   	
			   
                $.getJSON('https://marketinfo.api.cnyes.com/mi/api/v1/financialIndicator/revenue/TWS:2330:STOCK?resolution=Y&year=5&to=1561305600',function(data){
                  $.each(data,function(key1,item1){
                     if (key1 === 'data') {
                   	   //  $('ul').append('<li>'+item1+'</li>');
                        var itemData = item1[0]; 	  
                        $.each(itemData,function(key2,item2){
                    	   if (key2  === 'revenue' ) {
							    itemYear_arry2= item2;
							//	console.log("Pass1:" + itemYear_arry2);
                    		    var itemData2 = item2;
                    		    var itemDataTemp ;
                    		   // YearRevenue - starting
                    		  $.each(itemData2,function(key3,item3){
								  //  console.log(item3) ;             
                 	              //   itemDataTemp = item3 ;
                                    /*            					     
									 $.each(itemDataTemp,function(i,val) {
                                         console.log ( i + val );
                                       });
                                     */
                                 }) ; 
                    		    // YearRevenue - Ending  
 		                         		              		
                    	}  //  ***************************************
                    	   if (key2  === 'revenueYOY' ) {
							   	itemYear_arry3= item2;
                    		    var itemData2 = item2;
                    		    var itemDataTemp ;
                    		   // YOY - starting
                    		  $.each(itemData2,function(key3,item3){
								  // console.log(item3) ;             
                                    /*            					     
									 $.each(itemDataTemp,function(i,val) {
                                         console.log ( i + val );
                                       });
                                     */
                                 }) ; 
                    		    // YOY - Ending              		              		
                    	}  //  ***************************************						
                    	   if (key2  === 'time' ) {
							    itemYear_arry1= item2;
                    		    var itemData2 = item2;
                    		    var itemDataTemp ;
                    		   // YOY - starting
                    		  $.each(itemData2,function(key3,item3){
								   //  console.log(item3) ;             
                                    /*            					     
									 $.each(itemDataTemp,function(i,val) {
                                         console.log ( i + val );
                                       });
                                     */
                                 }) ; 
                    		    // YOY - Ending              		              		
                    	}  //  ***************************************							

                      });               
                  }
                 });
                });	
			   //  console.log( "Pass1:" + itemYear_arry2) ;				
			   return itemYear_arry2 ;
            };  
	// **************************		   

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Begin
   function step1(stockNo) {
        return new Promise((resolve) => {
        setTimeout(() => {
			// Step1 URL Begin
			   $("#hiddenMsg1").html("<span>Wait data ...<span>"); 
			   if (mask_item1.style.display == "none" )
				   hiddenMsg1.style.display = "block" ;
				   var urlStr= "https://marketinfo.api.cnyes.com/mi/api/v1/financialIndicator/revenue/TWS:" + stockNo + ":STOCK?year=5&to=1572364800";
                $.getJSON(urlStr,function(data){
                  $.each(data,function(key1,item1){
                     if (key1 === 'data') {
                   	   //  $('ul').append('<li>'+item1+'</li>');
                        var itemData = item1[0]; 							
                        $.each(itemData,function(key2,item2){
						   if (key2  === 'name' ) {
                             itemYear_stockname = item2 ;
							 console.log(itemYear_stockname);
                            }								
                    	   if (key2  === 'revenue' ) {
							    itemYear_arry2= item2 ;
                    		    var itemData2 = item2;
                    		    var itemDataTemp ;
                    		   // YearRevenue - starting
                    		  $.each(itemData2,function(key3,item3){
								  //  console.log(item3) ;             
                 	              //   itemDataTemp = item3 ;
                                    /*            					     
									 $.each(itemDataTemp,function(i,val) {
                                         console.log ( i + val );
                                       });
                                     */
                                 }) ; 
                    		    // YearRevenue - Ending  
 		                         		              		
                    	}  //  ***************************************
                    	   if (key2  === 'revenueYOY' ) {
							   	itemYear_arry3= item2;
                    		    var itemData2 = item2;
                    		    var itemDataTemp ;
                    		   // YOY - starting
                    		  $.each(itemData2,function(key3,item3){
								  // console.log(item3) ;             
                                    /*            					     
									 $.each(itemDataTemp,function(i,val) {
                                         console.log ( i + val );
                                       });
                                     */
                                 }) ; 
                    		    // YOY - Ending              		              		
                    	}  //  ***************************************						
                    	   if (key2  === 'time' ) {
							  itemYear_arry1= item2 ;		
                    	}  //  ***************************************							

                      });               
                  }
                 });
                });		
			// Step1 URL End
           // console.log("Step 1 完成");
           resolve("Step 1 結果");
        }, 700);
       });
   }

   function step2() {
        return new Promise((resolve) => {
        setTimeout(() => {		 
			 tr_line ="",show_YearRpt="" ;
			 var item2comma=0 ;
             for (let i = 0; i < itemYear_arry1.length; i++) {
				 item2comma = (itemYear_arry2[i]/1000) + "" ;
				 item2comma = item2comma.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
				 tr_line = tr_line + '<tr><td>' + timestampToTime(itemYear_arry1[i]) + '</td><td>' + item2comma + '</td><td>' +　itemYear_arry3[i]　+'</td></tr>' ;
			 } ;
            // console.log("Pass3:" + tr_line) ;
           // console.log("Step 2 完成");
           resolve("Step 2 結果");
        }, 500);
      });
   }

   function step3() {
        return new Promise((resolve) => {
        setTimeout(() => {						 
		show_YearRpt='<table width="30%" style="color: rgb(132, 141, 151); font-size: 14px; text-align: right;">' + '<thead><tr><td style="width:40%">[' + itemYear_stockname + ']月財報</td><td style="width:40%">營收(千元)</td><td style="width:20%">年增率</td></thead><tbody>' + tr_line  + '</tbody></table>'  ;
         // console.log("Step 3 完成");
         resolve("Step 3 結果");
        }, 250);
    });
   }
   
   function step4() {
        return new Promise((resolve) => {
        setTimeout(() => {
            $("#hiddenElement1").html(show_YearRpt); 
			if (mask_item1.style.display == "none" )
			   {
				 hiddenMsg1.style.display = "none" ; 
                 mask_item1.style.display = "block"  // Change display to block to make it visible
               }
			else
      		     mask_item1.style.display = "none" ;

         // console.log("Step 4 完成");
         resolve("Step 4 結果");
        }, 10);
    });
   }

   // 使用 then 來串接 Promise，依序執行
   // ==========================
   step1()
      .then(result1 => {
        console.log(result1); // Step 1 結果
        return step2();        // 等 step2 完成後才進行下一步
       })
      .then(result2 => {
        console.log(result2);  // Step 2 結果
        return step3();        // 等 step3 完成後才進行下一步
       })
      .then(result3 => {
        console.log(result3);  // Step 3 結果
        console.log("所有步驟完成");
      })
      .catch(error => {
        console.log("出現錯誤: ", error);
      });
	// ===使用 then == Ending========================== */
	  
   async function executeStepsSequentially(stockNo) {
       try {
          let result1 = await step1(stockNo);
        // console.log(result1); // Step 1 結果

          let result2 = await step2();
        // console.log(result2); // Step 2 結果

          let result3 = await step3();
        // console.log(result3); // Step 3 結果
        
          let result4 = await step4() ; 

        // console.log(result4); // Step 4 結果 

        // console.log("所有步驟完成");
       } catch (error) {
          console.log("出現錯誤: ", error);
      }
     }

    // executeStepsSequentially();

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ End
   function timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) ;
      /*
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
	  */	
      //  return Y+M+D+h+m+s;
	  	console.log(Y) ;
	    return Y+M ;

    }



  
    // **************************
	  function showElement(stockNo) {
		 if  (mask_item1.style.display == "none" ) 
			  executeStepsSequentially(stockNo); 
         else
      		  mask_item1.style.display = "none" ;
		 //	example();
			// getYSMDATA2() ;
			// ajj= getYSMDATA2() ;
		    // console.log( "Pass2:" + itemYear_arry2) ;

			
			/*
			while(intervalIds.length){
                  clearInterval(intervalIds.pop());
             }
			*/ 

			 
        //  console.log(mask_item1.style.display) ;
		//	console.log (element.style.display) ;

	    }		 