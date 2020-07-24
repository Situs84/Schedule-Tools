var items;
var name;
var c1;
var c2;
var c3;
var c4;
var c5;
var c6;

//var entryForm;
$(document).ready(function() {
    name = {
        cid: "cname",
        content: "My Schedule"
    };
    c1 = {
        cid: "c1",
        content: "Class 1"
    };
    c2 = {
        cid: "c2",
        content: "Class 2"
    };
    c3 = {
        cid: "c3",
        content: "Class 3"
    };
    c4 = {
        cid: "c4",
        content: "Class 4"
    };
    c5 = {
        cid: "c5",
        content: "Class 5"
    };
    c6 = {
        cid: "c6",
        content: "Class 6"
    };
    items = [name, c1, c2, c3, c4, c5, c6];
    //entryForm = document.getElementById("entryForm");
});

function updateTable() {
    console.log(name);
    //document.getElementById(name.id).innerHTML = element.content;
    document.getElementById(c1.cid).innerHTML = c1.content;
    document.getElementById(c2.cid).innerHTML = c2.content;
    document.getElementById(c3.cid).innerHTML = c3.content;
    document.getElementById(c4.cid).innerHTML = c4.content;
    document.getElementById(c5.cid).innerHTML = c5.content;
    document.getElementById(c6.cid).innerHTML = c6.content;
    console.log("Update Complete");
}
entryForm.onsubmit = async(e) => {
    e.preventDefault();
    name.content = simpleId("nameInput").value;
    c1.content = simpleId("cs1").value;
    c2.content = simpleId("cs2").value;
    c3.content = simpleId("cs3").value;
    c4.content = simpleId("cs4").value;
    c5.content = simpleId("cs5").value;
    c6.content = simpleId("cs6").value;
    console.log(name);
}

function simpleId(v) {
    return document.getElementById(v);
}