
// ----------------- Ajax -------------------------

$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=gb',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    let employeesHTML = '';
    employees = data.results;

    $.each(employees, function (index, user){
      employeesHTML += `<div class="grid-item">
                          <img class="img" src="${user.picture.large}" alt="">
                          <div class="information">
                            <h2 class="name">${user.name.first} ${user.name.last}</h2>
                            <p class="info">${user.email}</p>
                            <p class="info">${user.location.state}</p>
                          </div>
                        </div>`;
    }); // Employees loop ends

// ----------------- adds the profiles to the grid -------------------------

    $('#gallery').html(employeesHTML);



// ----------------- Creates Modal -------------------------

    function modal (target, index){
      const modalHTML = `<div class="modal">
                          <svg id="close" width="28px" height="27px" viewBox="0 0 28 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                              <title>Close</title>
                              <desc>Created with Sketch.</desc>
                              <defs></defs>
                              <g id="Master" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g id="Lucid-line-icons" transform="translate(-1128.000000, -1465.000000)" fill="#FFFFFF">
                                      <g id="Generic" transform="translate(254.000000, 624.000000)">
                                          <g transform="translate(2.000000, 140.000000)" id="Close">
                                              <path d="M889.300852,714.703697 L898.498049,723.90472 C899.393284,724.796129 899.393284,726.249929 898.498049,727.145163 C898.050432,727.592781 897.46126,727.818502 896.872089,727.818502 C896.290569,727.818502 895.701397,727.592781 895.249954,727.145163 L886.052757,717.947966 L876.85556,727.145163 C876.407943,727.592781 875.814945,727.818502 875.233425,727.818502 C874.644254,727.818502 874.055082,727.592781 873.607465,727.145163 C872.71223,726.249929 872.71223,724.796129 873.607465,723.90472 L882.804662,714.703697 L873.607465,705.5065 C872.71223,704.615091 872.71223,703.161291 873.607465,702.262231 C874.506526,701.366996 875.9565,701.366996 876.85556,702.262231 L886.052757,711.459428 L895.249954,702.262231 C896.15284,701.366996 897.60664,701.370822 898.498049,702.262231 C899.393284,703.161291 899.393284,704.615091 898.498049,705.5065 L889.300852,714.703697 Z"></path>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </svg>
                          <svg id="next" width="77px" height="53px" viewBox="0 0 77 53" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                              <title>Arrow right</title>
                              <desc>Created with Sketch.</desc>
                              <defs></defs>
                              <g id="Master" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g id="Lucid-line-icons" transform="translate(-430.000000, -7699.000000)" fill="#FFFFFF">
                                      <g id="Arrows" transform="translate(254.000000, 7547.000000)">
                                          <g transform="translate(1.000000, 140.000000)" id="Arrow-right">
                                              <path d="M250.809642,36.5170406 L227.187685,12.8950835 C226.267399,11.9747971 224.770501,11.9747971 223.846396,12.8950835 C222.92611,13.8191885 222.92611,15.3160859 223.846396,16.2363723 L243.458807,35.8449642 L177.49222,35.8449642 C176.186253,35.8449642 175.128496,36.9027208 175.128496,38.2086874 C175.128496,39.5146539 176.186253,40.5724105 177.49222,40.5724105 L243.412983,40.5724105 L223.846396,60.1389976 C222.92611,61.059284 222.92611,62.5561814 223.846396,63.4802864 C224.312267,63.9385203 224.915609,64.1714558 225.51895,64.1714558 C226.122291,64.1714558 226.729451,63.9385203 227.187685,63.4802864 L250.809642,39.8583294 C251.733747,38.9342243 251.733747,37.4411456 250.809642,36.5170406"></path>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </svg>
                          <svg id="prev" width="77px" height="53px" viewBox="0 0 77 53" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                              <title>Arrow right</title>
                              <desc>Created with Sketch.</desc>
                              <defs></defs>
                              <g id="Master" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g id="Lucid-line-icons" transform="translate(-430.000000, -7699.000000)" fill="#FFFFFF">
                                      <g id="Arrows" transform="translate(254.000000, 7547.000000)">
                                          <g transform="translate(1.000000, 140.000000)" id="Arrow-right">
                                              <path d="M250.809642,36.5170406 L227.187685,12.8950835 C226.267399,11.9747971 224.770501,11.9747971 223.846396,12.8950835 C222.92611,13.8191885 222.92611,15.3160859 223.846396,16.2363723 L243.458807,35.8449642 L177.49222,35.8449642 C176.186253,35.8449642 175.128496,36.9027208 175.128496,38.2086874 C175.128496,39.5146539 176.186253,40.5724105 177.49222,40.5724105 L243.412983,40.5724105 L223.846396,60.1389976 C222.92611,61.059284 222.92611,62.5561814 223.846396,63.4802864 C224.312267,63.9385203 224.915609,64.1714558 225.51895,64.1714558 C226.122291,64.1714558 226.729451,63.9385203 227.187685,63.4802864 L250.809642,39.8583294 C251.733747,38.9342243 251.733747,37.4411456 250.809642,36.5170406"></path>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </svg>
                          <img class="img" src="${target.picture.large}" alt="">
                          <h2 class="name">${target.name.first} ${target.name.last}</h2>
                          <p class="info">${target.email}</p>
                          <p class="info">${target.location.state}</p>
                          <hr/>
                          <p class="info">${target.phone}</p>
                          <p class="info">${target.location.street}, ${target.nat} ${target.location.postcode}</p>
                          <p class="info">Birthday: ${target.dob}</p>
                        </div>`;

// ----------------- adds modal to html -------------------------

      $('#modal').html(modalHTML);

// ----------------- Closes modal and overlay  -------------------------

      $('#close').click(function(){
        $('#modal, #overlay').hide();
      }); // on click close button function ends

// ----------------- Goes to the next or prev profile -------------------------

      $('#next').click(function(){
        modal(employees[index + 1 ], index + 1);
      }); // on click next button function ends

      $('#prev').click(function(){
        modal(employees[index - 1 ], index - 1);
      }); // on click prev button function ends

    }; // Employees loop ends

// ----------------- Show modal -------------------------

    const showModal = $('#gallery .grid-item');
    for ( let i = 0; i < showModal.length; i++) {
      showModal[i].onclick = function () {
        $('#modal, #overlay').show();
        modal(employees[i], i);
      } // on click show modal function ends
    } // loop to show modal ends

    // ----------------- search -------------------------
            let profiles = $('#gallery .grid-item h2');
            $("#search").keyup(function() {
              const $input = $(this).val().toLowerCase();
              $.each(profiles, function(index, user) {
                if (user.innerHTML.toLowerCase().includes($input)) {
                  $(this).closest('.grid-item').show();
                } else {
                  $(this).closest('.grid-item').hide();
                }
              }); // loop ends
            }); // Search function ends

  } // Success function ends
}); // Ajax ends
