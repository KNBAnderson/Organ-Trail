
import $ from 'jquery';
import './css/styles.css';
import { launchShop } from './ui';
import { Party } from './party';

$(document).ready(function(){
  // $('#jsOutput').text("greetings");
  let party = new Party();
  launchShop(party);
});