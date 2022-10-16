const tablinks=document.getElementsByClassName("tab-links");
const tablcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tablcontent of tablcontents){
        tablcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
//  function when you are in mobile screen
let sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
// Script for google spreedsheet
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx-k9qpbCzeaBstbiSxKuQatx8W4S9dd8U_l7cVpeLIFl-uRDQf_TfICvA2XEKaJOs/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Successfully Sent";
        setTimeout(() => {
            msg.innerHTML="";
        },4000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
