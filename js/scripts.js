//дляфото
$(document).ready(function(){
//При нажатии на ссылку с классом poplight и href атрибутом тега <a> с #
  $('a.poplight[href^=#]').click(function() {
    var popID = $(this).attr('rel'); //получаем имя окна, важно не забывать, при добавлении новых, менять имя в атрибуте rel ссылки
    var popURL = $(this).attr('href'); //получаем размер из href атрибута ссылки
 
    //запрос и переменные из href url
    var query= popURL.split('?');
    var dim= query[1].split('&');
    var popWidth = dim[0].split('=')[1]; //первое значение строки запроса
 
    //Добавляем к окну кнопку закрытия
    $('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" title="Закрыть" class="close"></a>');
 
        //Определяем маржу(запас) для выравнивания по центру (по вертикали и горизонтали) - мы добавляем 80 к высоте / ширине с учетом отступов + ширина рамки определённые в css
    var popMargTop = ($('#' + popID).height() + 80) / 2;
    var popMargLeft = ($('#' + popID).width() + 80) / 2;
 
    //Устанавливаем величину отступа
    $('#' + popID).css({ 
      'margin-top' : -popMargTop,
      'margin-left' : -popMargLeft
    });
 
    //Добавляем полупрозрачный фон затемнения
    $('body').append('<div id="fade"></div>'); //div контейнер будет прописан перед тегом </body>.
    $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //полупрозрачность слоя, фильтр для тупого IE
 
    return false;
  });
 
  //Закрываем окно и фон затемнения
  $(document).on('click', 'a.close, #fade', function() { //закрытие по клику вне окна, т.е. по фону...
    $('#fade , .popup_block').fadeOut(function() {
        $('#fade, a.close').remove();  //плавно исчезают 
    });
    return false;
   });
});

// валидация
function validate_phone(val){
    var reg=/[^\d\s\+\(\)-]/g;
    return ((val.length>6)&&(val.length<21)&&(!reg.test(val)))?true:false;
}
function validate_name(val){
    var reg=/[^а-яА-Яa-zA-Z0-9ёЁ]/g;
    return ((val.length>2)&&(val.length<51)&&(val!='Ваше имя')&&(!reg.test(val)))?true:false;
}
function validate_mail(val){
    var reg=/^[0-9a-z_\.\-]+@[0-9a-z_]+\.[a-zA-z]{2,5}$/i;
    return ((val!='')&&(val!='Ваш Email')&&(reg.test(val)))?true:false;
}
function validate_text(val){
    return (val.length>6)?true:false;
}
// валидация

// подсчет стоимости доставки
function delivery_calc(){
    var price=0;
    switch($('#size-select').val()){
        case 'ширина 3м длина 4м':
            switch($('#city-select').val()){
                case 'Владивосток':price=1520;break;
                case 'Дальнее':price=2550;break;
                case 'Дальнегорск':price=1520;break;
                case 'Долинск':price=2130;break;
                case 'Комсомольск-на-Амуре':price=1050;break;
                case 'Корсаков':price=2550;break;
                case 'Луговое':price=2550;break;
                case 'Макаров':price=2990;break;
                case 'Ноглики':price=2990;break;
                case 'Оха':price=2990;break;
                case 'Поронайск':price=2990;break;
                case 'Смирных':price=2990;break;
                case 'Тымовское':price=2990;break;
                case 'Уссурийск':price=1520;break;
                case 'Хабаровск':price=0;break; // Бесплатная доставка
                case 'Холмск':price=2130;break;
                case 'Чегдомын':price=2000;break;
                case 'Южно-Сахалинск':price=2250;break;
            }
        break;
        case 'ширина 3м длина 6м':
            switch($('#city-select').val()){
                case 'Владивосток':price=1680;break;
                case 'Дальнее':price=2900;break;
                case 'Дальнегорск':price=1680;break;
                case 'Долинск':price=2500;break;
                case 'Комсомольск-на-Амуре':price=1250;break;
                case 'Корсаков':price=2900;break;
                case 'Луговое':price=2900;break;
                case 'Макаров':price=3500;break;
                case 'Ноглики':price=3500;break;
                case 'Оха':price=3500;break;
                case 'Поронайск':price=3500;break;
                case 'Смирных':price=3500;break;
                case 'Тымовское':price=3500;break;
                case 'Уссурийск':price=1680;break;
                case 'Хабаровск':price=0;break; // Бесплатная доставка
                case 'Холмск':price=2500;break;
                case 'Чегдомын':price=2200;break;
                case 'Южно-Сахалинск':price=2700;break;
            }
        break;
        case 'ширина 3м длина 8м':
            switch($('#city-select').val()){
                case 'Владивосток':price=1900;break;
                case 'Дальнее':price=3350;break;
                case 'Дальнегорск':price=1900;break;
                case 'Долинск':price=2950;break;
                case 'Комсомольск-на-Амуре':price=1380;break;
                case 'Корсаков':price=3350;break;
                case 'Луговое':price=3350;break;
                case 'Макаров':price=4100;break;
                case 'Ноглики':price=4100;break;
                case 'Оха':price=4100;break;
                case 'Поронайск':price=4100;break;
                case 'Смирных':price=4100;break;
                case 'Тымовское':price=4100;break;
                case 'Уссурийск':price=1900;break;
                case 'Хабаровск':price=0;break; // Бесплатная доставка
                case 'Холмск':price=2950;break;
                case 'Чегдомын':price=2500;break;
                case 'Южно-Сахалинск':price=3100;break;
            }
        break;
    }
    if(price==0){
        $('#delivery-cost').html('Бесплатная доставка');
    }else{
        $('#delivery-cost').html(price+' руб');
    }
    return false;
}

