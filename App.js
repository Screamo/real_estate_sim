
enyo.kind({
	name:"ManagePanel",
	kind:"FittableRows",
	master:null,
	components:[
		{kind:"FittableColumns",style:"height: 100px;",components:[
				{kind:"Control",style:"width: 100%;",ontap:"ChangeViewMode",clicked:true,components:[
						{name:"ViewModeChanger",kind:"ImageCarousel",style:"height:100%;width: 100%;",index:0,images:[
								"assets/viewmode_normal.png",
								"assets/viewmode_landprice.png",
								"assets/viewmode_stats.png"
							],
							defaultScale: "width: 100%; height: 100px;"
						},
					]
				},
				{style:"width: 100px;",content:"Back"}
			]
		},
		{name:"balance_view",
			style:"height: 100px; border: 10px solid #20FF20; background-color: #10DD10; font-size: 70px; font-family:  Copperplate Gothic Light, sans-serif; font-weight: bold; text-align:center; color:#D4AF37;",
			content:"Balance"},
		{name:"stats_view", kind:"FittableRows", style:"height: 380px; background-color: #496445; font-size: 70px; font-family:  Copperplate Gothic Light, sans-serif; font-weight: bold; text-align:center; color:#587878;",content:"Stats"},
		{name: "ManagePanels",kind: "Panels",arrangerKind: "CardSlideInArranger", index:0,draggable:false,fit:true,style:"height: 500px; width: 100%;",components:[
				{kind: "FittableRows",components: [ //0
						{content:"Manage Land",kind: "onyx.Toolbar", style: "height: 33%;",ontap:"ListItemTapped"},
						{content:"Construction",kind: "onyx.Toolbar", style: "height: 33%;",ontap:"ListItemTapped"},
						{content:"Demolish",kind: "onyx.Toolbar", style: "height: 34%;",ontap:"ListItemTapped"},
					]
				},
				{kind: "FittableRows",components: [ //1
						{content:"Purchase Land",kind: "onyx.Toolbar", style: "height: 33.33%;",ontap:"ListItemTapped"},
						{content:"Sell Land",kind: "onyx.Toolbar", style: "height: 33.33%;",ontap:"ListItemTapped"},
						{content:"Go Back",serial:0,kind: "onyx.Toolbar", style: "height: 33.33%;",ontap:"ListItemTapped"},
					]
				},
				{kind: "FittableRows",components: [ //2
						{content:"Purchase 30m×30m",kind: "onyx.Toolbar", style: "height: 25%;",ontap:"ListItemTapped"},
						{content:"Purchase 150m×150m",kind: "onyx.Toolbar", style: "height: 25%;",ontap:"ListItemTapped"},
						{content:"Purchase 300m×300m",kind: "onyx.Toolbar", style: "height: 25%;",ontap:"ListItemTapped"},
						{content:"Go Back",serial:1,kind: "onyx.Toolbar", style: "height: 25%;",ontap:"ListItemTapped"},
					]
				},
				{kind: "FittableRows",components: [ //3
						{content:"Sell 30m×30m",kind: "onyx.Toolbar", style: "height: 25%;",ontap:"ListItemTapped"},
						{content:"Sell 150m×150m",kind: "onyx.Toolbar", style: "height: 25%;",ontap:"ListItemTapped"},
						{content:"Sell 300m×300m",kind: "onyx.Toolbar", style: "height: 25%;",ontap:"ListItemTapped"},
						{content:"Go Back",serial:2,kind: "onyx.Toolbar", style: "height: 25%;",ontap:"ListItemTapped"},
					]
				},
				{kind: "FittableRows",components: [ //4
						{content:"Build Road",kind: "onyx.Toolbar", style: "height: 20%;",ontap:"ListItemTapped"},
						{content:"Build Residence",kind: "onyx.Toolbar", style: "height: 20%;",ontap:"ListItemTapped"},
						{content:"Build Commercial Buildings",kind: "onyx.Toolbar", style: "height: 20%;",ontap:"ListItemTapped"},
						{content:"Build Recreational Buildings",kind: "onyx.Toolbar", style: "height: 20%;",ontap:"ListItemTapped"},
						{content:"Go Back",serial:3,kind: "onyx.Toolbar", style: "height: 20%;",ontap:"ListItemTapped"},
					]
				},
				{kind: "FittableRows",components: [ //5
						{content:"30m road",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"150m horizontal road",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"150m vertical road",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"300m horizontal road",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"300m vertical road",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"Go Back",serial:4,kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
					]
				},
				{kind: "FittableRows",components: [ //6
						{content:"House",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"Condo",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"Triplex",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"Apartment Complex",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"Residence Cluster",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"Go Back",serial:4,kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
					]
				},
				{kind: "FittableRows",components: [ //7
						{content:"Convenience Store",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"Diner",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"Supermarket",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"Office Building",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"Central Bank",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"Go Back",serial:4,kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
					]
				},
				{kind: "FittableRows",components: [ //8
						{content:"Basketball Court",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"Swimming Pool",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"Christian Church",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"Opera House",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"Stadium Complex",kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
						{content:"Go Back",serial:4,kind: "onyx.Toolbar", style: "height: 16.667%;",ontap:"ListItemTapped"},
					]
				},
				{kind: "FittableRows",components: [ //9
						{content:"Go Back",serial:0,kind: "onyx.Toolbar", style: "height: 100%;",ontap:"ListItemTapped"},
					]
				},
			]
		}

	],
	ChangeViewMode:function(inSender,inEvent){
		enyo.log("Change View Mode");
		if(this.master.$.GameSpace0.cached_execute_mode=="build")
			return;
		if(this.master.$.GameSpace0.cached_execute_mode=="purchase")
			return;	
			
		if(inSender.clicked)
			this.$.ViewModeChanger.setIndex((this.$.ViewModeChanger.index+1)%3);
		else
			this.$.ViewModeChanger.setIndex(0);
			
		if(this.$.ViewModeChanger.index==0){
			if(this.master.$.GameSpace0.drawMode!=0){
				this.master.$.GameSpace0.drawMode=0;
				this.master.$.GameSpace0.update_all();
			}
		}else if(this.$.ViewModeChanger.index==1){
			if(this.master.$.GameSpace0.drawMode!=1){
				this.master.$.GameSpace0.drawMode=1;
				this.master.$.GameSpace0.update_all();
			}
		}else if(this.$.ViewModeChanger.index==2){
			if(this.master.$.GameSpace0.drawMode!=2){
				this.master.$.GameSpace0.drawMode=2;
				this.master.$.GameSpace0.update_all();
			}
		}
	},
	ListItemTapped:function(inSender,inEvent){
		if(inSender.content=="Go Back"){
			var dest;
			if(inSender.serial==0) dest=0;
			else if(inSender.serial==1) dest=1;
			else if(inSender.serial==2) dest=1;
			else if(inSender.serial==3) dest=0;
			else if(inSender.serial==4) dest=4;
			
			this.master.$.GameSpace0.execute_mode="normal";
			this.master.$.GameSpace0.cached_execute_mode="normal";
			this.$.ManagePanels.setIndex(dest);
		}
		else if(inSender.content=="Manage Land"){
			this.$.ManagePanels.setIndex(1);
		}
		else if(inSender.content=="Construction"){
			this.$.ManagePanels.setIndex(4);
		}
		else if(inSender.content=="Upgrade Buildings"){
			
		}
		else if(inSender.content=="Demolish"){
			this.master.$.GameSpace0.execute_mode="demolish";
			this.master.$.GameSpace0.cached_execute_mode="demolish";
			this.$.ManagePanels.setIndex(9);
		}
		else if(inSender.content=="Purchase Land"){
			this.$.ManagePanels.setIndex(2);
		}
		else if(inSender.content=="Sell Land"){
			this.$.ManagePanels.setIndex(3);
		}
		else if(inSender.content=="Purchase 30m×30m"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="purchase";
			this.master.$.GameSpace0.cached_execute_mode="purchase";
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<1;x++){
				for(var y=0;y<1;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Purchase 150m×150m"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="purchase";
			this.master.$.GameSpace0.cached_execute_mode="purchase";
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<5;x++){
				for(var y=0;y<5;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Purchase 300m×300m"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="purchase";
			this.master.$.GameSpace0.cached_execute_mode="purchase";
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<10;x++){
				for(var y=0;y<10;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Sell 30m×30m"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="sell";
			this.master.$.GameSpace0.cached_execute_mode="sell";
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<1;x++){
				for(var y=0;y<1;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Sell 150m×150m"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="sell";
			this.master.$.GameSpace0.cached_execute_mode="sell";
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<5;x++){
				for(var y=0;y<5;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Sell 300m×300m"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="sell";
			this.master.$.GameSpace0.cached_execute_mode="sell";
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<10;x++){
				for(var y=0;y<10;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}else if(inSender.content=="Build Road"){
			this.$.ManagePanels.setIndex(5);
		}
		else if(inSender.content=="30m road"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="road";
			this.master.$.GameSpace0.build_price=100;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<1;x++){
				for(var y=0;y<1;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="150m horizontal road"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="road";
			this.master.$.GameSpace0.build_price=500;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<5;x++){
				for(var y=0;y<1;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="150m vertical road"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="road";
			this.master.$.GameSpace0.build_price=500;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<1;x++){
				for(var y=0;y<5;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="300m horizontal road"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="road";
			this.master.$.GameSpace0.build_price=1000;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<10;x++){
				for(var y=0;y<1;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="300m vertical road"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="road";
			this.master.$.GameSpace0.build_price=1000;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<1;x++){
				for(var y=0;y<10;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Build Residence"){
			this.$.ManagePanels.setIndex(6);
		}
		else if(inSender.content=="House"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="house";
			this.master.$.GameSpace0.target_department=this.master.$.GameSpace0.residence_department;
			this.master.$.GameSpace0.build_quotient=[0.8,0,0];
			this.master.$.GameSpace0.build_price=500;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<1;x++){
				for(var y=0;y<1;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Condo"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="condo";
			this.master.$.GameSpace0.target_department=this.master.$.GameSpace0.residence_department;
			this.master.$.GameSpace0.build_quotient=[0.9,0,0];
			this.master.$.GameSpace0.build_price=1500;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<3;x++){
				for(var y=0;y<2;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Triplex"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="triplex";
			this.master.$.GameSpace0.target_department=this.master.$.GameSpace0.residence_department;
			this.master.$.GameSpace0.build_quotient=[0.9,0,0];
			this.master.$.GameSpace0.build_price=2000;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<3;x++){
				for(var y=0;y<1;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Apartment Complex"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="apartment_complex";
			this.master.$.GameSpace0.target_department=this.master.$.GameSpace0.residence_department;
			this.master.$.GameSpace0.build_quotient=[1.1,0,0];
			this.master.$.GameSpace0.build_price=10000;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<3;x++){
				for(var y=0;y<3;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Residence Cluster"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="residence_cluster";
			this.master.$.GameSpace0.target_department=this.master.$.GameSpace0.residence_department;
			this.master.$.GameSpace0.build_quotient=[1.4,0,0];
			this.master.$.GameSpace0.build_price=15000;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<5;x++){
				for(var y=0;y<5;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Build Commercial Buildings"){
			this.$.ManagePanels.setIndex(7);
		}
		else if(inSender.content=="Convenience Store"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="convenience_store";
			this.master.$.GameSpace0.target_department=this.master.$.GameSpace0.commercial_department;
			this.master.$.GameSpace0.build_quotient=[0,0.8,0];
			this.master.$.GameSpace0.build_price=700;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<1;x++){
				for(var y=0;y<1;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Diner"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="diner";
			this.master.$.GameSpace0.target_department=this.master.$.GameSpace0.commercial_department;
			this.master.$.GameSpace0.build_quotient=[0,0.9,0];
			this.master.$.GameSpace0.build_price=1500;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<2;x++){
				for(var y=0;y<1;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Supermarket"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="supermarket";
			this.master.$.GameSpace0.target_department=this.master.$.GameSpace0.commercial_department;
			this.master.$.GameSpace0.build_quotient=[0,1.1,0];
			this.master.$.GameSpace0.build_price=10000;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<2;x++){
				for(var y=0;y<3;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Office Building"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="office_building";
			this.master.$.GameSpace0.target_department=this.master.$.GameSpace0.commercial_department;
			this.master.$.GameSpace0.build_quotient=[0,1.3,0];
			this.master.$.GameSpace0.build_price=50000;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<6;x++){
				for(var y=0;y<4;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Central Bank"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="central_bank";
			this.master.$.GameSpace0.target_department=this.master.$.GameSpace0.commercial_department;
			this.master.$.GameSpace0.build_quotient=[0,1.5,0];
			this.master.$.GameSpace0.build_price=70000;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<5;x++){
				for(var y=0;y<6;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Build Recreational Buildings"){
			this.$.ManagePanels.setIndex(8);
		}
		else if(inSender.content=="Basketball Court"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="basketball_court";
			this.master.$.GameSpace0.target_department=this.master.$.GameSpace0.recreational_department;
			this.master.$.GameSpace0.build_quotient=[0,0,0.8];
			this.master.$.GameSpace0.build_price=500;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<1;x++){
				for(var y=0;y<2;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Christian Church"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="christian_church";
			this.master.$.GameSpace0.target_department=this.master.$.GameSpace0.recreational_department;
			this.master.$.GameSpace0.build_quotient=[0,0,1];
			this.master.$.GameSpace0.build_price=3000;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<4;x++){
				for(var y=0;y<4;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Stadium Complex"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="stadium";
			this.master.$.GameSpace0.target_department=this.master.$.GameSpace0.recreational_department;
			this.master.$.GameSpace0.build_quotient=[0,0,1.1];
			this.master.$.GameSpace0.build_price=15000;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<8;x++){
				for(var y=0;y<6;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Swimming Pool"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="swimming_pool";
			this.master.$.GameSpace0.target_department=this.master.$.GameSpace0.recreational_department;
			this.master.$.GameSpace0.build_quotient=[0,0,1.3];
			this.master.$.GameSpace0.build_price=5000;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<3;x++){
				for(var y=0;y<2;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		else if(inSender.content=="Opera House"){
			this.ChangeViewMode(0);
			this.master.$.GameSpace0.execute_mode="build";
			this.master.$.GameSpace0.cached_execute_mode="build";
			this.master.$.GameSpace0.build_type="operahouse";
			this.master.$.GameSpace0.target_department=this.master.$.GameSpace0.recreational_department;
			this.master.$.GameSpace0.build_quotient=[0,0,1.5];
			this.master.$.GameSpace0.build_price=80000;
			this.master.$.GameSpace0.execute_list.length=0;
			for(var x=0;x<4;x++){
				for(var y=0;y<4;y++){
					this.master.$.GameSpace0.execute_list.push([x,y]);
				}
			}
		}
		
	}
});

enyo.kind({
    name: "landGridElement",

	building_identity:0,
	
	type: "grass",
    x: 0,
    y: 0,
    purchased: false,
    occupied: false,
	flat: true,
	
	isRoad: false,
	road_up: "f",
	road_right: "f",
	road_down: "f",
	road_left: "f",
	
    occupyType: 0,
    
	landPrice: 0,
    create: function () {
        this.purchased = false;
        this.occupied = false;
		this.isRoad = false,
		this.road_up = "f",
		this.road_right = "f",
		this.road_down = "f",
		this.road_right = "f",
        this.occupyType = 0;
        this.landPrice = 100;
    },

    landPriceChanged: function (newPrice) {
        this.landPrice = newPrice;
    },

    getLandPrice: function () {
        return this.landPrice;
    },

    purchaseLand: function () {
        this.purchased = true;
    },

    occupyLand: function (newOccupyType) {
        this.occupied = true;
        this.occupyType = newOccupyType;
    },

    isOccupied: function () {
        return this.occupied;
    },

    setOccupied: function (arg) {
        this.occupied = arg;
    }
});

enyo.kind({
	name: "landGrid",
	
	gridSize: 60,
	landSpace: new Array(),
	
	create: function(){
		enyo.log("land grid create");
		this.landSpace=new Array(this.gridSize);
		
		for(var i=0;i<this.gridSize;i++){
			this.landSpace[i]=new Array(this.gridSize);
		}
		
		for(var i=0;i<this.gridSize;i++){
			for(var j=0;j<this.gridSize;j++) {
				this.landSpace[i][j]=new landGridElement();
				this.landSpace[i][j].x=i;
				this.landSpace[i][j].y=j;
				//enyo.log(this.landSpace[i][j].x+" , "+this.landSpace[i][j].y+"</br>");
			}
		}
		this.initialize_land();
	},
	
	getGridSize: function(){
		return this.gridSize;
	},
	
	getLandSpace: function() {
		//enyo.log("return landSpace.");
		return this.landSpace;
	},
	
	initialize_land: function() {
		for(var i=0; i<60; i++){
			for(var j=0; j< 60; j++){
				if( (i-40)*(i-40)+(j-33)*(j-33) < 225 ){
					this.landSpace[i][j].type="default_water";
					this.landSpace[i][j].flat=false;
				}
			}
		}
		for(var i=0; i<60; i++){
			for(var j=0; j< 60; j++){
				if( (i-30)*(i-30)+(j-23)*(j-23) < 289 ){
					this.landSpace[i][j].type="default_water";
					this.landSpace[i][j].flat=false;
				}
			}
		}
		for(var i=0; i<20; i++){
			for(var j=0; j< 20; j++){
				if(i+j<20){
					this.landSpace[i][j].type="tree";
					this.landSpace[i][j].flat=false;
				}
			}
		}
		for(var i=0; i<60; i++){
			for(var j=0; j< 60; j++){
				if( ((i-10)*(i-10))/9+((j-43)*(j-43))/4 < 10 ){
					this.landSpace[i][j].type="empty_land";
					this.landSpace[i][j].flat=false;
				}
			}
		}
		for(var i=0; i<60; i++){
			for(var j=0; j< 60; j++){
				if( ((i-13)*(i-13))/4+((j-48)*(j-48))/9 < 7 ){
					this.landSpace[i][j].type="empty_land";
					this.landSpace[i][j].flat=false;
				}
			}
		}
		for(var i=0; i<60; i++){
			for(var j=0; j< 60; j++){
				if( ((i-9)*(i-9))/4+((j-45)*(j-45))/9 < 3 ){
					this.landSpace[i][j].type="empty_land";
					this.landSpace[i][j].flat=false;
				}
			}
		}
		for(var i=0; i<60; i++){
			for(var j=0; j< 60; j++){
				if( ((i-13)*(i-13))/1+((j-45)*(j-45))/1 < 16 ){
					this.landSpace[i][j].type="default_water";
					this.landSpace[i][j].flat=false;
				}
			}
		}
	},
}),
enyo.kind({
	name: "building_node",
	price: 0,
	id: 0,
	type: " ",
	head : null,
	tail : null,
	list_size : 0,
	adjacent_to_road: 0,
	building_quotient : [0,0,0],
	building_quotient_by_influence : [0,0,0],
	push_to_location_list: function(arg){
		if(this.list_size==0){
			this.head=new list_node();
			this.tail=this.head;
			this.head.content=arg;
			this.list_size++;
		}else{
			var newNode=new list_node();
			newNode.content=arg;
			this.tail.next=newNode;
			newNode.prev=this.tail;
			this.tail=newNode;
			this.list_size++;
		}
	},
}),
enyo.kind({
	name: "list_node",
	content : null,
	prev : null,
	next : null,
}),
enyo.kind({
	name: "building_queue",
	serial : 0,
	head : null,
	tail : null,
	list_size : 0,
	push_to_building_queue : function(arg){
		if(this.list_size==0){
			this.head=new list_node();
			this.tail=this.head;
			this.head.content=arg;
			this.list_size++;
		}else{
			var newNode=new list_node();
			newNode.content=arg;
			this.tail.next=newNode;
			newNode.prev=this.tail;
			this.tail=newNode;
			this.list_size++;
		}
	},
	remove_from_building_queue:function(arg){
		var p=this.head;
		var head=p;
		do{
		
		}while(p!=this.head)
		/*
		while(1){
			if(p.content==arg){
				if(this.list_size==1){
					this.head=0;
					this.tail=0;
					delete p;
				}else{
					p.prev.next=p.next;
					p.next.prev=p.prev;
					delete p;
				}
				this.list_size--;
				break;
			}
			p=p.next;
			if(p==head)
				break;
		}*/
	}
}),
enyo.kind({
	name: "department",
	serial: 0,
	education : 0,
	research : 0,
	fund_revenue : 0,
	faculty : 0,
	expense :0,
	constructor: function(arg){
		this.inherited(arguments);
		enyo.log("department created " + arg);
		this.serial=arg;
		this.building_queue=new building_queue();
		this.building_queue.serial=this.serial;
	},
	push_to_building_queue:function(arg){
		this.building_queue.push_to_building_queue(arg);
	},
	remove_from_building_queue:function(arg){
		this.building_queue.remove_from_building_queue(arg);
	}
});


enyo.kind({
	name:"GameSpace",
	kind:"FittableColumns",
	style:"width:2640px; height: 2640px;",
	land_Grid:new landGrid(),
	GameSpaceArray:new Array(),
	ImageArray:new Array(),
	
	increment_constant:0.01,
	
	master:null,
	drawMode:0,
	cached_drawMode:0,
	
	execute_location_x:0,
	execute_location_y:0,
	execute_price:0,
	execute_mode:"normal",
	cached_execute_mode:"normal",
	build_type:"none",
	build_price: 0,
	execute_list: [ [0,0] ],
	absolute_execute_list:[ [0,0] ],
	demolish_view_recover_head:0,
	build_quotient : [0,0,0],
	
	main_building_queue: new building_queue(),
	current_building_serial:0,
	target_department: 0,
	
	residence_department : new department(1),
	commercial_department : new department(2),
	recreational_department : new department(3),
	
	create:function(){
		this.inherited(arguments);
		this.absolute_execute_list.length=0;
		this.GameSpaceArray=new Array(60);
		for(var i=0;i<60;i++){
			this.GameSpaceArray[i]=new Array(60);
		}
		
		this.ImageArray=new Array(60);
		for(var i=0;i<60;i++){
			this.ImageArray[i]=new Array(60);
		}
		for(var i=0;i<60;i++){
			for(var j=0;j<60;j++){
				this.ImageArray[i][j]=new Image();
			}
		}
		
		for(var i=0;i<60;i++){
			this.createComponent({
				kind:"FittableRows",
				style:"height:2640px; width: 44px;"
			});
		}

		for(var i=0;i<60;i++){
			for(var j=0;j<60;j++){
				this.GameSpaceArray[i][j]=this.children[i].createComponent({
					style:"height:44px;width:44px;",
					x:i,
					y:j,
					ontap:"handleEvent",
					onmove:"handleEvent",
					owner:this
				});
			}
		}
		
		for(var i=0;i<60;i++){
			for(var j=0; j<60; j++){
				this.GameSpaceArray[i][j].createComponent({
					kind:"Canvas",
					attributes: {width:44, height:44},
					x:i,
					y:j,
					owner:this
				});
			}
		}
		
		for(var i=0;i<60;i++){
			for(var j=0; j<60; j++){
				this.GameSpaceArray[i][j].children[0].createComponent({
					kind:"canvas.Image",
					bounds:{l:0,t:0,w:44,h:44},
					owner:this,
					x:i,
					y:j,
					src:"assets/new_images/"+this.land_Grid.landSpace[i][j].type+".png",
				});
				this.GameSpaceArray[i][j].children[0].createComponent({
					kind:"canvas.Rectangle",
					bounds:{l:0,t:0,w:44,h:0},
					color:"#FFFFFF",
					owner:this,
					x:i,
					y:j,
				});
				this.GameSpaceArray[i][j]=this.GameSpaceArray[i][j].children[0];
			}
		}
		this.update_all();
	},
	update_all:function(){
		if(this.drawMode==0){
			for(var i=0;i<60;i++){
				for(var j=0;j<60;j++){
					this.GameSpaceArray[i][j].children[0].bounds.h=44;	
					this.GameSpaceArray[i][j].children[1].bounds.h=0;
					this.update_single(false,i,j);
				}
			}
		}else{
			for(var i=0;i<60;i++){
				for(var j=0;j<60;j++){
					this.GameSpaceArray[i][j].children[0].bounds.h=0;	
					this.GameSpaceArray[i][j].children[1].bounds.h=44;
					this.update_single(false,i,j);
				}
			}
		}
	},
	update_single:function(exception,x,y){
		if(this.GameSpaceArray[x]==null)
			return;
		if(this.GameSpaceArray[x][y]==null)
			return;
		
		if(exception==false){
			if(this.drawMode==0){
				this.GameSpaceArray[x][y].children[0].src="assets/new_images/"+this.land_Grid.landSpace[x][y].type+".png",
				this.GameSpaceArray[x][y].children[0].srcChanged();
				this.ImageArray[x][y].src=this.GameSpaceArray[x][y].children[0].src;
				this.ImageArray[x][y].onload = enyo.bind(this, function() {
					this.GameSpaceArray[x][y].update();
				});
				this.GameSpaceArray[x][y].update();
			}else if(this.drawMode==1){
				var h=(Math.floor(this.land_Grid.landSpace[x][y].landPrice*100/510)).toString(16);
				if(h.length==1){
					h='0'+h;
				}
				this.GameSpaceArray[x][y].children[1].color='#00'+h+'00';
				this.GameSpaceArray[x][y].update();
			}else if(this.drawMode==2){
				if(!this.land_Grid.landSpace[x][y].building_identity){
					this.GameSpaceArray[x][y].children[1].color='#000000';
				}else{
					var quotient = this.land_Grid.landSpace[x][y].building_identity.building_quotient;
					var quotient_by_influence = this.land_Grid.landSpace[x][y].building_identity.building_quotient_by_influence;
					var h_0=(Math.floor((quotient[0]+quotient_by_influence[0])*150)).toString(16);
					if(h_0.length==1){
						h_0='0'+h_0;
					}
					var h_1=(Math.floor((quotient[1]+quotient_by_influence[1])*150)).toString(16);
					if(h_1.length==1){
						h_1='0'+h_1;
					}
					var h_2=(Math.floor((quotient[2]+quotient_by_influence[2])*150)).toString(16);
					if(h_2.length==1){
						h_2='0'+h_2;
					}
					this.GameSpaceArray[x][y].children[1].color='#'+h_2+h_1+h_0;
				}
				this.GameSpaceArray[x][y].update();
			}
		}
	},
	handleEvent:function(inSender,inEvent){
		if(inEvent.type=="move"){
			if( (inSender.x==this.execute_location_x)&&(inSender.y==this.execute_location_y) ){
				return;
			}else{
				this.master.update_stats(this.land_Grid.landSpace[inSender.x][inSender.y]);
					
				this.execute_location_x=inSender.x;this.execute_location_y=inSender.y;
				
				for(var i=0,x,y;i<this.absolute_execute_list.length;i++){
					x=this.absolute_execute_list[i][0];
					y=this.absolute_execute_list[i][1];
					this.update_single(false,x,y);
				}
				this.absolute_execute_list.length=0;
				for(var i=0;i<this.execute_list.length;i++){
					this.absolute_execute_list.push( [inSender.x+this.execute_list[i][0],inSender.y+this.execute_list[i][1]] );
				}
				if( (this.execute_mode=="purchase")||(this.execute_mode=="sell")){
					for(var i=0,x,y;i<this.absolute_execute_list.length;i++){
						x=this.absolute_execute_list[i][0];
						y=this.absolute_execute_list[i][1];
						if(this.GameSpaceArray[x]==null)
							continue;
						if(this.GameSpaceArray[x][y]==null)
							continue;
						if(this.land_Grid.landSpace[x][y].purchased)
							this.GameSpaceArray[x][y].children[0].src="assets/new_images/purchased.png";
						else
							this.GameSpaceArray[x][y].children[0].src="assets/new_images/not_purchased.png";
						this.GameSpaceArray[x][y].children[0].srcChanged();
						this.ImageArray[x][y].src=this.GameSpaceArray[x][y].children[0].src;
						this.update_single(true,x,y);
					}
				}
				else if(this.execute_mode=="build"){
					var buildable=true;
					for(var i=0,x,y;i<this.absolute_execute_list.length;i++){
						x=this.absolute_execute_list[i][0];
						y=this.absolute_execute_list[i][1];
						if(this.GameSpaceArray[x]==null){
							buildable=false;
							break;
						}
						if(this.GameSpaceArray[x][y]==null){
							buildable=false;
							break;
						}
						if(!this.land_Grid.landSpace[x][y].purchased){
							buildable=false;
							break;
						}
						if(this.land_Grid.landSpace[x][y].occupied){
							buildable=false;
							break;
						}
					}
					if(buildable){
						for(var i=0,x,y;i<this.absolute_execute_list.length;i++){
							x=this.absolute_execute_list[i][0];
							y=this.absolute_execute_list[i][1];
							if(this.GameSpaceArray[x]==null)
								continue;
							if(this.GameSpaceArray[x][y]==null)
								continue;
							this.GameSpaceArray[x][y].children[0].src="assets/new_images/buildable.png";
							this.GameSpaceArray[x][y].children[0].srcChanged();
							this.ImageArray[x][y].src=this.GameSpaceArray[x][y].children[0].src;
							this.update_single(true,x,y);
						}
					}else{
						for(var i=0,x,y;i<this.absolute_execute_list.length;i++){
							x=this.absolute_execute_list[i][0];
							y=this.absolute_execute_list[i][1];
							if(this.GameSpaceArray[x]==null)
								continue;
							if(this.GameSpaceArray[x][y]==null)
								continue;
							this.GameSpaceArray[x][y].children[0].src="assets/new_images/unbuildable.png";
							this.GameSpaceArray[x][y].children[0].srcChanged();
							this.ImageArray[x][y].src=this.GameSpaceArray[x][y].children[0].src;
							this.update_single(true,x,y);
						}
					}
				}
				else if(this.execute_mode=="demolish"){
				/*
					if(this.land_Grid.landSpace[inSender.x][inSender.y].building_identity!=0){
						var p=this.land_Grid.landSpace[inSender.x][inSender.y].building_identity.head;
						var head=p;
						this.demolish_view_recover_head=head;
						var x,y;
						while(1){
							if(!p)
								break;
							x=p.content[0];
							y=p.content[1];
							this.GameSpaceArray[x][y].children[0].src="assets/new_images/demolishable.png";
							this.GameSpaceArray[x][y].children[0].srcChanged();
							this.ImageArray[x][y].src=this.GameSpaceArray[x][y].children[0].src;
							this.update_single(true,x,y);
							p=p.next;
							if(p==head)
								break;
						}
					}else if(this.land_Grid.landSpace[inSender.x][inSender.y].isRoad){
						this.GameSpaceArray[inSender.x][inSender.y].children[0].src="assets/new_images/demolishable.png";
						this.GameSpaceArray[inSender.x][inSender.y].children[0].srcChanged();
						this.ImageArray[inSender.x][inSender.y].src=this.GameSpaceArray[inSender.x][inSender.y].children[0].src;
						this.update_single(true,inSender.x,inSender.y);
					}
					if((this.demolish_view_recover_head!=0)&&(this.land_Grid.landSpace[inSender.x][inSender.y].building_identity==0)){
						var p=this.demolish_view_recover_head;
						var head=p;
						while(1){
							if(!p)
								break;
							this.update_single(false,p.content[0],p.content[1]);
							p=p.next;
							if(p==head)
								break;
						}
						this.demolish_view_recover_head=0;
					}
					*/
					var p=this.demolish_view_recover_head;
					var head=p;
					while(1){
						if(!p)
							break;
						this.update_single(false,p.content[0],p.content[1]);
						p=p.next;
						if(p==head)
							break;
					}
					if(this.land_Grid.landSpace[inSender.x][inSender.y].building_identity!=0){
						var p=this.land_Grid.landSpace[inSender.x][inSender.y].building_identity.head;
						var head=p;
						var x,y;
						while(1){
							if(!p)
								break;
							x=p.content[0];
							y=p.content[1];
							this.GameSpaceArray[x][y].children[0].src="assets/new_images/demolishable.png";
							this.GameSpaceArray[x][y].children[0].srcChanged();
							this.ImageArray[x][y].src=this.GameSpaceArray[x][y].children[0].src;
							this.update_single(true,x,y);
							p=p.next;
							if(p==head)
								break;
						}
					}else if(this.land_Grid.landSpace[inSender.x][inSender.y].isRoad){
						this.GameSpaceArray[inSender.x][inSender.y].children[0].src="assets/new_images/demolishable.png";
						this.GameSpaceArray[inSender.x][inSender.y].children[0].srcChanged();
						this.ImageArray[inSender.x][inSender.y].src=this.GameSpaceArray[inSender.x][inSender.y].children[0].src;
						this.update_single(true,inSender.x,inSender.y);
					}
					this.demolish_view_recover_head=0;
					if(this.land_Grid.landSpace[inSender.x][inSender.y].building_identity!=0){
						this.demolish_view_recover_head=this.land_Grid.landSpace[inSender.x][inSender.y].building_identity.head;
					}
				}
			}
		}
		else if(inEvent.type=="tap"){
			if(this.execute_mode=="purchase"){
				var total_price=0;
				this.absolute_execute_list.length=0;
				for(var i=0;i<this.execute_list.length;i++){
					this.absolute_execute_list.push( [inSender.x+this.execute_list[i][0],inSender.y+this.execute_list[i][1]] );
				}
				for(var i=0,x,y;i<this.absolute_execute_list.length;i++){
					x=this.absolute_execute_list[i][0];
					y=this.absolute_execute_list[i][1];
					if(this.GameSpaceArray[x]==null)
						continue;
					if(this.GameSpaceArray[x][y]==null)
						continue;
					if(!this.land_Grid.landSpace[x][y].purchased)
						total_price+=this.land_Grid.landSpace[x][y].landPrice;
				}
				if(this.master.Balance>=total_price){
					this.master.update_stats("purchased for "+total_price);
					this.master.Balance-=total_price;
					this.master.update_balance();
					for(var i=0,x,y;i<this.absolute_execute_list.length;i++){
						x=this.absolute_execute_list[i][0];
						y=this.absolute_execute_list[i][1];
						if(this.GameSpaceArray[x]==null)
							continue;
						if(this.GameSpaceArray[x][y]==null)
							continue;
						if(!this.land_Grid.landSpace[x][y].purchased)
							this.land_Grid.landSpace[x][y].purchased=true;
							
						if(this.land_Grid.landSpace[x][y].purchased)
							this.GameSpaceArray[x][y].children[0].src="assets/new_images/purchased.png";
						else
							this.GameSpaceArray[x][y].children[0].src="assets/new_images/not_purchased.png";
						this.GameSpaceArray[x][y].children[0].srcChanged();
						this.ImageArray[x][y].src=this.GameSpaceArray[x][y].children[0].src;
						this.update_single(true,x,y);
					}
				}else{
					this.master.update_stats("Not enough funds!");
				}
			}
			else if(this.execute_mode=="sell"){
				var total_price=0;
				this.absolute_execute_list.length=0;
				for(var i=0;i<this.execute_list.length;i++){
					this.absolute_execute_list.push( [inSender.x+this.execute_list[i][0],inSender.y+this.execute_list[i][1]] );
				}
				for(var i=0,x,y;i<this.absolute_execute_list.length;i++){
					x=this.absolute_execute_list[i][0];
					y=this.absolute_execute_list[i][1];
					if(this.GameSpaceArray[x]==null)
						continue;
					if(this.GameSpaceArray[x][y]==null)
						continue;
					if( (this.land_Grid.landSpace[x][y].purchased)&&(!this.land_Grid.landSpace[x][y].occupied) )
						total_price+=this.land_Grid.landSpace[x][y].landPrice;
				}
				this.master.update_stats("sold for "+total_price);
				this.master.Balance+=total_price;
				this.master.update_balance();
				for(var i=0,x,y;i<this.absolute_execute_list.length;i++){
					x=this.absolute_execute_list[i][0];
					y=this.absolute_execute_list[i][1];
					if(this.GameSpaceArray[x]==null)
						continue;
					if(this.GameSpaceArray[x][y]==null)
						continue;
					if((this.land_Grid.landSpace[x][y].purchased)&&(!this.land_Grid.landSpace[x][y].occupied))
						this.land_Grid.landSpace[x][y].purchased=false;
						
					if(this.land_Grid.landSpace[x][y].purchased)
						this.GameSpaceArray[x][y].children[0].src="assets/new_images/purchased.png";
					else
						this.GameSpaceArray[x][y].children[0].src="assets/new_images/not_purchased.png";
					this.GameSpaceArray[x][y].children[0].srcChanged();
					this.ImageArray[x][y].src=this.GameSpaceArray[x][y].children[0].src;
					this.update_single(true,x,y);
				}
			}
			else if(this.execute_mode=="build"){
				if(this.master.Balance<this.build_price){
					this.master.update_stats("Not enough funds!");
					return;
				}
				this.master.Balance-=this.build_price;
				this.master.update_balance();
				if(this.build_type=="road"){
					var buildable=true;
					for(var i=0,x,y;i<this.absolute_execute_list.length;i++){
						x=this.absolute_execute_list[i][0];
						y=this.absolute_execute_list[i][1];
						if(this.GameSpaceArray[x]==null){
							buildable=false;
							break;
						}
						if(this.GameSpaceArray[x][y]==null){
							buildable=false;
							break;
						}
						if(!this.land_Grid.landSpace[x][y].purchased){
							buildable=false;
							break;
						}
						if(this.land_Grid.landSpace[x][y].occupied){
							buildable=false;
							break;
						}
					}
					if(buildable){
						for(var i=0,x,y;i<this.absolute_execute_list.length;i++){
							x=this.absolute_execute_list[i][0];
							y=this.absolute_execute_list[i][1];
								
							this.land_Grid.landSpace[x][y].isRoad=true;
							this.land_Grid.landSpace[x][y].occupied=true;
						}
						this.road_traversal(this.absolute_execute_list[0][0], this.absolute_execute_list[0][1]);
					}else{
						this.master.update_stats("You can't build there!");
						return;
					}
				}
				else{
					var buildable=true;
					for(var i=0,x,y;i<this.absolute_execute_list.length;i++){
						x=this.absolute_execute_list[i][0];
						y=this.absolute_execute_list[i][1];
						if(this.GameSpaceArray[x]==null){
							buildable=false;
							break;
						}
						if(this.GameSpaceArray[x][y]==null){
							buildable=false;
							break;
						}
						if(!this.land_Grid.landSpace[x][y].purchased){
							buildable=false;
							break;
						}
						if(this.land_Grid.landSpace[x][y].occupied){
							buildable=false;
							break;
						}
					}
					if(buildable){
						var new_building_node = new building_node();
						new_building_node.building_quotient=new Array(3);
						new_building_node.building_quotient_by_influence=new Array(3);
						new_building_node.building_quotient_by_influence[0]=0;
						new_building_node.building_quotient_by_influence[1]=0;
						new_building_node.building_quotient_by_influence[2]=0;
						
						new_building_node.price=this.build_price;
						new_building_node.building_quotient[0] = this.build_quotient[0];
						new_building_node.building_quotient[1] = this.build_quotient[1];
						new_building_node.building_quotient[2] = this.build_quotient[2];
						if(this.build_type=="house"){
							new_building_node.type=this.build_type.concat(Math.floor(Math.random()*5));
						}else if(this.build_type=="office_building"){
							new_building_node.type=this.build_type.concat(Math.floor(Math.random()*2));
						}else
							new_building_node.type=this.build_type;
						
						new_building_node.serial=this.current_building_serial;
						for(var i=0, b; i<this.execute_list.length ;i++){
							x=this.execute_list[i][0];
							y=this.execute_list[i][1];
							
							new_building_node.push_to_location_list([x+inSender.x,y+inSender.y]);
							this.land_Grid.landSpace[x+inSender.x][y+inSender.y].occupied=true;
							this.land_Grid.landSpace[x+inSender.x][y+inSender.y].type=new_building_node.type+"_"+x+"_"+y;
							this.land_Grid.landSpace[x+inSender.x][y+inSender.y].building_identity=new_building_node;
						}
						this.main_building_queue.push_to_building_queue(0,new_building_node);
						this.current_building_serial++;
					}else{
						this.master.update_stats("You can't build there!");
						return;
					}
				}
			}
			else if(this.execute_mode=="demolish"){
				if(this.land_Grid.landSpace[inSender.x][inSender.y].building_identity!=0){
					var p=this.land_Grid.landSpace[inSender.x][inSender.y].building_identity.head;
					this.main_building_queue.remove_from_building_queue(this.land_Grid.landSpace[inSender.x][inSender.y].building_identity);
					
					var head=p;
					while(1){
						if(!p)
							break;
						this.land_Grid.landSpace[p.content[0]][p.content[1]].occupied=false;
						this.land_Grid.landSpace[p.content[0]][p.content[1]].type="empty_land";
						this.land_Grid.landSpace[p.content[0]][p.content[1]].building_identity=0;
						this.update_single(false,p.content[0],p.content[1]);
						p=p.next;
						if(p==head)
							break;
					}
				}else if(this.land_Grid.landSpace[inSender.x][inSender.y].isRoad){
					this.land_Grid.landSpace[inSender.x][inSender.y].occupied=false;
					this.land_Grid.landSpace[inSender.x][inSender.y].isRoad=false;
					this.land_Grid.landSpace[inSender.x][inSender.y].road_up="f";
					this.land_Grid.landSpace[inSender.x][inSender.y].road_right="f";
					this.land_Grid.landSpace[inSender.x][inSender.y].road_down="f";
					this.land_Grid.landSpace[inSender.x][inSender.y].road_left="f";
					this.land_Grid.landSpace[inSender.x][inSender.y].type="empty_land";
					this.update_single(false,inSender.x,inSender.y);
					if(inSender.x+1<60){
						this.land_Grid.landSpace[inSender.x+1][inSender.y].road_left="f";
						this.road_traversal(inSender.x+1,inSender.y);
					}
					if(inSender.x-1>=0){
						this.land_Grid.landSpace[inSender.x-1][inSender.y].road_right="f";
						this.road_traversal(inSender.x-1,inSender.y);
					}
					if(inSender.y+1<60){
						this.land_Grid.landSpace[inSender.x][inSender.y+1].road_up="f";
						this.road_traversal(inSender.x,inSender.y+1);
					}
					if(inSender.y-1>=0){
						this.land_Grid.landSpace[inSender.x][inSender.y-1].road_down="f";
						this.road_traversal(inSender.x,inSender.y-1);
					}
				}
			}	
		}
	},
	time_flies:function(){
		for(var n, b=this.main_building_queue.head; b!=null; b=b.next){
			n=b.content;
			var road_factor;
			if(n.adjacent_to_road==0)
				road_factor=0.3;
			else if(n.adjacent_to_road==1)
				road_factor=1;
				
			if(!n.building_quotient_by_influence)
				return;
				
			var quotients_factor = road_factor*(n.building_quotient_by_influence[0]+0.1)*(n.building_quotient_by_influence[1]+0.1)*(n.building_quotient_by_influence[2]+0.1);
			n.building_quotient_by_influence[0]=0;
			n.building_quotient_by_influence[1]=0;
			n.building_quotient_by_influence[2]=0;
			var price_density=n.price/n.list_size;
			var top=n.head.content[1];
			var bottom=n.tail.content[1];
			var left=n.head.content[0];
			var right=n.tail.content[0];
			for(var i=n.head;(i!=null);i=i.next){
				this.land_Grid.landSpace[i.content[0]][i.content[1]].landPrice+=price_density*this.increment_constant*quotients_factor;
				this.update_single(false,i.content[0],i.content[1]);
			}
			//enyo.log(left+","+top+"  "+right+","+bottom);
			var target_quotient;
			n.adjacent_to_road=0;
			for(var i=left-2;i<right+3;i++){
				if(!this.land_Grid.landSpace[i])
					continue;
				if(!this.land_Grid.landSpace[i][top-2])
					continue;
				this.land_Grid.landSpace[i][top-2].landPrice+=price_density*this.increment_constant*quotients_factor*0.25;
				
				if(this.land_Grid.landSpace[i][top-2].isRoad){
					n.adjacent_to_road=1;
					continue;
				}
				if(!this.land_Grid.landSpace[i][top-2].building_identity)
					continue;
					
				target_quotient=this.land_Grid.landSpace[i][top-2].building_identity.building_quotient;
				for(var j=0;j<2;j++){
					if(n.building_quotient_by_influence[j]<(target_quotient[j]*0.5))
						n.building_quotient_by_influence[j]=target_quotient[j]*0.5;
				}
			}
			for(var i=left-1;i<right+2;i++){
				if(!this.land_Grid.landSpace[i])
					continue;
				if(!this.land_Grid.landSpace[i][top-1])
					continue;
				this.land_Grid.landSpace[i][top-1].landPrice+=price_density*this.increment_constant*quotients_factor*0.5;
				
				if(this.land_Grid.landSpace[i][top-1].isRoad){
					n.adjacent_to_road=1;
					continue;
				}
				if(!this.land_Grid.landSpace[i][top-1].building_identity)
					continue;
					
				target_quotient=this.land_Grid.landSpace[i][top-1].building_identity.building_quotient;
				for(var j=0;j<2;j++){
					if(n.building_quotient_by_influence[j]<(target_quotient[j]*0.5))
						n.building_quotient_by_influence[j]=target_quotient[j]*0.5;
				}
			}
			for(var i=left-1;i<right+2;i++){
				if(!this.land_Grid.landSpace[i])
					continue;
				if(!this.land_Grid.landSpace[i][bottom+1])
					continue;
				this.land_Grid.landSpace[i][bottom+1].landPrice+=price_density*this.increment_constant*quotients_factor*0.5;
				
				if(this.land_Grid.landSpace[i][bottom+1].isRoad){
					n.adjacent_to_road=1;
					continue;
				}
				if(!this.land_Grid.landSpace[i][bottom+1].building_identity)
					continue;
					
				target_quotient=this.land_Grid.landSpace[i][bottom+1].building_identity.building_quotient;
				for(var j=0;j<2;j++){
					if(n.building_quotient_by_influence[j]<(target_quotient[j]*0.5))
						n.building_quotient_by_influence[j]=target_quotient[j]*0.5;
				}
			}
			for(var i=left-2;i<right+3;i++){
				if(!this.land_Grid.landSpace[i])
					continue;
				if(!this.land_Grid.landSpace[i][bottom+2])
					continue;
				this.land_Grid.landSpace[i][bottom+2].landPrice+=price_density*this.increment_constant*quotients_factor*0.25;
				
				if(this.land_Grid.landSpace[i][bottom+2].isRoad){
					n.adjacent_to_road=1;
					continue;
				}
				if(!this.land_Grid.landSpace[i][bottom+2].building_identity)
					continue;
					
				target_quotient=this.land_Grid.landSpace[i][bottom+2].building_identity.building_quotient;
				for(var j=0;j<2;j++){
					if(n.building_quotient_by_influence[j]<(target_quotient[j]*0.5))
						n.building_quotient_by_influence[j]=target_quotient[j]*0.5;
				}
			}
			for(var i=top-1;i<bottom+2;i++){
				if(!this.land_Grid.landSpace[left-2])
					continue;
				if(!this.land_Grid.landSpace[left-2][i])
					continue;
				this.land_Grid.landSpace[left-2][i].landPrice+=price_density*this.increment_constant*quotients_factor*0.25;
				
				if(this.land_Grid.landSpace[left-2][i].isRoad){
					n.adjacent_to_road=1;
					continue;
				}
				if(!this.land_Grid.landSpace[left-2][i].building_identity)
					continue;
					
				target_quotient=this.land_Grid.landSpace[left-2][i].building_identity.building_quotient;
				for(var j=0;j<2;j++){
					if(n.building_quotient_by_influence[j]<(target_quotient[j]*0.5))
						n.building_quotient_by_influence[j]=target_quotient[j]*0.5;
				}
			}
			for(var i=top;i<bottom+1;i++){
				if(!this.land_Grid.landSpace[left-1])
					continue;
				if(!this.land_Grid.landSpace[left-1][i])
					continue;
				this.land_Grid.landSpace[left-1][i].landPrice+=price_density*this.increment_constant*quotients_factor*0.5;
				
				if(this.land_Grid.landSpace[left-1][i].isRoad){
					n.adjacent_to_road=1;
					continue;
				}
				if(!this.land_Grid.landSpace[left-1][i].building_identity)
					continue;
					
				target_quotient=this.land_Grid.landSpace[left-1][i].building_identity.building_quotient;
				for(var j=0;j<2;j++){
					if(n.building_quotient_by_influence[j]<(target_quotient[j]*0.5))
						n.building_quotient_by_influence[j]=target_quotient[j]*0.5;
				}
			}
			for(var i=top;i<bottom+1;i++){
				if(!this.land_Grid.landSpace[right+1])
					continue;
				if(!this.land_Grid.landSpace[right+1][i])
					continue;
				this.land_Grid.landSpace[right+1][i].landPrice+=price_density*this.increment_constant*quotients_factor*0.5;
				
				if(this.land_Grid.landSpace[right+1][i].isRoad){
					n.adjacent_to_road=1;
					continue;
				}
				if(!this.land_Grid.landSpace[right+1][i].building_identity)
					continue;
					
				target_quotient=this.land_Grid.landSpace[right+1][i].building_identity.building_quotient;
				for(var j=0;j<2;j++){
					if(n.building_quotient_by_influence[j]<(target_quotient[j]*0.5))
						n.building_quotient_by_influence[j]=target_quotient[j]*0.5;
				}
			}
			for(var i=top-1;i<bottom+2;i++){
				if(!this.land_Grid.landSpace[right+2])
					continue;
				if(!this.land_Grid.landSpace[right+2][i])
					continue;
				this.land_Grid.landSpace[right+2][i].landPrice+=price_density*this.increment_constant*quotients_factor*0.25;
				
				if(this.land_Grid.landSpace[right+2][i].isRoad){
					n.adjacent_to_road=1;
					continue;
				}
				if(!this.land_Grid.landSpace[right+2][i].building_identity)
					continue;
					
				target_quotient=this.land_Grid.landSpace[right+2][i].building_identity.building_quotient;
				for(var j=0;j<2;j++){
					if(n.building_quotient_by_influence[j]<(target_quotient[j]*0.5))
						n.building_quotient_by_influence[j]=target_quotient[j]*0.5;
				}
			}
			
		}
	},
	road_traversal: function(arg_x, arg_y){
		if(!this.land_Grid.landSpace[arg_x])
			return;
		if(!this.land_Grid.landSpace[arg_x][arg_y])
			return;
		if(this.land_Grid.landSpace[arg_x][arg_y].isRoad==false){
			this.update_single(false,arg_x,arg_y);
			return;
		}
		
		if(arg_y>0){
			if(this.land_Grid.landSpace[arg_x][arg_y].road_up=="f"){
				if(this.land_Grid.landSpace[arg_x][arg_y-1].isRoad){
					this.land_Grid.landSpace[arg_x][arg_y].road_up="t";
					this.land_Grid.landSpace[arg_x][arg_y-1].road_down="t";
					this.road_traversal(arg_x,arg_y-1);
				}
			}
		}
		if(arg_x<59){
			if(this.land_Grid.landSpace[arg_x][arg_y].road_right=="f"){
				if(this.land_Grid.landSpace[arg_x+1][arg_y].isRoad){
					this.land_Grid.landSpace[arg_x][arg_y].road_right="t";
					this.land_Grid.landSpace[arg_x+1][arg_y].road_left="t";
					this.road_traversal(arg_x+1,arg_y);
				}
			}
		}
		if(arg_y<59){
			if(this.land_Grid.landSpace[arg_x][arg_y].road_down=="f"){
				if(this.land_Grid.landSpace[arg_x][arg_y+1].isRoad){
					this.land_Grid.landSpace[arg_x][arg_y].road_down="t";
					this.land_Grid.landSpace[arg_x][arg_y+1].road_up="t";
					this.road_traversal(arg_x,arg_y+1);
				}
			}
		}
		if(arg_x>0){
			if(this.land_Grid.landSpace[arg_x][arg_y].road_left=="f"){
				if(this.land_Grid.landSpace[arg_x-1][arg_y].isRoad){
					this.land_Grid.landSpace[arg_x][arg_y].road_left="t";
					this.land_Grid.landSpace[arg_x-1][arg_y].road_right="t";
					this.road_traversal(arg_x-1,arg_y);
				}
			}
		}
		
		this.land_Grid.landSpace[arg_x][arg_y].type="road_"+this.land_Grid.landSpace[arg_x][arg_y].road_up+"_"+this.land_Grid.landSpace[arg_x][arg_y].road_right+"_"+this.land_Grid.landSpace[arg_x][arg_y].road_down+"_"+this.land_Grid.landSpace[arg_x][arg_y].road_left;
		this.update_single(false,arg_x,arg_y);
	}
});

enyo.kind({
	name:"App",
	kind:"FittableColumns",
	Balance:1000000,
	components:[
		{kind: "Panels", name: "GameSpace_panels", arrangerKind: "CardSlideInArranger", index:0,draggable:true,style:"width: 68.75%;", components:[
				{kind:"Scroller", strategyKind:"TouchScrollStrategy",style:"background:grey;",components:[
						{name:"GameSpace0",style:"zoom: 100%",kind:"GameSpace",onleave:"leave_GameSpace",onenter:"onenter_GameSpace"}
					]
				}
			]
		},
		{name:"ManagePanel",kind:"ManagePanel",style:"width: 31.25%;"}
	],
	create:function(){
		this.inherited(arguments);
		this.$.GameSpace0.master=this;
		this.$.ManagePanel.master=this;
		this.update_balance();
		this.unit_time();
	},
	update_balance:function(){
		this.$.ManagePanel.$.balance_view.setContent("$"+this.Balance);
	},
	update_stats:function(arg){
		if(arg.building_identity){
			var cont="";
			cont=cont.concat(arg.landPrice+" ");
			cont=cont.concat("["+arg.building_identity.building_quotient[0]+","+arg.building_identity.building_quotient[1]+","+arg.building_identity.building_quotient[2]+"]");
			cont=cont.concat("["+arg.building_identity.building_quotient_by_influence[0]+","+arg.building_identity.building_quotient_by_influence[1]+","+arg.building_identity.building_quotient_by_influence[2]+"]");
			cont=cont.concat(" "+arg.building_identity.adjacent_to_road);
			this.$.ManagePanel.$.stats_view.setContent(cont);
			return;
		}
		this.$.ManagePanel.$.stats_view.setContent(arg.landPrice);
	},
	changeZoom:function(){
		enyo.log("change zoom");
		this.$.GameSpace0.style.zoom="100%";
	},
	leave_GameSpace:function(inSender,inEvent){
		this.$.GameSpace0.cached_execute_mode=this.$.GameSpace0.execute_mode;
		this.$.GameSpace0.cached_drawMode=this.$.GameSpace0.drawMode;
		this.$.GameSpace0.execute_mode=0;
		this.$.GameSpace0.drawMode=0;
		for(var i=0, b;i<this.$.GameSpace0.absolute_execute_list.length;i++){
			b=this.$.GameSpace0.absolute_execute_list[i];
			if(this.$.GameSpace0.GameSpaceArray[b[0]]==null)
				continue;
			if(this.$.GameSpace0.GameSpaceArray[b[0]][b[1]]==null)
				continue;
				
			this.$.GameSpace0.update_single(false,b[0],b[1]);
		}
	},
	onenter_GameSpace:function(inSender, inEvent){
		this.$.GameSpace0.execute_mode=this.$.GameSpace0.cached_execute_mode;
		this.$.GameSpace0.drawMode=this.$.GameSpace0.cached_drawMode;
	},
	unit_time: function(){
		this.$.GameSpace0.time_flies();
		enyo.job(this.jobName, enyo.bind(this, "unit_time"), 5000);
	},
});	
