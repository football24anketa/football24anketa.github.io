
function processAnswers() {
    let resultString = '';
    let a=0;
    let b=0;
    let c=0;
    let d=0;
    let n=0;
    let side=0;
    for (let i = 1; i <= 48; i++) {
        let questionName = 'q' + i;
        let selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);

        if (selectedAnswer) {
            if(selectedAnswer.value=="a"){
                a+=1;
                n+=1;
            }
            if(selectedAnswer.value=="b"){
                b+=1;
                n+=1;
            }
            if(selectedAnswer.value=="c"){
                c+=1;
                n+=1;
            }
            if(selectedAnswer.value=="d"){
                d+=1;
                n+=1;
            }
            if(selectedAnswer.value=="r"){
                side+=1;
            }
            if(selectedAnswer.value=="l"){
                side-=1;
            }
            resultString += selectedAnswer.value;
        } else {
            console.error(`Answer not selected for question ${i}`);
        }
    }
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(side);
    console.log(resultString);
    if(a>b&&a>c&&a>d){
        document.body.innerHTML=`<div class="main">
      <h1 class="title">Вы - вратарь</h1>
    
      <div class="bars">
        <div class="a e" style="width: ${(a/n)*100}%">Вратарь</div>
        <div class="b e" style="width: ${(b/n)*100}%">Защитник</div>
        <div class="c e" style="width: ${(d/n)*100}%">Нападающий</div>
        <div class="d e" style="width: ${(c/n)*100}%">Вингер</div>
      </div>
      <div class="radio_btn2">
        <img src="https://ss.sport-express.ru/userfiles/materials/184/1844197/large.jpg" alt="">
      </div>
      <div class="des">
        <br>
<span class="log">Вратарь:</span>

Главная задача вратаря известна всем: сделать все, чтобы мяч не пересек линию ворот, не пропустить гол. В пределах штрафной площади вратарю разрешается играть руками. При этом у вратарей есть ограничения: запрещено держать мяч в руках больше 4 секунд, а еще брать мяч в руки после паса партнера в пределах штрафной. Вратарю необходимо уметь выбирать правильную позицию в воротах, уверенно играть на выходах, организовать оборону перед воротами, быстро начать контратаку. 
<br>
<br>
<span class="log">Качества:</span> подвижность, сила, ловкость, умение опередить соперника, остановить и поймать мяч в любом положении или отбить его.  

      </div>
    </div>`;
    }
    else if (b>a&&b>c&&b>d) {
        document.body.innerHTML=`<div class="main">
      <h1 class="title">Вы - защитник</h1>
    
      <div class="bars">
        <div class="a e" style="width: ${(a/n)*100}%">Вратарь</div>
        <div class="b e" style="width: ${(b/n)*100}%">Защитник</div>
        <div class="c e" style="width: ${(d/n)*100}%">Нападающий</div>
        <div class="d e" style="width: ${(c/n)*100}%">Вингер</div>
      </div>
      <div class="radio_btn2">
        <img src="https://ice-profy.ru/wp-content/uploads/2023/08/3-6-1024x576.jpg" alt="">
      </div>
      <div class="des"><br>
        <span class="log">Защитник:</span>

Защитник выполняет важнейшую работу — он задает темп. Топовый игрок на этой позиции должен обладать точным пасом, хорошим видением площадки и, конечно же, классными оборонительными навыками. Чаще всего в защите играют физически мощные футболисты, защитник должен уметь грамотно обороняться, предугадывать действия нападающего и не давать ему выйти на ударную позицию. По возможности он должен вступать в отбор.  
<br><br>
<span class="log">Качества:</span> быстрота, цепкость, хладнокровие, ум, сила, ловкость, гибкое тактическое мышление, уметь сильно и точно бить по мячу ногами и головой. 
      </div>
    </div>`;
    }
    else if (d>a&&d>c&&d>b) {
        document.body.innerHTML=`<div class="main">
      <h1 class="title">Вы - нападающий</h1>
    
      <div class="bars">
        <div class="a e" style="width: ${(a/n)*100}%">Вратарь</div>
        <div class="b e" style="width: ${(b/n)*100}%">Защитник</div>
        <div class="c e" style="width: ${(d/n)*100}%">Нападающий</div>
        <div class="d e" style="width: ${(c/n)*100}%">Вингер</div>
      </div>
      <div class="radio_btn2">
        <img src="https://ice-profy.ru/wp-content/uploads/2023/08/2-11-1024x794.jpg" alt="">
      </div>
      <div class="des">
        <br>
        <span class="log">Нападающий:</span>

Нападающий - атакующий игрок, располагающийся ближе всех к воротам соперника. Нападающий всегда ищет пространство, чтобы открыться под пас и нанести решающий удар. При этом именно с нападающего начинается защита.  Основной целью является забивание голов. В первую очередь, игрок должен уметь реализовывать свои моменты, оказываясь в нужное время в нужном месте и принимать в них быстрое решение.  
<br><br>
<span class="log">Качества:</span> взрывная скорость и атлетизм, хорошая игра головой, умение обводить игроков и забивать голы, выносливость, хорошие умственные способности, стойкость, баланс, юркость 
      </div>
    </div>`;
    }
    else if (c>a&&c>b&&c>d) {
        if(side<0){
            document.body.innerHTML=`<div class="main">
      <h1 class="title">Вы - левый вингер</h1>
    
      <div class="bars">
        <div class="a e" style="width: ${(a/n)*100}%">Вратарь</div>
        <div class="b e" style="width: ${(b/n)*100}%">Защитник</div>
        <div class="c e" style="width: ${(d/n)*100}%">Нападающий</div>
        <div class="d e" style="width: ${(c/n)*100}%">Вингер</div>
      </div>
      <div class="radio_btn2">
        <img src="https://img.sportsdaily.ru/resize_cache/658468/379a1de5b085e99e3eb4bdfe96a0a3fb/iblock/b18/b1821d318b4418b4406ef6d632645ba9/984358a7d3771d7686f66c59ace2c140.jpg" alt="">
      </div>
      <div class="des"><br>
        <span class="log">Левый Вингер</span>
(полузащитник)<br>
Как правило, на площадке два вингера: на правом и левом флангах. Вам была бы по душе игра на левой стороне поля. Эта парочка — главные рабочие лошадки в команде. Вингер равноценно участвует и в защите, и в нападении. При защите вингер страхует других защитников и перекрывает пространство, а при атаке − открывается для передачи, пускает мяч в штрафную оппонента, выполняет обводки или наносит удары, смещаясь в центр.   
<br><br>
<span class="log">Качества:</span> выносливость, креативность и техничность, быстрота, умение контролировать мяч и владеть техникой коротких и дальних передач.
      </div>
    </div>`
        }
        if(side>0){
            document.body.innerHTML=`<div class="main">
      <h1 class="title">Вы - правый вингер</h1>
    
      <div class="bars">
        <div class="a e" style="width: ${(a/n)*100}%">Вратарь</div>
        <div class="b e" style="width: ${(b/n)*100}%">Защитник</div>
        <div class="c e" style="width: ${(d/n)*100}%">Нападающий</div>
        <div class="d e" style="width: ${(c/n)*100}%">Вингер</div>
      </div>
      <div class="radio_btn2">
        <img src="https://img.sportsdaily.ru/resize_cache/658468/379a1de5b085e99e3eb4bdfe96a0a3fb/iblock/b18/b1821d318b4418b4406ef6d632645ba9/984358a7d3771d7686f66c59ace2c140.jpg" alt="">
      </div>
      <div class="des"><br>
        <span class="log">Правый Вингер</span>
(полузащитник)<br>
Как правило, на площадке два вингера: на правом и левом флангах. Вам была бы по душе игра на правой стороне поля. Эта парочка — главные рабочие лошадки в команде. Вингер равноценно участвует и в защите, и в нападении. При защите вингер страхует других защитников и перекрывает пространство, а при атаке − открывается для передачи, пускает мяч в штрафную оппонента, выполняет обводки или наносит удары, смещаясь в центр.   
<br><br>
<span class="log">Качества:</span> выносливость, креативность и техничность, быстрота, умение контролировать мяч и владеть техникой коротких и дальних передач. 
      </div>
    </div>`
        }
        if(side==0){
            document.body.innerHTML=`<div class="main">
      <h1 class="title">Вы - универсал</h1>
    
      <div class="bars">
        <div class="a e" style="width: ${(a/n)*100}%">Вратарь</div>
        <div class="b e" style="width: ${(b/n)*100}%">Защитник</div>
        <div class="c e" style="width: ${(d/n)*100}%">Нападающий</div>
        <div class="d e" style="width: ${(c/n)*100}%">Вингер</div>
      </div>
      <div class="radio_btn2">
        <img src="https://icdn.lenta.ru/images/2018/03/21/13/20180321131148446/detail_ab2ae02f9f922c62dd986419d5418f68.jpg" alt="">
      </div>
      <div class="des"><br>
        <span class="log">Универсал: </span>
Это игрок, который может хорошо себя проявлять в разных позициях на поле. Он так же хорошо может играть обеими руками, как вратарь, молниеносно забивать четкие голы, как нападающий, уметь обороняться, как защитник и вести игру с правого или левого фланга, как вингер (полузащитник). Универсал хорош в дриблинге и не боится прессинга. Можно сказать он является амбидекстром - хорошо владеет обеими ногами в игре.   
<br><br>
Очень в редких случаях футболист играет всю жизнь на одной позиции. Даже профессионалы могут менять свое место на поле. Хороший футболист универсален и умеет играть на любом участке поля. 
<br><br>
<span class="log">Качества:</span> ловкость, хорошо развитая скорость, выносливость, высокий интеллект, слаженность действий, крепкое телосложение, любовь к дриблингу, отличная координация движений, техничность.  
      </div>
    </div>`
        }
    }
    else{
        document.body.innerHTML=`<div class="main">
      <h1 class="title">Вы - универсал</h1>
    
      <div class="bars">
        <div class="a e" style="width: ${(a/n)*100}%">Вратарь</div>
        <div class="b e" style="width: ${(b/n)*100}%">Защитник</div>
        <div class="c e" style="width: ${(d/n)*100}%">Нападающий</div>
        <div class="d e" style="width: ${(c/n)*100}%">Вингер</div>
      </div>
      <div class="radio_btn2">
        <img src="https://icdn.lenta.ru/images/2018/03/21/13/20180321131148446/detail_ab2ae02f9f922c62dd986419d5418f68.jpg" alt="">
      </div>
      <div class="des"><br>
        <span class="log">Универсал: </span>
Это игрок, который может хорошо себя проявлять в разных позициях на поле. Он так же хорошо может играть обеими руками, как вратарь, молниеносно забивать четкие голы, как нападающий, уметь обороняться, как защитник и вести игру с правого или левого фланга, как вингер (полузащитник). Универсал хорош в дриблинге и не боится прессинга. Можно сказать он является амбидекстром - хорошо владеет обеими ногами в игре.   
<br><br>
Очень в редких случаях футболист играет всю жизнь на одной позиции. Даже профессионалы могут менять свое место на поле. Хороший футболист универсален и умеет играть на любом участке поля. 
<br><br>
<span class="log">Качества:</span> ловкость, хорошо развитая скорость, выносливость, высокий интеллект, слаженность действий, крепкое телосложение, любовь к дриблингу, отличная координация движений, техничность.  
      </div>
    </div>`
    }
    return resultString;
}
