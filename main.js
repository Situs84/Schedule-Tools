var items;
var daName;
var c1;
var c2;
var c3;
var c4;
var c5;
var c6;

//var entryForm;
$(document).ready(function() {
    daName = { in: "nameIn",
        out: "nameOut",
        content: ""
    };
    c1 = { in: "in1",
        out: "out1",
        content: "Class 1"
    };
    c2 = { in: "in2",
        out: "out2",
        content: "Class 2"
    };
    c3 = { in: "in3",
        out: "out3",
        content: "Class 3"
    };
    c4 = { in: "in4",
        out: "out4",
        content: "Class 4"
    };
    c5 = { in: "in5",
        out: "out5",
        content: "Class 5"
    };
    c6 = { in: "in6",
        out: "out6",
        content: "Class 6"
    };
    items = [daName, c1, c2, c3, c4, c5, c6];
    updateTable();
    //entryForm = document.getElementById("entryForm");
});

entryForm.onsubmit = async(e) => {
    e.preventDefault();
    daName.content = simpleGet(daName.in);
    c1.content = simpleGet(c1.in);
    c2.content = simpleGet(c2.in);
    c3.content = simpleGet(c3.in);
    c4.content = simpleGet(c4.in);
    c5.content = simpleGet(c5.in);
    c6.content = simpleGet(c6.in);
    updateTable();
}

function updateTable() {
    groupAssign(daName.out, daName.content == "" ? "My Schedule" : daName.content + "'s Schedule");
    groupAssign(c1.out, c1.content);
    groupAssign(c2.out, c2.content);
    groupAssign(c3.out, c3.content);
    groupAssign(c4.out, c4.content);
    groupAssign(c5.out, c5.content);
    groupAssign(c6.out, c6.content);
}

function simpleGet(id) {
    return document.getElementById(id).value;
}

function groupAssign(id, val) {
    var x = document.getElementsByClassName(id);
    for (var i = 0; i < x.length; i++) {
        x[i].innerHTML = val;
    }
}

async function genCanvas() {
    var outContainer = document.getElementById("outCanv");
    var inContainer = document.getElementsByClassName("inCanv")[0];
    inContainer.style.display = "block";
    var canvas = await html2canvas(inContainer, {
        backgroundColor: "#2a2a2a",
        allowTaint: true,
        foreignObjectRendering: true
    }).then(canvas => {
        inContainer.style.display = "none";
        var uri = canvas.toDataURL();
        var myWindow = window.open();
        myWindow.document.write('<img src="' + uri + '"/>');
    });
    //tabGen(canvas, inContainer);
}

function tabGen(canvas, inContainer) {
    //window.open(canvas.toDataURL);
    //newTab.document.body.innerHTML = '<img crossorigin="anonymous" src="' + canvas.toDataURL() + '" width="1500px" height="1500px">';
    //console.log(canvas.toDataURL());
    //newTab.document.body.append(canvas);
}