// Вывод названия транспортной компании в зависимости от выбранного города
function delivery_company(){
    var company='';
    switch($('#city-select').val()){
        case 'Владивосток':company='транспортной компанией «Трафик ДВ»';break;
        case 'Дальнее':company='транспортной компанией «Трафик ДВ»';break;
        case 'Дальнегорск':company='транспортной компанией «Трафик ДВ»';break;
        case 'Долинск':company='транспортной компанией «Трафик ДВ»';break;
        case 'Комсомольск-на-Амуре':company='транспортной компанией «Трафик ДВ»';break;
        case 'Корсаков':company='транспортной компанией «Трафик ДВ»';break;
        case 'Луговое':company='транспортной компанией «Трафик ДВ»';break;
        case 'Макаров':company='транспортной компанией «Трафик ДВ»';break;
        case 'Ноглики':company='транспортной компанией «Трафик ДВ»';break;
        case 'Оха':company='транспортной компанией «Трафик ДВ»';break;
        case 'Поронайск':company='транспортной компанией «Трафик ДВ»';break;
        case 'Смирных':company='транспортной компанией «Трафик ДВ»';break;
        case 'Тымовское':company='транспортной компанией «Трафик ДВ»';break;
        case 'Уссурийск':company='транспортной компанией «Трафик ДВ»';break;
        case 'Хабаровск':company='транспортом Флорида ДВ';break;
        case 'Холмск':company='транспортной компанией «Трафик ДВ»';break;
        case 'Чегдомын':company='Вагоном';break;
        case 'Южно-Сахалинск':company='компанией «Транслидер»';break;
    }
    $('#delivery-company').html(company);
    return false;
}

// подсчет стоимости для popup-order - после клацания на preorder
function teplica_price(v1,v2,v3){
    var res=0;
    if(v1=='Райский Сад'){
        if(v2=='длиной 4м'){
            if(v3=='Каркас')res=price['e_du_4']; if(v3=='Комплект')res=price['o_du_4']; if(v3=='Под ключ')res=price['v_du_4'];
        }
        if(v2=='длиной 6м'){
            if(v3=='Каркас')res=price['e_du_6']; if(v3=='Комплект')res=price['o_du_6']; if(v3=='Под ключ')res=price['v_du_6'];
        }
        if(v2=='длиной 8м'){
            if(v3=='Каркас')res=price['e_du_8']; if(v3=='Комплект')res=price['o_du_8']; if(v3=='Под ключ')res=price['v_du_8'];
        }
    }
  
  if(v1=='Эдем'){
        if(v2=='длиной 4м'){
            if(v3=='Каркас')res=price['e_dl_4']; if(v3=='Комплект')res=price['o_dl_4']; if(v3=='Под ключ')res=price['v_dl_4'];
        }
        if(v2=='длиной 6м'){
            if(v3=='Каркас')res=price['e_dl_6']; if(v3=='Комплект')res=price['o_dl_6']; if(v3=='Под ключ')res=price['v_dl_6'];
        }
        if(v2=='длиной 8м'){
            if(v3=='Каркас')res=price['e_dl_8']; if(v3=='Комплект')res=price['o_dl_8']; if(v3=='Под ключ')res=price['v_dl_8'];
        }
    }
  
    if(v1=='Дачница'){
        if(v2=='длиной 4м'){
            if(v3=='Каркас')res=price['e_ds_4']; if(v3=='Комплект')res=price['o_ds_4']; if(v3=='Под ключ')res=price['v_ds_4'];
        }
        if(v2=='длиной 6м'){
            if(v3=='Каркас')res=price['e_ds_6']; if(v3=='Комплект')res=price['o_ds_6']; if(v3=='Под ключ')res=price['v_ds_6'];
        }
        if(v2=='длиной 8м'){
            if(v3=='Каркас')res=price['e_ds_8']; if(v3=='Комплект')res=price['o_ds_8']; if(v3=='Под ключ')res=price['v_ds_8'];
        }
    }
  
    if(v1=='Синьор Помидор'){
        if(v2=='длиной 4м'){
            if(v3=='Каркас')res=price['e_md_4']; if(v3=='Комплект')res=price['o_md_4']; if(v3=='Под ключ')res=price['v_md_4'];
        }
        if(v2=='длиной 6м'){
            if(v3=='Каркас')res=price['e_md_6']; if(v3=='Комплект')res=price['o_md_6']; if(v3=='Под ключ')res=price['v_md_6'];
        }
        if(v2=='длиной 8м'){
            if(v3=='Каркас')res=price['e_md_8']; if(v3=='Комплект')res=price['o_md_8']; if(v3=='Под ключ')res=price['v_md_8'];
        }
    }
    //else{
        //if(v2=='длиной 4м'){
        //    if(v3=='Каркас')res=price['e_k_4']; if(v3=='Комплект')res=price['o_k_4']; if(v3=='Под ключ')res=price['v_k_4'];
       // }
        //if(v2=='длиной 6м'){
        //    if(v3=='Каркас')res=price['e_k_6']; if(v3=='Комплект')res=price['o_k_6']; if(v3=='Под ключ')res=price['v_k_6'];
       // }
        //if(v2=='длиной 8м'){
          //  if(v3=='Каркас')res=price['e_k_8']; if(v3=='Комплект')res=price['o_k_8']; if(v3=='Под ключ')res=price['v_k_8'];
        //}
    //}
  
  
    if(res>0){
        $('.btn-preorder').show();
        return res+' руб.';
    }
    else{
        $('.btn-preorder').hide();
        return '<span style="font-size:20px; color:#ff0000;" >Выберите другую комплектацию</span>';
    }
}

// вывод информационного сообщения
function show_success(title,msg){
    var l=Math.round($(document).width()/2-$('.popup-success').width()/2);
    var t=$(document).scrollTop()+20;
    $('.popup-success').css({left:l+'px',top:t+'px'});
    $('.popup-success .title').html(title);
    $('.popup-success .body').html(msg);
    //$('.popup-wrapper').fadeIn(200);
	$('.popup').css({"display":""});
    $('.popup-success').fadeIn(200);
	
    return false;
}

var timerId;

