"use strict";(self.webpackChunkprojetweb=self.webpackChunkprojetweb||[]).push([[153],{9153:(L,x,c)=>{c.r(x),c.d(x,{ProductModule:()=>U});var h=c(8583),r=(()=>{return(n=r||(r={}))[n.Vans=0]="Vans",n[n.Converse=1]="Converse",n[n.Crocs=2]="Crocs",n[n.FlipFlops=3]="FlipFlops",n[n.Nike=4]="Nike",n[n.Mizuno=5]="Mizuno",n[n.NewBalance=6]="NewBalance",r;var n})(),l=c(4126),t=c(7716),d=c(6138),f=c(2140),m=c(6258),u=c(8341),C=c(1769),g=c(5734),_=c(6627);let M=(()=>{class n{transform(o,...i){switch(o){case r.Vans:return"Vans";case r.Converse:return"Converse";case r.Crocs:return"Crocs";case r.FlipFlops:return"Tongues";case r.Nike:return"Nike";case r.Mizuno:return"Mizuno";case r.NewBalance:return"New Balance"}return"Inconnu"}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275pipe=t.Yjl({name:"productCategory",type:n,pure:!0}),n})();function b(n,e){if(1&n&&(t.TgZ(0,"div"),t.TgZ(1,"mat-chip",8),t._uU(2),t.ALo(3,"productCategory"),t.qZA(),t.qZA()),2&n){const o=e.$implicit;t.xp6(2),t.hij(" ",t.lcZ(3,1,o)," ")}}const v=function(n){return["product",n]};function w(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",9),t.TgZ(1,"a",10),t._UZ(2,"img",11),t.qZA(),t.TgZ(3,"div",12),t.TgZ(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"div",13),t.NdJ("click",function(){const s=t.CHM(o).$implicit;return t.oxw().addToShoppingList(s)}),t.TgZ(7,"mat-icon"),t._uU(8,"shopping_bag"),t.qZA(),t.TgZ(9,"span",14),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const o=e.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(4,v,o.id)),t.xp6(1),t.s9C("src",o.image,t.LSH),t.xp6(3),t.Oqu(o.name),t.xp6(5),t.hij("",o.price," $")}}let T=(()=>{class n{constructor(o,i,p){this.store=o,this.productService=i,this.notifService=p,this.products=[],this.categories=[r.Vans,r.Converse,r.Crocs,r.FlipFlops,r.Nike,r.Mizuno,r.NewBalance]}ngOnInit(){this.productService.getProducts().subscribe(o=>{this.products=o},o=>{this.notifService.error("Erreur de chargement",3e3)})}addToShoppingList(o){console.log("Add to shopping list: "+o.name),this.store.dispatch(new l.R(o))}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(d.yh),t.Y36(f.M),t.Y36(m.g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-catalogue"]],decls:10,vars:3,consts:[[1,"container"],[1,"filters"],["type","text","placeholder","Recherche"],["multiple",""],[4,"ngFor","ngForOf"],[3,"vertical"],[1,"listCard"],["class","card",4,"ngFor","ngForOf"],["appChipActivate",""],[1,"card"],[1,"imgBx",3,"routerLink"],[3,"src"],[1,"contentBx"],[1,"btn",3,"click"],[1,"price"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h2"),t._uU(3,"Filtres"),t.qZA(),t._UZ(4,"input",2),t.TgZ(5,"mat-chip-list",3),t.YNc(6,b,4,3,"div",4),t.qZA(),t.qZA(),t._UZ(7,"mat-divider",5),t.TgZ(8,"div",6),t.YNc(9,w,11,6,"div",7),t.qZA(),t.qZA()),2&o&&(t.xp6(6),t.Q6J("ngForOf",i.categories),t.xp6(1),t.Q6J("vertical",!0),t.xp6(2),t.Q6J("ngForOf",i.products))},directives:[u.qn,h.sg,C.d,u.HS,g.yS,_.Hw],pipes:[M],styles:['.container[_ngcontent-%COMP%]{position:absolute;top:100px;left:20px;width:100%;height:100%;display:flex;flex-direction:row}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{position:relative;width:213px;height:300px;background:rgba(255,255,255,.3);box-shadow:20px 20px 40px -6px #0003;border-radius:20px;overflow:hidden;margin-left:20px;margin-bottom:20px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#1BBFE944;clip-path:circle(150px at 80% 20%);transition:.5s ease-in-out}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover:before{clip-path:circle(300px at 80% -20%)}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);z-index:1000;width:100%;height:100%;transition:.5s}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .imgBx[_ngcontent-%COMP%]{top:10%;transform:translateY(-25%)}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(20deg);width:270px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .contentBx[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;height:55px;text-align:center;transition:1s;z-index:999;display:flex;flex-direction:column;align-items:center}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .contentBx[_ngcontent-%COMP%]{height:100px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .contentBx[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{position:relative;font-weight:600;letter-spacing:1px;color:#fff;margin:0}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .contentBx[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);transition-delay:0s}.price[_ngcontent-%COMP%]{margin-left:5px}.btn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;background:transparent;padding:10px 20px;margin-top:2px;border:none;border-left:1px solid rgba(255,255,255,.3);border-top:1px solid rgba(255,255,255,.3);border-radius:5000px;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);box-shadow:4px 4px 60px #0003;color:#fff;font-family:Montserrat,sans-serif;font-weight:500;transition:all .2s ease-in-out;text-shadow:2px 2px 4px rgba(0,0,0,.2);transform:translateY(50px);z-index:9999}.btn[_ngcontent-%COMP%]:hover{background:rgba(255,255,255,.1);box-shadow:4px 4px 60px 8px #0003}.filters[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-direction:column;margin-right:1rem;height:100%}.chip-list[_ngcontent-%COMP%]{width:100%}.listCard[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}']}),n})();const A=function(){return["/"]};let q=(()=>{class n{constructor(o,i,p,s){this.store=o,this.notifService=i,this.route=p,this.productService=s}ngOnInit(){const o=this.route.snapshot.paramMap.get("id");console.log("id: "+o),this.productService.getProduct(o).subscribe(i=>{console.log("data: "+i),this.product=i},i=>{this.notifService.error("Erreur de chargement",3e3)})}addFromShoppingList(){console.log("Add to shopping list: "+this.product.name),this.store.dispatch(new l.R(this.product))}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(d.yh),t.Y36(m.g),t.Y36(g.gz),t.Y36(f.M))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-detail"]],decls:23,vars:9,consts:[[1,"container"],["type","submit","value"," Retour ",1,"goback",3,"routerLink"],[1,"content"],[1,"card"],[1,"imgBx"],[3,"src"],[1,"cardContent"],[1,"productDescription"],[1,"btn",3,"click"],["multiple",""],[1,"description"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"input",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.qZA(),t.TgZ(6,"div",6),t.TgZ(7,"h2"),t._uU(8),t.qZA(),t._UZ(9,"mat-divider"),t.TgZ(10,"div",7),t.TgZ(11,"div",8),t.NdJ("click",function(){return i.addFromShoppingList()}),t._uU(12),t.qZA(),t.TgZ(13,"mat-chip-list",9),t.TgZ(14,"mat-chip"),t._uU(15),t.ALo(16,"productCategory"),t.qZA(),t.qZA(),t.qZA(),t._UZ(17,"mat-divider"),t.TgZ(18,"div",10),t.TgZ(19,"h3"),t._uU(20,"Description :"),t.qZA(),t.TgZ(21,"p"),t._uU(22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(1),t.Q6J("routerLink",t.DdM(8,A)),t.xp6(4),t.s9C("src",i.product.image,t.LSH),t.xp6(3),t.Oqu(i.product.name),t.xp6(4),t.hij(" Ajouter au panier : ",i.product.price," $ "),t.xp6(3),t.hij(" ",t.lcZ(16,6,i.product.category)," "),t.xp6(7),t.Oqu(i.product.description))},directives:[g.rH,C.d,u.qn,u.HS],pipes:[M],styles:['.content[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.container[_ngcontent-%COMP%]{position:absolute;top:100px;left:20px;width:100%;height:100%;display:flex;flex-direction:column;flex-wrap:wrap}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{position:relative;width:450px;height:400px;background:rgba(255,255,255,.3);box-shadow:20px 20px 40px -6px #0003;border-radius:20px;overflow:hidden;margin-left:20px;margin-bottom:20px}.container[_ngcontent-%COMP%]   .cardContent[_ngcontent-%COMP%]{position:relative;width:450px;height:400px;background:rgba(255,255,255,.3);box-shadow:20px 20px 40px -6px #0003;border-radius:20px;overflow:hidden;margin-left:20px;margin-bottom:20px}.productDescription[_ngcontent-%COMP%]{color:#fff;margin:20px}.productDescription[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-bottom:20px;display:flex;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;background:transparent;padding:10px 20px;border:none;border-left:1px solid rgba(255,255,255,.3);border-top:1px solid rgba(255,255,255,.3);border-radius:5000px;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);box-shadow:4px 4px 60px #0003;color:#fff;font-family:Montserrat,sans-serif;font-weight:500;transition:all .2s ease-in-out;text-shadow:2px 2px 4px rgba(0,0,0,.2)}.productDescription[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background:rgba(255,255,255,.1);box-shadow:4px 4px 60px 8px #0003}h2[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.description[_ngcontent-%COMP%]{margin:20px}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#1BBFE944;clip-path:circle(300px at 80% 20%);transition:.5s ease-in-out}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover:before{clip-path:circle(300px at 50% 50%)}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);z-index:1000;width:100%;height:100%;transition:.5s}.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(20deg);width:270px}mat-chip-list[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}mat-chip-list[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]{background-color:#ffffff4d;color:#fff}.goback[_ngcontent-%COMP%]{height:min-content}']}),n})();var Z=c(4762),P=c(3620);function y(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"tr"),t.TgZ(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t.TgZ(5,"div",3),t.TgZ(6,"mat-icon",4),t.NdJ("click",function(){const s=t.CHM(o).$implicit;return t.oxw().deleteFromShoppingList(s)}),t._uU(7,"expand_less"),t.qZA(),t._uU(8),t.TgZ(9,"mat-icon",5),t.NdJ("click",function(){const s=t.CHM(o).$implicit;return t.oxw().addFromShoppingList(s)}),t._uU(10,"expand_more"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.qZA(),t.qZA()}if(2&n){const o=e.$implicit;t.xp6(3),t.Oqu(o.name),t.xp6(5),t.hij(" ",o.quantity," "),t.xp6(4),t.Oqu(o.price*o.quantity)}}const k=function(){return["/"]};class a{constructor(e){this.store=e,this.displayedColumns=["name","quantity","price","action-delete"]}deleteFromShoppingList(e){this.store.dispatch(new l.K(e))}addFromShoppingList(e){this.store.dispatch(new l.R(e))}}a.\u0275fac=function(e){return new(e||a)(t.Y36(d.yh))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-shopping-list"]],decls:22,vars:8,consts:[[1,"container"],["type","submit","value","Retour",3,"routerLink"],[4,"ngFor","ngForFor"],[1,"quantity"],[1,"less",3,"click"],[1,"more",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"input",1),t.TgZ(2,"table"),t.TgZ(3,"thead"),t.TgZ(4,"tr"),t.TgZ(5,"th"),t._uU(6,"Produit"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Quantit\xe9"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Prix"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"tbody"),t.YNc(12,y,13,3,"div",2),t.ALo(13,"async"),t.qZA(),t.TgZ(14,"tfoot"),t.TgZ(15,"tr"),t.TgZ(16,"td"),t._uU(17,"Prix total"),t.qZA(),t._UZ(18,"td"),t.TgZ(19,"td"),t._uU(20),t.ALo(21,"async"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("routerLink",t.DdM(7,k)),t.xp6(11),t.Q6J("ngForFor",t.lcZ(13,3,o.dataSource$)),t.xp6(8),t.Oqu(t.lcZ(21,5,o.totalPrice$)))},directives:[g.rH,_.Hw],pipes:[h.Ov],styles:[".container[_ngcontent-%COMP%]{position:absolute;top:100px;left:20px;right:20px;width:100%;height:100%}table[_ngcontent-%COMP%]{width:95%;max-width:870px;border-collapse:collapse;overflow:hidden;border-radius:20px;box-shadow:0 0 20px #0000001a}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:20px;background-color:#ffffff4d;color:#fff}th[_ngcontent-%COMP%]{text-align:left}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#1bbfe944}tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-weight:bold;background-color:#1bbfe944}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ffffff4d}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{position:relative}.quantity[_ngcontent-%COMP%]{width:min-content;display:flex;flex-direction:row;background-color:#ffffff4d;border-radius:20px;padding:10px}.quantity[_ngcontent-%COMP%]   .less[_ngcontent-%COMP%]{margin-right:5px}.quantity[_ngcontent-%COMP%]   .less[_ngcontent-%COMP%]:hover{cursor:pointer}.quantity[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%]{margin-left:5px}.quantity[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%]:hover{cursor:pointer}.quantity[_ngcontent-%COMP%]:hover{background:rgba(255,255,255,.1);box-shadow:4px 4px 60px 8px #0003}"]}),(0,Z.gn)([(0,d.Ph)(P.o.getListProducts)],a.prototype,"dataSource$",void 0),(0,Z.gn)([(0,d.Ph)(P.o.getTotalPrice)],a.prototype,"totalPrice$",void 0);var F=c(4859);const S=[{path:"",component:T},{path:"product/:id",component:q},{path:"shopping-list",component:a}];let U=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[h.ez,g.Bz.forChild(S),F.h]]}),n})()}}]);