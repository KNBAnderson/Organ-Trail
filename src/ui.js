import './party';
import $ from 'jquery';

export function launchShop(party){
  $('#shop-head').append(
    '<p>Day: ' + party.day +'</p>',
    '<p>' + ' ' + 'Party Members: ' + party.donors[0].name + ' ' + party.donors[1].name + ' ' + party.donors[2].name + ' ' + party.donors[3].name + ' </p>'
    
  );
  $('#shop-form').append(
    '<div><input type="checkbox" name="chestUpgrade" value="20">Upgrade your ice chest by 5 slots (20 max)</div>',
    '<div><input type="checkbox" name="ice" value="10">Buy ice (each block of ice lasts 3 days)</div>',
    '<div><input type="checkbox" name="dialysis" value="40">Dialysis Machine (allows you to harvest both kidneys from one body)</div>',
    '<div><input type="checkbox" name="FirstAid" value="10">First Aid Kit (lasts 5 days.  each day your party is without a first aid kit, every party member\'s health drops by 5.)</div>',
    '<div><input type="checkbox" name="buyBoargan" value="20">Boargans pull your cart. (each boargan increases your speed by 25)</div>'

  );
}