window.onload = function(){
  let resetbutton = document.getElementById("reset");
  // 時間給の初期値を定義
  let count = 0; 
  // スタート、ストップボタンを切り替えるためにボタンの親ノードを取得
  let div1 = document.getElementById("div1");
  // スタートボタンのDOM要素をidで取得
  let button = document.getElementById("start");
  // 背景画像の最初のimageを表示するためにactivebgに0を代入
  number = document.getElementById("price")
  // まずセレクトボックスのノードを取得
  element = document.getElementById("income");
  activebg = 0
  
    // 選択した画像ファイルを表示するHTMLを定義
    let html = `
      <div class = "select_image_container" id = "select_image_container">
        <input id="file-sample1" type="file" multiple/>
        <img id="file-preview1">
      </div>`
    let sic = document.getElementById('select_image_containers');
    // imageファイルを追加するための空の配列を作成
    let file_array = [];
    // 画像を変化させるタイミングを入れる空の配列を作成
    let t_array = [];



  // imageを取得するコード
  document.getElementById('file-sample1').addEventListener('change', function (e) {
    var file = e.target.files[0];
    var blobUrl = window.URL.createObjectURL(file);
    var img = document.getElementById('file-preview1');
    fileForm = document.getElementById("file-sample1");
    
    // image切り替え用のBlobUrlの配列を作成
    file_array.push(blobUrl);
    
    // 最初の画像ファイル選択の場合、ラベルをオフにしない
    if (file_array.length !== 1) {
      fileForm.disabled = true;
    }
    
    // 設定した画像の一番目の画像をデフォルトの画像にカウントスタート時〜2枚目の画像に切り替わるまでのデフォルト背景に設定する
    document.getElementsByClassName('bg-slider')[0].style.backgroundImage = "url("+file_array[0]+")";
    
    // ファイルを選択したら取得したimageの一覧を表示するhtmlを追加
    let elm = document.getElementById('select_image_containers');
    newelm = document.createElement('li');
    newelm.classList.add('select_image_container');
    newelm.setAttribute('id', 'select_image');
    if (file_array.length === 1) {
    newelm.innerHTML = "最初の背景: "+file.name;
  } else if (file_array.length !== 1){
    newelm.innerHTML = '<hr>'+'<br>'+file_array.length+"枚目の背景: "+file.name;
  }
    ul = document.querySelector('ul')
    ul.appendChild(newelm);

    button.style.opacity= "0.8";
    resetbutton.style.opacity= "0.8";
    fileForm.style.opacity= "0.8";
    number.style.opacity= "0.8";
    element.style.opacity= "0.8";

    // list要素の中にフォームを作る
    if (file_array.length !== 1){
      time_to_swich = document.createElement("input");
      time_to_swich.setAttribute("class", "time_to_swich")
      time_to_swich.setAttribute("type","number");
      time_to_swich.setAttribute("name","num");
      time_to_swich.setAttribute("puttern","[1-9][0-9]*");
      time_to_swich.setAttribute("min","0");
      time_to_swich.setAttribute("placeholder", "画像を切り替える値段を入力してください")
      // time_to_swich.setAttributeNode("id", "time_num");
      newelm.appendChild(time_to_swich);

      // 出来上がったli要素のなかのフォーム要素のidにインデックス番号を追加する
        $("input.time_to_swich").each(function(index, elem){
          $(elem).attr("id","time_to_swich"+(index+1));
        });
      
      // imageが変更されるタイミングを入力して選択を外したらフォームが消えて新たにspan要素が追加されるコード
      time_to_swich.onblur=function(){
        let swich_num1 = time_to_swich.value;
        time_to_swich.parentNode.removeChild(time_to_swich);
        stopTimeValue = document.createElement("span");
        stopTimeValue.setAttribute("class", "stopTimeValue")
        newelm.appendChild(stopTimeValue);
        stopTimeValue.innerText = "￥"+swich_num1;
        fileForm.disabled = false;
        $(".stopTimeValue").each(function(i, e){
          $(e).attr("id","stopTimeValue"+(i+1));
        });
        t_array.push(swich_num1);
        tnum_array = t_array.map(Number);
        console.log(tnum_array);
    }
  }
});

  // ここからボタンを押したら始まる関数
  window.onclickstart = function(){
    ul.parentNode.removeChild(ul);
    fileForm.parentNode.removeChild(fileForm);
    // カウントをストップした時に表示するノードを取得
    document.querySelector("h3").innerHTML = "";
    // カウントをストップした時に表示するノードを取得
    document.getElementById("is").innerHTML = "";
    // 入力してもらった時間給を取得しnumberに代入
    // let number = document.getElementById("price")
    // // まずセレクトボックスのノードを取得
    // var element = document.getElementById("income");
    // セレクトボックスの値を取り出し代入
    var element2 = element.value;
    // セレクトボックスの値によって計算式をわけ、numberを1秒分に分割しwageに代入
    switch (element2){
      case "月給":
        wage = number.value/23/8/60/60;
      break;
      case "日給":
        wage = number.value/8/60/60;
      break;
      case "時給":
        wage = number.value/60/60;
      break;
    }

    // 作業開始ボタンを削除して、その場所に新しく作業終了ボタンを作る
    start.parentNode.removeChild(start);  
    stop_btn = document.createElement("input");
    stop_btn.setAttribute("type","button");
    stop_btn.setAttribute("id","stop");
    stop_btn.setAttribute("value","作業終了");
    stop_btn.setAttribute("onclick","onclickstop()")
    div1.appendChild(stop_btn);

    // 作業終了ボタンを削除し、同じ場所に作業再開ボタンを作成する
    stop_btn.onclick=function(){ 
      clearInterval(counttime);
      stop_btn.parentNode.removeChild(stop_btn);
      start_btn = document.createElement("input");
      start_btn.setAttribute("type","button");
      start_btn.setAttribute("id","start");
      start_btn.setAttribute("value","作業再開");
      start_btn.setAttribute("onclick","onclickstart()")
      div1.appendChild(start_btn);
    }

    // 背景画像の遷移の関数
    jQuery(function($) {
      // 背景画像のスエードでの遷移をプラグインで設定。
    $('.bg-slider').bgSwitcher({
        // ユーザに設定してもらった画像ファイルをBlob URLの配列を背景画像に設定
        images: file_array,
        loop: false,
        start: false,
        duration: 3000
  });
});

  n = 0
  // ここで一度変数timeを定義し、関数timeのなかで計算と背景画像の遷移させる
  time();
  function time(){
  // 1秒分に分割された時間給をcountに代入し、ノードtimeisに¥単位で表示
  count = count + wage;
  document.getElementById("timeis").innerHTML = "¥"+Math.floor(count);
  // もし画像が設定されていなければ背景の遷移なしで動作する
  
  // 画像の切り替わる値段の配列のtnum_arrayが定義されていない場合は画像の切り替えは行わない条件分岐
  if (typeof tnum_array !== 'undefined') {
    // 指定した切り替わるタイミングで背景画像を切り替える
    if (tnum_array[n] < count) {
      $(".bg-slider").bgswitcher("next");
      n = n+1
    }
  }
}
// 関数timeを1秒ごとに繰り返す
counttime = setInterval(time,1000);

  // ストップボタンを押したら、h3要素にそれぞれ文字列が追加される。
  stop_btn.addEventListener("click",function(){
    document.querySelector("h3").innerHTML = "これまでの時間給は";
    document.getElementById("is").innerHTML = "です";
  });  
}

// 関数onclickstartはbottonのonclickで動くことを設定。
button.onclick = onclickstart;
resetbutton.addEventListener("click",function(){
  window.location.reload(false);
});
}