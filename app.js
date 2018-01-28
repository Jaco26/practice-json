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
  //var jacob = new Person('Jacob', ['Input', 'Harmony', 'Learner', 'Analytical', 'Intellection']);
  var louis = new Person('Louis', ['Harmony', 'Empathy', 'Relator', 'Achiever', 'Responsibility']);
///////////////// Store Person() instances in cohort array ////////////////////
  var cohort = [fred, renee, james, christiana, elizabeth, jacob, louis];
/////////////// CLOSE PERSON CREATION ////////////////////////////////
////////////// OPEN TABLE CONSTRUCTION ///////////////////
  buildTable();
  function buildTable(){
    var table = $('table').addClass('table');
    var rows = cohort.length;
    var cols = cohort[0].strengths.length;
    // loop through the cohort array filled with Person objects
    for(var r = 0; r < rows; r++){
      var tr = $('<tr>');
      table.append(tr);
      table.children()[r].prepend($('<td>').html(cohort[r].name.toUpperCase()).css({'background':'lightblue'})[0]);
      // loop through the strengths arrays of each person --- once per row
      for(c = 0; c < cols; c++){
        var td = $('<td>').addClass(`${cohort[r].name.toLowerCase()} strength `);
        table.children()[r].append(td.html(cohort[r].strengths[c].toLowerCase())[0]);
      }
    }
////////  CLOSE TABLE CONSTRUCTION //////////////////////
//////////  OPEN TABLE INTERACTIVITY ///////////////////
    // click a table cell and highlight all other matches in the table
    table.on('click', function(e){
      var strength = $(e.target).text().toLowerCase();
      var re = new RegExp($(e.target).html(), 'g');
      var contentPool = $('.strength');
      for(i = 0; i < contentPool.length; i++){
        if(re.test($(contentPool[i]).text())){
          $(contentPool[i]).addClass('hilite');
        } else if(!re.test($(contentPool[i]).text()) && $(contentPool[i]).hasClass('hilite')){
          $(contentPool[i]).removeClass('hilite');
        }
      }
      if(e.target.matches('.strength')){
        json(strength);
      } else if (!e.target.matches('.strength')){
        json();
      }
    });
  }
/////////// CLOSE TABLE INTERACTIVITY ///////////////////
/////////// OPEN DATA DISPLAY ///////////////////////////
  const json = (whichOne) => {
    if(!whichOne){
      $('.description').text(' ');
    } else {
      $.getJSON('./package.json', function(data){
        $('.description').html(`<strong>${whichOne}: </strong>`.toUpperCase() +  data.strengths[whichOne]);
        console.log($('.description').text());
      });
    }
  };

} // end main()


// NPM COMMAND TO INSTALL LIVE HTTP SERVER:.... npm install -g http-server
// NAVIGATE TO THE DIRECTORY HOLDING THIS PROJECT AND >>>>>>>>>>>>>>>>>>>>
// NPM COMMAND TO RUN LIVE HTTP SERVER:........ http-server -c-1






























//