// подсчет стоимости в калькуляторе и вывод в калькулятор
function calculator_calculate(){
    var total=0, komplekt='', teplic='',spk='', length=0, line='', profile='', ekran=false, privod=false, kapel=false, poliv=false, verhfort=false, lenta=false, instal=false,  fundament=false; 
    // получаем буквы для ключей массива цен
    switch($('.i-name-komplekt > .checked').parent().text()){
        case 'Каркас':komplekt='k'; $('#poli, #fund, #micro').addClass( "dslb" ); break;
        case 'Комплект':komplekt='ko'; $('#poli, #fund, #micro').removeClass("dslb"); $('#fund, #micro').addClass( "dslb" );break;
        case 'Комплект + Фундамент':komplekt='kof';$('#poli, #fund, #micro').removeClass("dslb"); $('#micro').addClass( "dslb" );break;
        case 'Под ключ':komplekt='p';$('#poli, #fund, #micro').removeClass("dslb");break;
    }
    switch($('.i-name-teplic > .checked').parent().text()){
        case 'Райский Сад':teplic='r';break;
        case 'Эдем':teplic='e';break;
    case 'Дачница':teplic='d';break;
    case 'Синьор Помидор':teplic='s';break;
    }
    switch($('.i-name-length .checked').parent().text()){
        case '4':length='4';break;
        case '6':length='6';break;
        case '8':length='8';break;
		case '10':length='10';break;
    }
	
	switch($('.i-name-profile .checked').parent().text()){
        case '20x20':profile='20x20';break;
        case '20x40':profile='20x40';break;
    }
	
	switch($('.i-name-line .checked').parent().text()){
        case '0.5 метра':line='05';break;
        case '0.67 метра':line='067';break;
		case '1 метр':line='1';break;
    }
    //  switch($('.i-name-spk > .checked').parent().text()){
       // case 'СПК Класс ПРОФИ.':spk='p';break;
       // case 'СПК Класс СТАНДАРТ':spk='s';break;
   // }

   if (teplic === 'e'){
	   $('#xline').addClass( "dslb" );
	   line='';
   }
   else {
	    $('#xline').removeClass("dslb");
   }
   if (teplic === 's' || teplic === 'e'){
	   profile="20x20";
	   $('#xline').addClass( "dslb" );
	   $('#p40').addClass( "dslb" );
	   
	   line='';
   }
   else {
	   $('#p40').removeClass("dslb");
   }
   
    // стоимость теплицы
    total+=prc[komplekt+length+line+profile+teplic];
    
   
        // добавляем стоимость плюшек
		if (komplekt === 'p'){
        total+=$('.i-name-verhfort .checked').length?500:0;
        total+=$('.i-name-privod .checked').length?2000:0;
        total+=$('.i-name-kapel .checked').length?500:0;
        total+=$('.i-name-poliv .checked').length?1000:0;
		}
		
       // total+=$('.i-name-lenta .checked').length?price['lenta_'+teplic+'_'+length]:0;
    //total+=$('.i-name-fundament .checked').length?price['fundament_'+teplic+'_'+length]:0;
    total+=$('.i-name-instal .checked').length?prc['montaj'+length]:0;
   // total+=$('.i-name-spk:eq(0) .checked').length?0:0;
   if(komplekt !== 'k'){
    total+=$('.i-name-spk:eq(1) .checked').length?prc['poli' + length + 'p']:0;
   }
	if (komplekt === "kof" || komplekt === "p"){
	//total+=$('.i-name-fundament:eq(0) .checked').length?prc['fundament'+length+"s"]:0;
	total+=$('.i-name-fundament:eq(1) .checked').length?400:0;
	}
    //$('.i-name-spk:eq(1) > span:first-child')
    
    total+= $('#delivering').val() > 0 ? 350 + $('#delivering').val() * 10 : 0;

    $('#calc-cost-total span').html(Math.round(total));
    return false;
}

// для API ютуба - когда загружен проигрыватель, то вызывается эта функция,а в ней - получаем ссылку на плеер, что б им управлять
function onYouTubePlayerReady(playerId) {
  ytplayer = document.getElementById("myytplayer");
  ytplayer.playVideo();
}

// создание куки с помощью JavaScript
function setCookie(name, value, options) {
    options = options || {};
    var expires = options.expires;
    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires*1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) { 
        options.expires = expires.toUTCString();
    }
    value = encodeURIComponent(value);
    var updatedCookie = name + "=" + value;
    for(var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];    
        if (propValue !== true) { 
            updatedCookie += "=" + propValue;
        }
    }
    document.cookie = updatedCookie;
}





$(document).ready(function(){

    delivery_calc();    // малюем актуальную цену в доставке
    calculator_calculate();    // малюем актуальную цену в калькуляторе
    
    ytplayer=null;

// popup - общее
    $('.popup-wrapper').css({width:$(document).width()+'px',height:$(document).height()+'px'});
    $('.popup .close').click(function(){
        $('.popup-wrapper').fadeOut(200);
        $('.popup').fadeOut(200);
        $(this).parent().parent().find('input, textarea').val('').removeClass('error');
        $(this).parent().parent().find('.red-arrow').remove();
        $(this).parent().parent().find('.red-text').remove();
    });
    $('.popup-wrapper').click(function(){
        $('.popup-wrapper').fadeOut(200); 
        $('.popup').fadeOut(200);
        $('input, textarea').val('').removeClass('error');
        $('.red-arrow').remove();
        $('.red-text').remove();
    });
    
// popup-map
    $('.btn-map').click(function(){
        var l=Math.round($(document).width()/2-$('.popup-map').width()/2);
        var t=$(document).scrollTop()+20;
        $('.popup-map').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200); 
        $('.popup-map').fadeIn(200);
    });

    // popup-rekvizins
    $('.btn-rekviz').click(function(){
        var l=Math.round($(document).width()/2-$('.popup-rekviz').width()/2);
        var t=$(document).scrollTop()+20;
        $('.popup-rekviz').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200); 
        $('.popup-rekviz').fadeIn(200);
    });
