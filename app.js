$(document).ready(function(){
  console.log('Ready to go!');
  main();
});

function main(){
  ///////////// OPEN PERSON CREATION //////////////////////////////////
  ////////// create Person() constructor ////////////////////////////
  function Person(name, strengths){
    this.name = name;
    this.strengths = strengths;
  }
  /////////////  Create instances of Person() ////////////////////////
  var fred = new Person('Fred', ['Strategic', 'Learner', 'Individualization', 'Input', 'Achiever']);
  var renee = new Person('Renee', ['Strategic', 'Learner', 'Futuristic', 'Arranger', 'Achiever']);
  var james = new Person('James', ['Empathy', 'Individualization', 'Intellection', 'Relator', 'Restorative']);
  var christiana = new Person('Christiana', ['Learner', 'Achiever', 'Analytical', 'Strategic', 'Input']);
  var elizabeth = new Person('Elizabeth', ['Restorative', 'Learner', 'Individualization', 'Adaptability', 'Input']);
  var jacob = new Person('Jacob', ['Input', 'Harmony', 'Learner', 'Analytical', 'Intellection']);
  var louis = new Person('Louis', ['Harmony', 'Empathy', 'Relator', 'Achiever', 'Responsibility']);
  var christopher = new Person('Christopher', ['Restorative', 'Focus', 'Arranger', 'Harmony', 'Discipline']);
  var alex = new Person('Alex', ['Input', 'Context', 'Restorative', 'Communication', 'Analytical']);
  var carter = new Person('Carter', ['Empathy', 'Futuristic', 'Relator', 'Intellection', 'Ideation']);
  var dan = new Person('Dan', ['Deliberative', 'Strategic', 'Maximizer', 'Competition', 'Analytical']);
  var logan = new Person('Logan', ['Achiever',	'Restorative',	'Belief',	'Responsibility',	'Includer']);
  var ryan = new Person('Ryan', ['Analytical',	'Deliberative',	'Relator',	'Ideation',	'Responsibility']);
  var sam = new Person('Sam', ['Learner',	'Individualization',	'Empathy',	'Harmony',	'Intellection']);
  var selena = new Person('Selena', ['Input',	'Positivity',	'Empathy',	'Connectedness',	'Intellection']);
  var tenzin = new Person('Tenzin', ['Analytical',	'Consistency',	'Harmony',	'Restorative',	'Includer']);
  var nicholas = new Person('Nicholas', ['Restorative',	'Focus',	'Arranger',	'Harmony',	'Discipline']);
  var mary = new Person('Mary', ['Intellection',	'Learner',	'Restorative',	'Empathy',	'Responsibility']);
  var dev = new Person('Dev', ['Relator',	'Strategic',	'Learner',	'Communication',	'Analytical']);
  var ally = new Person('Ally', ['Learner',	'Intellection',	'Adaptability',	'Input',	'Futuristic']);
  var michael = new Person('Michael', ['Input',	'Ideation',	'Achiever',	'Strategic',	'Intellection']);
  ///////////////// Store Person() instances in cohort array ////////////////////
  var cohort = [fred, renee, james, christiana, elizabeth, louis, jacob, michael, christopher, alex, carter, dan, logan, ryan, sam, selena, tenzin, nicholas, mary, dev, ally];

  /////////////// CLOSE PERSON CREATION ////////////////////////////////
  ////////////// OPEN TABLE CONSTRUCTION ///////////////////
  buildTable();
  function buildTable(){
    var rows = cohort.length; // store the length of the cohort array in the variable rows – now you can use a loop that runs the number of times equal to the value of rows
    var cols = cohort[0].strengths.length; // store the length of the strengths array from the first object in the cohort array in cols – now you can use cols to define how many times a loop nested in the rows loop will run
    for(var r = 0; r < rows; r++){ // create for loop that will create table-rows
      var tr = $('<tr>'); // create new <tr> for each iteraction
      $('.table').append(tr); // append the new <tr> to the <table>
      $('.table tr')[r].prepend($('<td>').html(cohort[r].name.toUpperCase()).addClass('name')[0]); // for the current <tr> inside the .table div, prepend a <td> that will have the class .name and hold the value of the name key of cohort[r] capitalized.
      for(c = 0; c < cols; c++){ // for each iteration of r (aka. for each new row created), iterate c until c = the value of the variable cols
        var td = $('<td>').addClass(`${cohort[r].name.toLowerCase()} strength `); // for each iteration of c, create a new <td> with a class equal to the value of the name key for cohort[r] and a class .strength
        $('.table tr')[r].append(td.text(cohort[r].strengths[c].toLowerCase())[0]); // for each iteration of c, set the innerTEXT of the newly created <td> to the value of strengths[c] for cohort[r] and append it to the current <tr> inside the .table div
      } // end [c] for loop
    } // end [r] for loop
    ////////  CLOSE TABLE CONSTRUCTION //////////////////////

    //////////  OPEN TABLE INTERACTIVITY ///////////////////

    $('.table').on('click', hilight); // click a table cell and highlight all other matches in the table

    function hilight(e){
      var strength = $(e.target).text().toLowerCase(); // store the lower case innerTEXT of the event-object's target in the STRENGTH variable
      var re = new RegExp(strength, 'g'); // store an instance of the RegExp object that searches for a pattern that matches the value of STRENGTH
      var contentPool = $('.strength');
      for(i = 0; i < contentPool.length; i++){
        if(re.test($(contentPool[i]).text())){
          $(contentPool[i]).addClass('hilite');
        } else if(!re.test($(contentPool[i]).text()) && $(contentPool[i]).hasClass('hilite')){
          $(contentPool[i]).removeClass('hilite');
        } // end else/if statement
      } // end [i] for loop
      /*if(e.target.matches('.strength')){
        json(strength);
      } else if (!e.target.matches('.strength')){
        json();
      }*/
    }
  } // END buildTable()

/////////// CLOSE TABLE INTERACTIVITY ///////////////////

/////////// OPEN DATA DISPLAY ///////////////////////////
/*
  const json = (whichStrength) => {
    if(!whichStrength){
      $('#blurb').text(' ');
    } else {
      $.getJSON('./package.json', function(data){
        $('#blurb').html(`<strong>${whichStrength}: </strong>`.toUpperCase() +  data.strengths[whichStrength]);
        console.log($('.description').text());
      });
    }
  };
*/

} // end main()


// NPM COMMAND TO INSTALL LIVE HTTP SERVER:.... npm install -g http-server
// NAVIGATE TO THE DIRECTORY HOLDING THIS PROJECT AND >>>>>>>>>>>>>>>>>>>>
// NPM COMMAND TO RUN LIVE HTTP SERVER:........ http-server -c-1






























//
