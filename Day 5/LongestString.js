var l = 0;
var longest =  " ";
function longString(string) {
for (var i = 0; i < longest.length; i++) {
    if(longest[i].length > l) {
        l = longest[i].length;
        
    }     
    
  }
  return l; 
} 
longString("Hello itsssssss Me") 