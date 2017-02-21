var line_1, line_2, line_3, line_4;
line_1 = query('.line-1');
line_2 = query('.line-2');
line_3 = query('.line-3');
line_4 = query('.line-4');

var line_1_lis = queryAll('li', line_1);
var line_2_lis = queryAll('li', line_2);
var line_3_lis = queryAll('li', line_3);
var line_4_lis = queryAll('li', line_4);

var assignActiveClass = function(clicked_target){
  var actived_li = null;
  var parent = clicked_target.parentNode;
  actived_li = query('.active', parent);
  if(actived_li !== null){
    actived_li.removeAttribute('class');
  }
  clicked_target.setAttribute('class', 'active');
};

var detectActiveState = function(child_node){
  var cross_actived = null;
  //이코드 수정 필요. 1번 선택하면 2~4번중 하나만 선택되게 하자.
  if(child_node.parentNode === line_1){
    cross_actived=query('.active', line_2);
    cross_actived=query('.active', line_3);
    cross_actived=query('.active', line_4);
  }else if(child_node.parentNode === line_2){
    cross_actived=query('.active', line_1);
    cross_actived=query('.active', line_3);
    cross_actived=query('.active', line_4);
  }else if(child_node.parentNode === line_3){
    cross_actived=query('.active', line_1);
    cross_actived=query('.active', line_2);
    cross_actived=query('.active', line_4);
  }else{
    cross_actived=query('.active', line_1);
    cross_actived=query('.active', line_2);
    cross_actived=query('.active', line_3);
  }
  return cross_actived
};

var switchNode = function(){
  //스위치 안되는 이유.
  var our_actived = this;
  var cross_actived = detectActiveState(our_actived.parentNode);
  if(cross_actived !== null){
    change(our_actived, cross_actived);
    cross_actived.removeAttribute('class');
  }else{
    assignActiveClass(our_actived);
  }
}
//**********************************************
//생각해 볼것. 그림이 한줄로 다 맞았을 때 어떻게 맞았습니다! 뜨게 할것인가
//만약 class name이 tree, anchor, cloud, rocket 다 한줄로 맞춰진다면 alert 정답입니다!
//if(line_1_lis .class ===fa-tree & )이런식이 될까..
//**********************************************

for(var i = 0; i<line_1_lis.length; i++){
  var line_1_li = line_1_lis.item(i);
  line_1_li.onclick = switchNode;
}
for(var i = 0; i<line_2_lis.length; i++){
  var line_2_li = line_2_lis.item(i);
  line_2_li.onclick = switchNode;
}
for(var i = 0; i<line_3_lis.length; i++){
  var line_3_li = line_3_lis.item(i);
  line_3_li.onclick = switchNode;
}
for(var i = 0; i<line_4_lis.length; i++){
  var line_4_li = line_4_lis.item(i);
  line_4_li.onclick = switchNode;
}