// popup-proizv
      $('.btn-proizv').click(function(){
        var l=Math.round($(document).width()/2-$('.popup-proizv').width()/2);
        var t=$(document).scrollTop()+20;
        $('.popup-proizv').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200); 
        $('.popup-proizv').fadeIn(200);
    });

// popup-moboffice
      $('.btn-moboffice').click(function(){
        var l=Math.round($(document).width()/2-$('.popup-moboffice').width()/2);
        var t=$(document).scrollTop()+20;
        $('.popup-moboffice').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200); 
        $('.popup-moboffice').fadeIn(200);
    });


// popup-rass
      $('.btn-rass').click(function(){
        var l=Math.round($(document).width()/2-$('.popup-rass').width()/2);
        var t=$(document).scrollTop()+20;
        $('.popup-rass').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200); 
        $('.popup-rass').fadeIn(200);
    });


// popup-save
      $('.btn-save').click(function(){
        var l=Math.round($(document).width()/2-$('.popup-save').width()/2);
        var t=$(document).scrollTop()+20;
        $('.popup-save').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200); 
        $('.popup-save').fadeIn(200);
    });



// popup-cities
    $('.btn-cities').click(function(){
        var l=Math.round($(document).width()/2-$('.popup-cities').width()/2);
        var t=$(document).scrollTop()+20;
        $('.popup-cities').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200); 
        $('.popup-cities').fadeIn(200);
    });

// popup-preorder
    $('.btn-order').click(function(){
      /*  var l=Math.round($(document).width()/2-$('.popup-preorder').width()/2);
        var t=$(document).scrollTop()+20;
        $('.popup-preorder').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200); 
        $('.popup-preorder').fadeIn(200);*/
		$('.topLink').get(4).click();
    });

// popup-order
    $('.btn-preorder').click(function(){
        $('#order-info').val($('#order-info-string').html().replace(/<\/?[^>]+>/g, ''));
        var l=Math.round($(document).width()/2-$('.popup-order').width()/2);
        var t=$(document).scrollTop()+20;
        $('.popup-preorder').fadeOut(200);
        $('.popup-order').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200); 
        $('.popup-order').fadeIn(200);
    });

// back popup-order
    $('.popup-order .back').click(function(){
        var l=Math.round($(document).width()/2-$('.popup-preorder').width()/2);
        var t=$(document).scrollTop()+20;
        $('.popup-order').fadeOut(200);
        $('.popup-preorder').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200); 
        $('.popup-preorder').fadeIn(200);
    });

// popup-quick-order - на калькуляторе - вызов попапа "заказать"
    $('.btn-quick-order').click(function(){
        // приводим попап в соответствие с тем, что наклацали в калькуляторе
        // radioboxs
        $('#quick-order-v1').html($('.i-name-teplic > .checked').parent().text());
        $('#quick-order-v2').html($('.i-name-komplekt > .checked').parent().text());
        $('#quick-order-v3').html($('.i-name-length .checked').parent().text()+'м');
        // checkboxs и формируем строку info
        var chk;
        var info_ekran='',info_privod='',info_kapel='',info_poliv='',info_verhfort='',info_lenta='',info_spk='', info_fundament='', info_instal='', info='';
        chk=$('.i-name-ekran .checked').parent(); chk.find('.help-info').remove();
        info_ekran=chk.text().trim();
        chk=$('.i-name-privod .checked').parent(); chk.find('.help-info').remove();
        info_privod=chk.text().trim();
        chk=$('.i-name-kapel .checked').parent(); chk.find('.help-info, small').remove();
        info_kapel=chk.text().trim();
        chk=$('.i-name-poliv .checked').parent(); chk.find('.help-info').remove();
        info_poliv=chk.text().trim();
        chk=$('.i-name-verhfort .checked').parent(); chk.find('.help-info').remove();
        info_verhfort=chk.text().trim(); 
        chk=$('.i-name-lenta .checked').parent(); chk.find('.help-info').remove();
        info_lenta=chk.text().trim(); 
    chk=$('.i-name-spkprof .checked').parent(); chk.find('.help-info').remove();
        info_spkp=chk.text().trim(); 
    chk=$('.i-name-spkstand .checked').parent(); chk.find('.help-info').remove();
        info_spks=chk.text().trim(); 
    chk=$('.i-name-fundament .checked').parent(); chk.find('.help-info').remove();
        info_fundament=chk.text().trim();  
    chk=$('.i-name-instal .checked').parent(); chk.find('.help-info').remove();
        info_instal=chk.text().trim();  
        chk=$('.i-name-spk .checked').parent(); chk.find('.help-info').remove();
        info_spk=chk.text().trim(); 
    info+=info_ekran;
        info_privod=info&&info_privod?', '+info_privod:info_privod;info+=info_privod;
        info_kapel=info&&info_kapel?', '+info_kapel:info_kapel;info+=info_kapel;
        info_poliv=info&&info_poliv?', '+info_poliv:info_poliv;info+=info_poliv;
        info_verhfort=info&&info_verhfort?', '+info_verhfort:info_verhfort;info+=info_verhfort;
        info_lenta=info&&info_lenta?', '+info_lenta:info_lenta;info+=info_lenta;
    info_fundament=info&&info_fundament?', '+info_fundament:info_fundament;info+=info_fundament;
    info_instal=info&&info_instal?', '+info_instal:info_instal;info+=info_instal;
    info_spk=info&&info_spk?', '+info_spk:info_spk;info+=info_spk;
        info=info?' '+info+'.':'';
        $('#quick-order-v4').html(info);
        $('#quick-order-price').html($('#calc-cost-total span').html()+' руб');
        // показываем попап
        var l=Math.round($(document).width()/2-$('.popup-quick-order').width()/2);
        var t=$(document).scrollTop()+20;
        $('.popup-quick-order').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200);
        $('.popup-quick-order').fadeIn(200);
		$('[name=quick_order_phone]').mask("+7 (999) 999-9999");
    });

