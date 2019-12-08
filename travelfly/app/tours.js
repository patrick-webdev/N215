let data = $.getJSON("data/tours.json", function(data){});

function tours_create_cards(){
  let tourData = data['responseJSON'];
  let container = document.getElementById("tour");

  $.each(tourData, function(idx, tour){
    tour = tour[0];

    let content = '';
    content += '<div class="location-price tour-' + tour['class'] + '">';
    content += '<div class="location-price-container">';
    content += '<div class="location">' + tour['country'] + '</div>';
    content += '<div class="price">from $' + tour['price'] + '</div>';
    content += '</div>';
    content += '<button class="tour-button" onclick="display_tour(\'' + tour['class'] + '\')">learn more</button>';
    content += '</div>';

    container.innerHTML += content;
  });
}

function display_tour(tour){
  document.getElementById("tours-container").style.display = "none";

  let tours = data['responseJSON'];
  let tourData = tours[tour][0];
  let container = document.getElementById("tours-specific-container");
  container.innerHTML = '';

  let content = '';
  content += '<div class="header-' + tourData['class'] + ' header">';
  content += '<p class="header-title"><span class="country-name">' + tourData['country'] + '</span> tour package:</p>';
  content += '<p class="header-price">starting from $' + tourData['price'] + ' (prices may vary)</p>';
  content += '</div>';

  content += '<div class="preview-container">';
  content += '<img src="images/tour/tour-' + tourData['class'] + '/' + tourData['img1'] + '">';
  content += '<img src="images/tour/tour-' + tourData['class'] + '/' + tourData['img2'] + '">';
  content += '<img src="images/tour/tour-' + tourData['class'] + '/' + tourData['img3'] + '">';
  content += '</div>';

  content += '<div class="day1 day_outline">';
  content += '<p class="day-title"><span class="underline">Day #</span>1:</p>';
  content += '<p class="day-content">' + tourData["day1"] + '</p>';
  content += '</div>';

  content += '<div class="day2 day_outline">';
  content += '<p class="day-title"><span class="underline">Day #</span>2:</p>';
  content += '<p class="day-content">' + tourData["day2"] + '</p>';
  content += '</div>';

  content += '<div class="day3 day_outline">';
  content += '<p class="day-title"><span class="underline">Day #</span>3:</p>';
  content += '<p class="day-content">' + tourData["day3"] + '</p>';
  content += '</div>';

  content += '<button class="book-now-button">book now</button>';

  container.innerHTML = content;

}

$(document).ready(function(){
  tours_create_cards();
});
