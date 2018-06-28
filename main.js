
            

            function psych(){
                document.body.style.backgroundColor = '#ff00ff';
                document.body.style.color = 'rgb(0,0,255)';
                document.body.style.fontFamily = 'fantasy';
                var titre = document.querySelectorAll("h2");
                titre.forEach(function(element){element.style.color = '#5EFB6E'});
                var titre1 = document.querySelectorAll("h1");
                titre1.forEach(function(element){element.style.color = '#5EFB6E'});
            }
            function inversion()
            {   normal();
                document.body.style.color='#ffffff';
                document.body.style.backgroundColor='#000000';
            }
            function contrastfaible(){
                normal();
                document.body.style.color='#464646';
            }
            function normal()
            {
                document.body.style = null;
                var titre = document.querySelectorAll("h2");
                titre.forEach(function(element){element.style.color = null});
                var titre1 = document.querySelectorAll("h1");
                titre1.forEach(function(element){element.style.color = null});
            }
            function resetname(){
                bott.textContent ="Mode psych"
                inv.textContent ="Mode inversé"
                wof.textContent ="Mode contraste faible"
            }
           //je sais c'est ultra moche le code des fonctions qui changent de mode, surtout le nom des variables
            var inv = document.querySelector(".inv");
            inv.addEventListener("click",inversionfct);
            function inversionfct()
            {
                if (inv.textContent === "Mode inversé")
                {
                inversion();
                inv.textContent = "Mode normal"
                }else 
                {  
                normal();
                resetname();
                }
            }
            var bott = document.querySelector(".bott");
            bott.addEventListener("click",nvup2fct);
            function nvup2fct()
            {
                if (bott.textContent === "Mode psych"){
                    psych();
                    bott.textContent = "Mode normal";
                }
                else
                {
                    normal();
                    resetname();
                }

            }
            var wof = document.querySelector(".wof");
            wof.addEventListener("click",jenaimarfct);
            function jenaimarfct()
            {
                if (wof.textContent === "Mode contraste faible"){
                    contrastfaible();
                    wof.textContent = "Mode normal";
                }
                else{
                    normal();
                    resetname();
                }
            }
// essai pour faire un truc plus stylé mais ki marche pa     
 /*function changeMode(classname,changestyle,nomMode)
            {
                var boutonInt = document.querySelector(`.${classname}`);
                boutonInt.addEventListener("click",function superfonction(){
                    if (boutonInt.textContent === nomMode){
                        changestyle;
                        boutonInt.textContent = "Mode normal"
                    }
                    else
                    {
                        normal();
                    }
                })
            }
            changeMode(inv,inversion,"Mode inversé")
            changeMode(bott,psych,"Mode psych")
     */       


//Parce que les liens c'est pas mal aussi

            var lienInverse = document.querySelector(".invertedMode")
            lienInverse.addEventListener("click",inversefct)
            function inversefct()
            {
             if (lienInverse.textContent === "Mode Inverse")
             {  normal();
                inversion();
                lienInverse.textContent = "Mode Normal"
             } else {
                normal();
                lienInverse.textContent = "Mode Inverse"
             }
            }
            var lienContrast = document.querySelector(".contrastfaibleMode")
            lienContrast.addEventListener("click",contrastfaibleMode)
            function contrastfaibleMode()
            {
                if(lienContrast.textContent === "Mode Contraste Faible"){
                    normal();
                    contrastfaible();
                    lienContrast.textContent = "Mode Normal"
                } else {
                    normal();
                    lienContrast.textContent ="Mode Contraste Faible"
                }

            }