// popup-preorder select 1,2,3
    $('#select-type').live('change',function(){
        var price=teplica_price($(this).val(),$('#select-lenght').val(),$('#select-complect').val());
        $('#preorder-price').html(price);
        $('#order-price').html(price);
        $('#order-v1').html($(this).val());
    });
    $('#select-lenght').live('change',function(){
        var price=teplica_price($('#select-type').val(),$(this).val(),$('#select-complect').val());
        $('#preorder-price').html(price);
        $('#order-price').html(price);
        $('#order-v2').html($(this).val());
    });
    $('#select-complect').live('change',function(){
        var price=teplica_price($('#select-type').val(),$('#select-lenght').val(),$(this).val());
        $('#preorder-price').html(price);
        $('#order-price').html(price);
        $('#order-v3').html($(this).val());
    });

// popup-ask
    $('.btn-one').click(function(){
        var l=Math.round($(document).width()/2-$('.popup-one').width()/2);
        var t=$(document).scrollTop()+20;
        $('.popup-one').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200); 
        $('.popup-one').fadeIn(200);
		//$('[name=one_phone]').mask("+7 (999) 999-9999");
		
    });
    


// popup-text-du
    $('.btn-du').click(function(){
        var l=Math.round($(document).width()/2-$('.popup-du').width()/2);
        var t=$(document).scrollTop()+20;
        $('.popup-du').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200); 
        $('.popup-du').fadeIn(200);
    });
  
  
  // popup-text-dl
    $('.btn-dl').click(function(){
        var l=Math.round($(document).width()/2-$('.popup-dl').width()/2);
        var t=$(document).scrollTop()+20;
        $('.popup-dl').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200); 
        $('.popup-dl').fadeIn(200);
    });
  
    // popup-text-ds
    $('.btn-ds').click(function(){
        var l=Math.round($(document).width()/2-$('.popup-ds').width()/2);
        var t=$(document).scrollTop()+20;
        $('.popup-ds').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200); 
        $('.popup-ds').fadeIn(200);
    });
  
    // popup-text-md
    $('.btn-md').click(function(){
        var l=Math.round($(document).width()/2-$('.popup-md').width()/2);
        var t=$(document).scrollTop()+20;
        $('.popup-md').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200); 
        $('.popup-md').fadeIn(200);
    });


// popup-video
    $('.btn-video').click(function(){
        var l=Math.round($(document).width()/2-$('.popup-video').width()/2);
        var t=$(window).height()*0.5-$('.popup-video').height()*0.5+$(document).scrollTop();
        $('.popup-video').css({left:l+'px',top:t+'px'});
        $('.popup-wrapper').fadeIn(200); 
        $('.popup-video').fadeIn(200);
    });

// delivery-calc
    $('#calc').click(function(){
        if($('#calc-body').hasClass('close')){
            $('#calc-body').removeClass('close').addClass('work');
            $('#calc-body').slideToggle(200,function(){
                $('#calc-body').removeClass('work').addClass('open');
            });
            if($('#delivery-variant').hasClass('var2'))$('.row12').animate({height:'980px'},200);
        }
        if($('#calc-body').hasClass('open')){
            $('#calc-body').removeClass('open').addClass('work');
            $('#calc-body').slideToggle(200,function(){
                $('#calc-body').removeClass('work').addClass('close');
            });
            if($('#delivery-variant').hasClass('var2'))$('.row12').animate({height:'740px'},200);
        }

    });
    $('#city-select').bind('change',function(){
        // включаем вариант2
        if($(this).val()=='Другой город'){
            $('#delivery-variant').removeClass('var1').addClass('work');
            $('#delivery-res1').slideToggle(200,function(){
                $('#delivery-res2').slideToggle(200,function(){
                    $('#delivery-variant').removeClass('work').addClass('var2');
                });
                $('.row12').animate({height:'980px'},200);
            });
        // включаем вариант1, если включен вариант2
        }else{
            delivery_calc();
            delivery_company();
            if($('#delivery-variant').hasClass('var2')){
                $('#delivery-variant').removeClass('var2').addClass('work');
                $('#delivery-res2').slideToggle(200,function(){
                    $('#delivery-res1').slideToggle(200,function(){
                        $('#delivery-variant').removeClass('work').addClass('var1');
                    });
                    $('.row12').animate({height:'740px'},200);
                });
                $('#delivery-res2 input').val('').removeClass('error');
                $('#delivery-res2 .red-arrow').remove();
                $('#delivery-res2 .red-text').remove();
            }
        }
    });
    $('#to-email').click(function(){
        $('#field-telephone').slideToggle(200,function(){
            $('#field-telephone input').val('').removeClass('error');
            $('#field-email input').val('').removeClass('error');
            $('#field-email .red-arrow').remove();
            $('#field-email .red-text').remove();
            $('#field-email').slideToggle(200);
        })
    });
    $('#to-telephone').click(function(){
        $('#field-email').slideToggle(200,function(){
            $('#field-email input').val('').removeClass('error');
            $('#field-telephone input').val('').removeClass('error');
            $('#field-telephone .red-arrow').remove();
            $('#field-telephone .red-text').remove();
            $('#field-telephone').slideToggle(200);
        })
    });
    $('#size-select').bind('change',function(){
       delivery_calc(); 
    });

// отправка вопроса
    $('.btn-one-send').click(function(){
        var err=false;            
        $('.popup-ask input, .popup-one textarea').removeClass('error');
        $('.popup-ask .red-arrow').remove();
        $('.popup-ask .red-text').remove();
        if(!validate_name($('input[name=\'one_phone\']').val())){
            $('input[name=\'one_phone\']').addClass('error').after('<div class="red-arrow" ></div><div class="red-text" >Введите ваш телефон</div>');
            err=true;
        }
       
        if(!err){
            $.ajax({
                url: 'mailer.php',
          type: 'post',
          data: $("input[name='one_phone']"),
          dataType: 'html',
          success: function(html){

                    $('.popup').fadeOut(200);
                    $('input').val('').removeClass('error');
                    $('.red-arrow').remove();
                    $('.red-text').remove();
                    show_success('Спасибо за ваш заказ','Мы свяжемся с вами с 10 до 17 по вашему времени<br/>для подтверждения заказа и уточнения деталей.');

                    //location.href='thanks.php';
          },
          error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
          }
        });   //ajax
        }
        return false;
    });

