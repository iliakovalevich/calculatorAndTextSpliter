let input = document.getElementById('input');

function splitText() {
   let winPrint = window.open('', '', 'left=0,top=0,width=800,height=600,toolbar=0,scrollbars=0,status=0');
   winPrint.document.write(input.value.split(/\s+|!|\?/));
   winPrint.document.close();
   winPrint.focus();
}