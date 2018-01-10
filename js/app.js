const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
const $pdfCheckbox = $("<label><input type='checkbox'> Allow PDF downloads</label>")

$('#links').append($pdfCheckbox);

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event) {
    // check if checkbox is checked
    // if zero checkboxes is checked
      // prevent download of document
      // alert the user
    if ($(':checked').length === 0) {
      event.preventDefault();
      alert('please check the box to allow pdf-downloads.');
    }
  });

$('a').each(function(index, link) {
  const $url = $(link).attr('href');
  $(link).parent().append(`(${$url})`);
})

// OR USE 'THIS' METHOD

// $('a').each(function() {
//   const $url = $(this).attr('href');
//   $(this).parent().append(`(${$url})`);
// })