// отправка заказа
    $('.btn-order-send').click(function(){
        var err=false;            
        $('.popup-order input').removeClass('error');
        $('.popup-order .red-arrow').remove();
        $('.popup-order .red-text').remove();
        if(!validate_phone($('input[name=\'order_phone\']').val())){
            $('input[name=\'order_phone\']').addClass('error').after('<div class="red-arrow" ></div><div class="red-text" >Введите ваш телефон</div>');
            err=true;
        }
        if(!validate_mail($('input[name=\'order_email\']').val())){
            $('input[name=\'order_email\']').addClass('error').after('<div class="red-arrow" ></div><div class="red-text" >Введите ваш email</div>');
            err=true;
        }
        if(!err){
            $.ajax({
                url: '/ajax/send_order.php',
          type: 'post',
          data: $("input[name='order_name'], input[name='order_phone'], input[name='order_email'], input[name='order_adres'], input[name='order_promo'], input[name='order_info']"),
          dataType: 'html',
          success: function(html){
/*
                    $('.popup').fadeOut(200);
                    $('input').val('').removeClass('error');
                    $('.red-arrow').remove();
                    $('.red-text').remove();
                    show_success('Спасибо за ваш заказ','Мы свяжемся с вами с 10 до 17 по вашему времени<br/>для подтверждения заказа и уточнения деталей.');
*/
                    location.href='thanks.php';
          },
          error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
          }
        });   //ajax
        }
        return false;
    });

// отправка заказа с калькулятора - сразу второй этап
    $('.btn-quick-order-send').click(function(){
        var err=false;
        $('.popup-quick-order input').removeClass('error');
        $('.popup-quick-order .red-arrow').remove();
        $('.popup-quick-order .red-text').remove();
        if(!validate_phone($('input[name=\'quick_order_phone\']').val())){
            $('input[name=\'quick_order_phone\']').addClass('error').after('<div class="red-arrow" ></div><div class="red-text" >Введите ваш телефон</div>');
            err=true;
        }
        if(!validate_mail($('input[name=\'quick_order_email\']').val())){
            $('input[name=\'quick_order_email\']').addClass('error').after('<div class="red-arrow" ></div><div class="red-text" >Введите ваш email</div>');
            err=true;
        }
        if(!err){
    
   var order =  $('#quick-order-v4').parent().text();
     var price = $('#calc-cost-total span').parent().text();     
     var name=$("input[name='quick_order_name']").val();
   var phone=$("input[name='quick_order_phone']").val();
   var email=$("input[name='quick_order_email']").val();
   var adres=$("input[name='quick_order_adres']").val();
   var promo=$("input[name='quick_order_promo']").val();
      $.ajax({
                url: 'mailer.php',
          type: 'post',
      data:{ergdf3:1,order:order,price:price, name:name, phone:phone, email:email, adres:adres, promo:promo},
        
          dataType: "html",
     
          success: function(html){

                    $('.popup').fadeOut(200);
                    $('input').val('').removeClass('error');
                    $('.red-arrow').remove();
                    $('.red-text').remove();
                    show_success('Спасибо за ваш заказ','Мы свяжемся с вами с 10 до 17 по вашему времени<br/>для подтверждения заказа и уточнения деталей.');

                    //location.href='thanks.php';
          },
          error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
          }
        });   //ajax
        
    }
        return false;
    });

// отправка доставки
    $('.btn-delivery-send').click(function(){
        var err=false;            
        $('#delivery-res2 input').removeClass('error');
        $('#delivery-res2 .red-arrow').remove();
        $('#delivery-res2 .red-text').remove();
        if(!validate_text($('input[name=\'delivery_city\']').val())){
            $('input[name=\'delivery_city\']').addClass('error').after('<div class="red-arrow" ></div><div class="red-text" >Введите ваш город</div>');
            err=true;
        }
        if(!validate_phone($('input[name=\'delivery_phone\']').val())){
            $('input[name=\'delivery_phone\']').addClass('error').after('<div class="red-arrow" ></div><div class="red-text" >Введите ваш телефон</div>');
            var err1=true;
        }
        if(!validate_mail($('input[name=\'delivery_email\']').val())){
            $('input[name=\'delivery_email\']').addClass('error').after('<div class="red-arrow" ></div><div class="red-text" >Введите ваш email</div>');
            var err2=true;
        }
        if(!err)err=err1&&err2;

        if(!err){
            $.ajax({
                url: '/ajax/send_delivery.php',
          type: 'post',
          data: $("input[name='delivery_phone'], input[name='delivery_email'], input[name='delivery_city'], select[name='delivery_size']"),
          dataType: 'html',
          success: function(html){
                    var msg='';
                    if($("input[name='delivery_email']").val())msg='Мы расчитаем стоимость доставки в ваш город<br/>и вышлем информацию вам на почту '+$("input[name='delivery_email']").val()+'<br/>в течение суток.';
                    else msg='Мы расчитаем стоимость доставки в ваш город<br/>и сообщим вам SMS-сообщением на номер '+$("input[name='delivery_phone']").val()+'<br/>в течение суток.';
                    $('.popup-wrapper').fadeIn(200);
                    $('input').val('').removeClass('error');
                    $('.red-arrow').remove();
                    $('.red-text').remove();
                    show_success('Спасибо за запрос',msg);
          },
          error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
          }
        });   //ajax
        }
        return false;
    });

