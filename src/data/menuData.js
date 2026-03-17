export const menuItems = [
  { id:'1', name:'NEBULA-SMOKED BRISKET',  category:'mains',    categoryLabel:'Signature Main', price:1380, rating:4.9, isVeg:false, badge:{text:"COMMANDER'S PICK",type:'special'}, icon:'🥩', bg:'radial-gradient(ellipse at center,#1a0400 0%,#080000 100%)', description:'18-hour slow-smoked black angus brisket, glazed in a meteor-charred reduction, served with void-roasted bone marrow and cosmic slaw.' },
  { id:'2', name:'DARK MATTER RAMEN',       category:'void',     categoryLabel:'Void Bowls',     price:680,  rating:4.8, isVeg:true,  badge:{text:'HOT',type:'hot'},                  icon:'🍜', bg:'radial-gradient(ellipse at center,#100a00 0%,#050000 100%)', description:'Squid-ink broth, charcoal noodles, black garlic oil, crimson chili clusters and floating truffle spheres.' },
  { id:'3', name:'RED PLANET PIZZA',        category:'mains',    categoryLabel:'Mains',          price:560,  rating:4.6, isVeg:true,  badge:{text:'NEW',type:'new'},                  icon:'🍕', bg:'radial-gradient(ellipse at center,#0e0300 0%,#060000 100%)', description:'Charcoal-crust base, volcanic tomato sauce, smoked mozzarella, roasted capsicum and alien herb oil.' },
  { id:'4', name:'WARP-CORE TACOS',         category:'starters', categoryLabel:'Starters',       price:420,  rating:4.7, isVeg:false, badge:{text:'SPICY',type:'hot'},                icon:'🌮', bg:'radial-gradient(ellipse at center,#120200 0%,#060000 100%)', description:'Crispy corn shells packed with spiced pulled jackfruit, plasma-hot salsa, pickled onions and cryo-lime crema.' },
  { id:'5', name:'SECTOR-7 SMASHBURGER',    category:'mains',    categoryLabel:'Mains',          price:490,  rating:4.8, isVeg:false, badge:null,                                     icon:'🍔', bg:'radial-gradient(ellipse at center,#0d0100 0%,#050000 100%)', description:'Double smash patty, aged cheddar, caramelised onion jam, shredded lettuce and classified sector sauce.' },
  { id:'6', name:'VOID SASHIMI PLATTER',    category:'starters', categoryLabel:'Starters',       price:890,  rating:4.9, isVeg:false, badge:{text:'RARE',type:'special'},             icon:'🍣', bg:'radial-gradient(ellipse at center,#110200 0%,#060000 100%)', description:'Premium bluefin tuna and salmon, soy-cured, served on a volcanic rock slab with interstellar ponzu.' },
  { id:'7', name:'CRYOGENIC LAVA CAKE',     category:'desserts', categoryLabel:'Desserts',       price:380,  rating:4.9, isVeg:true,  badge:{text:'NEW',type:'new'},                  icon:'🍨', bg:'radial-gradient(ellipse at center,#0f0200 0%,#050000 100%)', description:'Molten dark chocolate core, liquid nitrogen mist on arrival, blood-orange sorbet and red shimmer dust.' },
  { id:'8', name:'PLASMA COLD BREW',        category:'drinks',   categoryLabel:'Transmissions',  price:260,  rating:4.7, isVeg:true,  badge:null,                                     icon:'🥤', bg:'radial-gradient(ellipse at center,#130300 0%,#060000 100%)', description:'48-hour steeped cold brew concentrate, activated charcoal foam, maple smoke infusion. Signal boost guaranteed.' },
]

export const categories = [
  { id:'all',      label:'[ALL]' },
  { id:'mains',    label:'[MAINS]' },
  { id:'starters', label:'[STARTERS]' },
  { id:'void',     label:'[VOID BOWLS]' },
  { id:'desserts', label:'[DESSERTS]' },
  { id:'drinks',   label:'[TRANSMISSIONS]' },
]

export const COUPONS = {
  ALIEN20:  { type:'percent', value:20,  label:'20% off applied!' },
  SECTOR50: { type:'flat',    value:50,  label:'₹50 off applied!' },
  FIRST100: { type:'flat',    value:100, label:'₹100 off on first order!' },
}

export const DELIVERY_FEE       = 40
export const FREE_DELIVERY_MIN  = 499
export const TAX_RATE           = 0.05
