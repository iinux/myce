//$("#btn-readmore").click();
var dom = document.getElementById("btn-readmore");
if (dom) {
    dom.click();
} else {
    document.getElementsByClassName("btn-readmore")[0].click();
}