// отправка подарка (карта и книжка)
    $('.btn-gift-send').click(function(){
        var err=false;            
        $('.popup-gift input').removeClass('error');
        $('.popup-gift .red-arrow').remove();
        $('.popup-gift .red-text').remove();
        if(!validate_name($('input[name=\'gift_name\']').val())){
            $('input[name=\'gift_name\']').addClass('error').after('<div class="red-arrow" ></div><div class="red-text" >Введите ваше имя</div>');
            err=true;
        }
        if(!validate_mail($('input[name=\'gift_email\']').val())){
            $('input[name=\'gift_email\']').addClass('error').after('<div class="red-arrow" ></div><div class="red-text" >Введите ваш email</div>');
            err=true;
        }
        if(!err){
            $.ajax({
                url: '/ajax/send_gift.php',
          type: 'post',
          data: $("input[name='gift_name'], input[name='gift_email']"),
          dataType: 'html',
          success: function(html){
/*
                    $('.popup').fadeOut(200);
                    $('input').val('').removeClass('error');
                    $('.red-arrow').remove();
                    $('.red-text').remove();
                    show_success('Спасибо за ваш заказ','Мы свяжемся с вами с 10 до 17 по вашему времени<br/>для подтверждения заказа и уточнения деталей.');
*/
                    location.href='thankscard.php';
          },
          error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
          }
        });   //ajax
        }
        return false;
    });

    // скроллит на нужную позицию
    $('#btn-scroll-more').click(function(){
        var o=$('.row13').offset();
        $('body').animate({scrollTop: o.top})
    });
    $('#btn-scroll-complect').click(function(){
        var o=$('.row16').offset();
        $('body').animate({scrollTop: o.top})
    });
    $('#btn-scroll-calculator').click(function(){
        var o=$('.row19').offset();
        $('body').animate({scrollTop: o.top})
    });

    // показывает подсказку в окошке
    $('.btn-help').click(function(){
        $(this).find('.window').fadeIn(200,function(){
            $(this).addClass('window-active');
            $('body').one('click',function(){
                $('.btn-help .window-active').fadeOut(200,function(){
                    $(this).removeClass('window-active');
                });
            });
        });
    });
    
    // изменение ссылок
    $('.order1').click(function(){
        location.href='#order1';
    });
    $('.order2').click(function(){
        location.href='#order2';
    });
    $('.order3').click(function(){
        location.href='#order3';
    });
     $('.order3').click(function(){
        location.href='#order3';
    });
    $('.preorder2').click(function(){
        location.href='#preorder';
    });
    $('.send-order2').click(function(){
        location.href='#send-order';
    });

    // Цели
    $('.address-body').click(function(){
        yaCounter23977492.reachGoal('MAP');
    });
  
    $('.send-order2').click(function(){
        yaCounter23977492.reachGoal('ORDER');
    });
     $('.send-quick-order').click(function(){
        yaCounter23977492.reachGoal('KALKUL');
    });
  
    $('.btn-gift-send').click(function(){
        yaCounter23977492.reachGoal('KARTA');
    });
   
    // меняем город + куку переписываем
    $('.table-cities span').click(function(){
        if(!$(this).hasClass('selected')){
            var city=$(this).html();    // получаем город
            //переписываем куку
            $.ajax({
                url: '/ajax/set_city.php',
                type: 'get',
                data: 'city='+encodeURIComponent(city),
                dataType: 'json',
                success: function(json){
                    // вписываем тлефон и адрес
                    $('.number').html(json['number']);
                    $('.address-body').html(json['address']);
                    // вписываем города в шапку и футер
                    $('.btn-cities').html('<span class="green-text">'+(city=='Все города'?'Хабаровск':city)+'</span>');
                }
            });
            // закрываем окно
            $('.popup-cities .close').click();
            $('.table-cities .selected').removeAttr('class');
            $(this).addClass('selected');
        }
    });

    // На странице благодарности позиционируем
    if($('.row-thanks').length){
        var h=$(window).height()-$('.row1').height()-$('.row-thanks').height()-$('.row4').height()-$('.row14').height();
        if(h>350){
            $('.row-thanks').css({padding:Math.floor(h*0.5)+'px 0px'});
        }
    }

