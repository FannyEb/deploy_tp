"use strict";(self.webpackChunkprojetweb=self.webpackChunkprojetweb||[]).push([[153],{9153:(T,p,i)=>{i.r(p),i.d(p,{ProductModule:()=>M});var g=i(8583),r=(()=>{return(n=r||(r={}))[n.Soup=0]="Soup",n[n.Pie=1]="Pie",n[n.Desert=2]="Desert",r;var n})(),t=i(7716),u=i(2140),x=i(6258),a=i(8341),d=i(1769),s=i(5734),l=i(6627);let Z=(()=>{class n{transform(o,...c){return o===r.Soup?"Soupe":o===r.Pie?"Tarte":o===r.Desert?"Dessert":"Inconnu"}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275pipe=t.Yjl({name:"productCategory",type:n,pure:!0}),n})();function f(n,e){if(1&n&&(t.TgZ(0,"div"),t.TgZ(1,"mat-chip",8),t._uU(2),t.ALo(3,"productCategory"),t.qZA(),t.qZA()),2&n){const o=e.$implicit;t.xp6(2),t.hij(" ",t.lcZ(3,1,o)," ")}}const h=function(n){return["product",n]};function m(n,e){if(1&n&&(t.TgZ(0,"div",9),t.TgZ(1,"a",10),t._UZ(2,"img",11),t.qZA(),t.TgZ(3,"div",12),t.TgZ(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"div",13),t.TgZ(7,"mat-icon"),t._uU(8,"shopping_bag"),t.qZA(),t.TgZ(9,"span",14),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const o=e.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(4,h,o.id)),t.xp6(1),t.s9C("src",o.image,t.LSH),t.xp6(3),t.Oqu(o.name),t.xp6(5),t.hij("",o.price," $")}}let C=(()=>{class n{constructor(o,c){this.productService=o,this.notifService=c,this.products=[],this.categories=[r.Soup,r.Desert,r.Pie]}ngOnInit(){this.productService.getProducts().subscribe(o=>{this.products=o},o=>{this.notifService.error("Erreur de chargement",3e3)})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(u.M),t.Y36(x.g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-catalogue"]],decls:10,vars:3,consts:[[1,"container"],[1,"filters"],["type","text","placeholder","Recherche"],["multiple",""],[4,"ngFor","ngForOf"],[3,"vertical"],[1,"listCard"],["class","card",4,"ngFor","ngForOf"],["appChipActivate",""],[1,"card"],[1,"imgBx",3,"routerLink"],[3,"src"],[1,"contentBx"],[1,"btn"],[1,"price"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h2"),t._uU(3,"Filtres"),t.qZA(),t._UZ(4,"input",2),t.TgZ(5,"mat-chip-list",3),t.YNc(6,f,4,3,"div",4),t.qZA(),t.qZA(),t._UZ(7,"mat-divider",5),t.TgZ(8,"div",6),t.YNc(9,m,11,6,"div",7),t.qZA(),t.qZA()),2&o&&(t.xp6(6),t.Q6J("ngForOf",c.categories),t.xp6(1),t.Q6J("vertical",!0),t.xp6(2),t.Q6J("ngForOf",c.products))},directives:[a.qn,g.sg,d.d,a.HS,s.yS,l.Hw],pipes:[Z],styles:['.container[_ngcontent-%COMP%]{position:absolute;top:100px;left:20px;width:100%;height:100%;display:flex;flex-direction:row}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{position:relative;width:213px;height:300px;background:rgba(255,255,255,.3);box-shadow:20px 20px 40px -6px #0003;border-radius:20px;overflow:hidden;margin-left:20px;margin-bottom:20px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#1BBFE944;clip-path:circle(150px at 80% 20%);transition:.5s ease-in-out}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover:before{clip-path:circle(300px at 80% -20%)}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);z-index:1000;width:100%;height:100%;transition:.5s}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .imgBx[_ngcontent-%COMP%]{top:10%;transform:translateY(-25%)}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(20deg);width:270px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .contentBx[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;height:55px;text-align:center;transition:1s;z-index:90;display:flex;flex-direction:column;align-items:center}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .contentBx[_ngcontent-%COMP%]{height:100px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .contentBx[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{position:relative;font-weight:600;letter-spacing:1px;color:#fff;margin:0}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .contentBx[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);transition-delay:0s}.price[_ngcontent-%COMP%]{margin-left:5px}.btn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;background:transparent;padding:10px 20px;margin-top:2px;border:none;border-left:1px solid rgba(255,255,255,.3);border-top:1px solid rgba(255,255,255,.3);border-radius:5000px;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);box-shadow:4px 4px 60px #0003;color:#fff;font-family:Montserrat,sans-serif;font-weight:500;transition:all .2s ease-in-out;text-shadow:2px 2px 4px rgba(0,0,0,.2);transform:translateY(50px)}.btn[_ngcontent-%COMP%]:hover{background:rgba(255,255,255,.1);box-shadow:4px 4px 60px 8px #0003}.filters[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-direction:column;margin-right:1rem;height:100%}.chip-list[_ngcontent-%COMP%]{width:100%}.listCard[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}']}),n})(),_=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-detail"]],decls:20,vars:0,consts:[[1,"container"],[1,"card"],[1,"imgBx"],["src","http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"],[1,"cardContent"],[1,"productDescription"],[1,"btn"],["multiple",""],[1,"description"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"h2"),t._uU(6,"Nike Shoes"),t.qZA(),t._UZ(7,"mat-divider"),t.TgZ(8,"div",5),t.TgZ(9,"div",6),t._uU(10," Ajouter au panier : 500 $ "),t.qZA(),t.TgZ(11,"mat-chip-list",7),t.TgZ(12,"mat-chip"),t._uU(13," category "),t.qZA(),t.qZA(),t.qZA(),t._UZ(14,"mat-divider"),t.TgZ(15,"div",8),t.TgZ(16,"h3"),t._uU(17,"Description :"),t.qZA(),t.TgZ(18,"p"),t._uU(19,"Ceci est un article incroyable que j'ai chin\xe9 dans le fin fond du Kansas parmis les champs de bl\xe9 et les paturages"),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[d.d,a.qn,a.HS],styles:['.container[_ngcontent-%COMP%]{position:absolute;top:100px;left:20px;width:100%;height:100%;display:flex;flex-direction:row;flex-wrap:wrap}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{position:relative;width:450px;height:400px;background:rgba(255,255,255,.3);box-shadow:20px 20px 40px -6px #0003;border-radius:20px;overflow:hidden;margin-left:20px;margin-bottom:20px}.container[_ngcontent-%COMP%]   .cardContent[_ngcontent-%COMP%]{position:relative;width:450px;height:400px;background:rgba(255,255,255,.3);box-shadow:20px 20px 40px -6px #0003;border-radius:20px;overflow:hidden;margin-left:20px;margin-bottom:20px}.productDescription[_ngcontent-%COMP%]{color:#fff;margin:20px}.productDescription[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-bottom:20px;display:flex;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;background:transparent;padding:10px 20px;border:none;border-left:1px solid rgba(255,255,255,.3);border-top:1px solid rgba(255,255,255,.3);border-radius:5000px;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);box-shadow:4px 4px 60px #0003;color:#fff;font-family:Montserrat,sans-serif;font-weight:500;transition:all .2s ease-in-out;text-shadow:2px 2px 4px rgba(0,0,0,.2)}.productDescription[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background:rgba(255,255,255,.1);box-shadow:4px 4px 60px 8px #0003}h2[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.description[_ngcontent-%COMP%]{margin:20px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#1BBFE944;clip-path:circle(300px at 80% 20%);transition:.5s ease-in-out}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover:before{clip-path:circle(300px at 50% 50%)}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);z-index:1000;width:100%;height:100%;transition:.5s}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(20deg);width:270px}mat-chip-list[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}mat-chip-list[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]{background-color:#ffffff4d;color:#fff}']}),n})(),P=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-shopping-list"]],decls:78,vars:5,consts:[[1,"container"],[1,"quantity"],[1,"less"],[1,"more"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"table"),t.TgZ(2,"thead"),t.TgZ(3,"tr"),t.TgZ(4,"th"),t._uU(5,"Produit"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Quantit\xe9"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Prix"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"tbody"),t.TgZ(11,"tr"),t.TgZ(12,"td"),t._uU(13,"Cell 1"),t.qZA(),t.TgZ(14,"td"),t.TgZ(15,"div",1),t.TgZ(16,"mat-icon",2),t._uU(17,"expand_less"),t.qZA(),t._uU(18),t.TgZ(19,"mat-icon",3),t._uU(20,"expand_more"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"td"),t._uU(22,"Cell 3"),t.qZA(),t.qZA(),t.TgZ(23,"tr"),t.TgZ(24,"td"),t._uU(25,"Cell 1"),t.qZA(),t.TgZ(26,"td"),t.TgZ(27,"div",1),t.TgZ(28,"mat-icon",2),t._uU(29,"expand_less"),t.qZA(),t._uU(30),t.TgZ(31,"mat-icon",3),t._uU(32,"expand_more"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"td"),t._uU(34,"Cell 3"),t.qZA(),t.qZA(),t.TgZ(35,"tr"),t.TgZ(36,"td"),t._uU(37,"Cell 1"),t.qZA(),t.TgZ(38,"td"),t.TgZ(39,"div",1),t.TgZ(40,"mat-icon",2),t._uU(41,"expand_less"),t.qZA(),t._uU(42),t.TgZ(43,"mat-icon",3),t._uU(44,"expand_more"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(45,"td"),t._uU(46,"Cell 3"),t.qZA(),t.qZA(),t.TgZ(47,"tr"),t.TgZ(48,"td"),t._uU(49,"Cell 1"),t.qZA(),t.TgZ(50,"td"),t.TgZ(51,"div",1),t.TgZ(52,"mat-icon",2),t._uU(53,"expand_less"),t.qZA(),t._uU(54),t.TgZ(55,"mat-icon",3),t._uU(56,"expand_more"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(57,"td"),t._uU(58,"Cell 3"),t.qZA(),t.qZA(),t.TgZ(59,"tr"),t.TgZ(60,"td"),t._uU(61,"Cell 1"),t.qZA(),t.TgZ(62,"td"),t.TgZ(63,"div",1),t.TgZ(64,"mat-icon",2),t._uU(65,"expand_less"),t.qZA(),t._uU(66),t.TgZ(67,"mat-icon",3),t._uU(68,"expand_more"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(69,"td"),t._uU(70,"Cell 3"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(71,"tfoot"),t.TgZ(72,"tr"),t.TgZ(73,"td"),t._uU(74,"Prix total"),t.qZA(),t._UZ(75,"td"),t.TgZ(76,"td"),t._uU(77,"150 $"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(18),t.hij(" ",1," "),t.xp6(12),t.hij(" ",1," "),t.xp6(12),t.hij(" ",1," "),t.xp6(12),t.hij(" ",1," "),t.xp6(12),t.hij(" ",1," "))},directives:[l.Hw],styles:[".container[_ngcontent-%COMP%]{position:absolute;top:100px;left:20px;right:20px;width:100%;height:100%}table[_ngcontent-%COMP%]{width:95%;max-width:870px;border-collapse:collapse;overflow:hidden;border-radius:20px;box-shadow:0 0 20px #0000001a}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:20px;background-color:#ffffff4d;color:#fff}th[_ngcontent-%COMP%]{text-align:left}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#1bbfe944}tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-weight:bold;background-color:#1bbfe944}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ffffff4d}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{position:relative}.quantity[_ngcontent-%COMP%]{width:min-content;display:flex;flex-direction:row;background-color:#ffffff4d;border-radius:20px;padding:10px}.quantity[_ngcontent-%COMP%]   .less[_ngcontent-%COMP%]{margin-right:5px}.quantity[_ngcontent-%COMP%]   .less[_ngcontent-%COMP%]:hover{cursor:pointer}.quantity[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%]{margin-left:5px}.quantity[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%]:hover{cursor:pointer}.quantity[_ngcontent-%COMP%]:hover{background:rgba(255,255,255,.1);box-shadow:4px 4px 60px 8px #0003}"]}),n})();var b=i(4859);const O=[{path:"",component:C},{path:"product/:id",component:_},{path:"shopping-list",component:P}];let M=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,s.Bz.forChild(O),b.h]]}),n})()}}]);