// --- супер-калькулятор

    // радиобокс
    $('.i-rad-box > span:first-child').click(function(){
        if(!$(this).hasClass('checked')){
            $(this).parent().siblings().find('span.checked').removeClass('checked');
            $(this).addClass('checked');
            // если это радиобокс комплектации, то пересчет в влиянии комплектации на микроклимат
            if(!$(this).parent().hasClass('i-name-komplekt'))calculator_calculate();
        }
    });

    // мультирадиобокс
    $('.i-multirad-box > div > span').click(function(){
        if(!$(this).hasClass('checked')){
            $(this).parent().siblings().find('span.checked').removeClass('checked');
            $(this).addClass('checked');
            calculator_calculate();
        }
    });

    // чеккедбокс
    $('.i-chk-box > span:first-child').click(function(){
		if ($('.i-name-komplekt > .checked').parent().text() === "Под ключ") {
			$(this).toggleClass('checked');
		}
    
    });

    // комплектация влияет на Микроклимат
    $('.i-name-komplekt > span').click(function(){
        if(!$(this).parent().hasClass('disabled')){
            $('.i-chk-box span:first-child').removeClass('checked');    // сброс чекбоксов
            switch($(this).parent().text()){
                
        
        
        case 'Стандарт':
                 $('.i-name-spk:eq(1) > span:first-child').addClass('checked');
         $('.i-name-spk:eq(0) > span:first-child').removeClass('checked');
        $('.i-name-spkstand span:first-child').addClass('checked');
        // если выбрана комплектация Если в комлект Э выбрали дачницу люкс то переключаем
                    if($('.i-name-teplic > .checked').parent().text()=='Эдем')$('.i-name-teplic:eq(0) > span').click();
        break;
                case 'Оптимум':
                    $('.i-name-spk:eq(0) > span:first-child').addClass('checked');
         $('.i-name-spk:eq(1) > span:first-child').removeClass('checked');
          $('.i-name-privod span:first-child').addClass('checked');
                    $('.i-name-kapel span:first-child').addClass('checked');
                    $('.i-name-verhfort span:first-child').addClass('checked');
                    $('.i-name-lenta span:first-child').addClass('checked');
          
                break;
                case 'VIP':
        $('.i-name-spk:eq(0) > span:first-child').addClass('checked');
         $('.i-name-spk:eq(1) > span:first-child').removeClass('checked');
                    $('.i-name-ekran span:first-child').addClass('checked');
                    $('.i-name-privod span:first-child').addClass('checked');
                    $('.i-name-kapel span:first-child').addClass('checked');
                    $('.i-name-poliv span:first-child').addClass('checked');
                    $('.i-name-lenta span:first-child').addClass('checked');
          $('.i-name-instal span:first-child').addClass('checked');
          $('.i-name-fundament span:first-child').addClass('checked');
          
                    // если выбрана комплектация V - то надо ее переключить, а то VIP + Vпрофиль - нету
                    if($('.i-name-teplic > .checked').parent().text()=='Дачница')$('.i-name-teplic:eq(0) > span').click();
                    if($('.i-name-teplic > .checked').parent().text()=='Синьор Помидор')$('.i-name-teplic:eq(1) > span').click();
                break;
              
        break;
            }
            calculator_calculate(); // пересчет
        }
    });

    //Поликарбонат влияет на комплектацию
  /*$('.i-name-spk span:first-child').click(function(){
        $('.i-name-komplekt > .checked').removeClass('checked');
        $('.i-name-komplekt:eq(3)').children('span').addClass('checked');
       
      calculator_calculate(); // пересчет
    });*/
  
  // микроклимат влияет на комплектацию
    $('.i-chk-box span:first-child').click(function(){
        //$('.i-name-komplekt > .checked').removeClass('checked');
       // $('.i-name-komplekt:eq(3)').children('span').addClass('checked');
       
      calculator_calculate(); // пересчет
    });
  
  
    // тип теплицы влияет на комплектацию - переключает значение "VIP"
    $('.i-name-teplic > span').click(function(){
        switch($(this).parent().text()){
            case 'Дачница':
                if($('.i-name-komplekt > .checked').parent().text()=='VIP')$('.i-name-komplekt:eq(1) > span').click();
            break;
       case 'Синьор Помидор':
                if($('.i-name-komplekt > .checked').parent().text()=='VIP')$('.i-name-komplekt:eq(1) > span').click();
            break;
            case 'Синьор Помидор':
                $('.i-name-komplekt:eq(0)').removeClass('disabled');
            break;
      case 'Эдем':
                if($('.i-name-komplekt > .checked').parent().text()=='Стандарт')$('.i-name-komplekt:eq(1) > span').click();
            break;
        }
    });
// --- супер-калькулятор

    var y_params = { allowScriptAccess: "always" };
    var y_atts = { id: "myytplayer" };
    swfobject.embedSWF("https://www.youtube.com/v/v0DEFQVzuoY?enablejsapi=1&playerapiid=ytplayer", "ytapiplayer", "640", "360", "8", null, null, y_params, y_atts);

}); // ready


// кнопка прокрутки
$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});

$(document).ready(function() {
 
 
   $("a.topLink").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration:800,
         easing: "swing"
      });
      return false;
   });
 
 
});


 $(document).ready(function(){
        var HeaderTop = $('#menu').offset().top;
        
        $(window).scroll(function(){
                if( $(window).scrollTop() > HeaderTop ) { 
                  $('#menu').css({right:'1px', left:'1px', top: '0px',position: 'fixed'});
                } else {
                        $('#menu').css({position: 'static'});
                }
        });
    });


 /*всё для slider*/

$(document).ready(function() {
    $(".slider").each(function () { // обрабатываем каждый слайдер
        var obj = $(this);
        $(obj).append("<div class='nav'></div>");
        $(obj).find("li").each(function () {
           // $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
            $(this).addClass("slider"+$(this).index());
        });
        $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
    });
    autoJS (0, $(".slider")[0])
autoJS (0, $(".slider")[1])
});
function autoJS (obj, sl) { // slider function
    var ul = $(sl).find("ul"); // находим блок
    var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
    var step = $(bl).width(); // ширина объекта
    $(sl).find("span").removeClass("on").eq(obj).addClass("on")
    $(ul).animate({marginLeft: "-"+step*obj}, obj ? 500 : 0, function() {
    var len = ul.find("li").length
    obj = ++obj % len;
    window.setTimeout(function() {
     autoJS (obj, sl)
}, 10000)

}); // 500 это скорость перемотки
}

function sliderJS (obj, sl) { // slider function
    var ul = $(sl).find("ul"); // находим блок
    var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
    var step = $(bl).width(); // ширина объекта
    $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
}
$(document).on("click", ".slider .nav span", function() { // slider click navigate
    var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
    $(sl).find("span").removeClass("on"); // убираем активный элемент
    $(this).addClass("on"); // делаем активным текущий
    var obj = $(this).attr("rel"); // узнаем его номер
    sliderJS(obj, sl); // слайдим
    return false;
});


window.onload = function(e){
	$("form#mc-embedded-subscribe-form, form#mc-embedded-subscribe-form2").submit(function(event){
 
  //disable the default form submission
  event.preventDefault();
 
  //grab all form data  
  var formData = new FormData($(this)[0]);
  var priznak=false;
  var error="";
	if (this.FNAME.value ===""){
		this.FNAME.setAttribute("class", "error");
		this.FNAME.setAttribute("placeholder", "Введите имя");
		priznak = true;
	}
	if (this.EMAIL.value ===""){
		this.EMAIL.setAttribute("class", "error");
		this.EMAIL.setAttribute("placeholder", "Введите email");
		priznak = true;
	}
	if (priznak){
		return false;
	}
	var obj = this;
  $.ajax({
    url: 'mailer.php?a=subscribe',
    type: 'POST',
    data: formData,
    async: false,
    cache: false,
    contentType: false,
    processData: false,
    success: function (returndata) {
		seccess(obj);
    }
  });
 
  return false;
});
}
function seccess(obj){
			show_success('Спасибо ', 'Вы успешно подписались');
		obj.FNAME.setAttribute("class", "");
		obj.EMAIL.setAttribute("class", "");
}