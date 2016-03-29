var birthday = new Date(1990, 11, 20);
var age;
$(function () {
    setAge();
    drawCircle();
    $(".workUl li:even").css("background", "#f3f2f3");
    $("#nav li").click(function () {
        var index = $(this).data("index");
        $("#nav li").removeClass();
        $(this).addClass("nav_li_active");

        switch (index) {
            case 0:
                {
                    $.scrollTo("#head", 500);
                }
                break;
            case 1:
                {
                    $.scrollTo("#aboutMe", 500);

                }

                break;
            case 2:
                {

                    $.scrollTo("#skill", 500);
                }
                break;
            case 3:
                {

                    $.scrollTo("#workExperience", 500);
                }
                break;
            case 4:
                {

                    $.scrollTo("#projectExperience", 500);
                }
                break;
            case 5:
                {

                    $.scrollTo("#education", 500);
                }
                break;
            case 7:
                {

                    $.scrollTo("#contactUs", 500);
                }
                break;
        }
    });
});

//设置年龄
function setAge() {
    var nowDate = new Date();
    var realDate = new Date(nowDate.getFullYear(), 11, 20);
    if ((realDate - nowDate) > 0) {
        age = nowDate.getFullYear() - birthday.getFullYear();
    } else {
        age = nowDate.getFullYear() - birthday.getFullYear() + 1;
    }
    $("#age").text(age);
}

//绘制图形
var c1, t1, t1_1, c2, t2, t2_1, c3, t3, t3_1, c4, t4, t4_1, c5, t5, t5_1, c6, t6, t6_1;
function drawCircle() {
    var paper1 = Raphael(document.getElementById("box1"), 118, 118);
    c1 = paper1.circle(60, 59, 54);
    t1 = paper1.text(60, 55, "C#");
    t1_1 = paper1.text(60, 75, "熟练");
    c1.attr({
        "stroke": "#373737",
        "stroke-width": 6,
        "fill": "#68217a"
    });
    t1.attr({
        "font-size": 21,
        "font-weight": "bold",
        "fill": "#fff"
    });

    t1_1.attr({
        "font-size": 13,
        "fill": "#ddd"
    });


    var paper2 = Raphael(document.getElementById("box2"), 118, 118);
    c2 = paper2.circle(60, 59, 54);
    t2 = paper2.text(60, 55, "MVC");
    t2_1 = paper2.text(60, 75, "熟练");
    c2.attr({
        "stroke": "#373737",
        "stroke-width": 6,
        "fill": "#0054a3"
    });
    t2.attr({
        "font-size": 21,
        "font-weight": "bold",
        "fill": "#fff"
    });
    t2_1.attr({
        "font-size": 13,
        "fill": "#ddd"
    });
    paper2.add(c2, t2, t2_1);


    var paper3 = Raphael(document.getElementById("box3"), 118, 118);
    c3 = paper3.circle(60, 59, 54);
    t3 = paper3.text(60, 55, "JS");
    t3_1 = paper3.text(60, 75, "熟练");
    c3.attr({
        "stroke": "#373737",
        "stroke-width": 6,
        "fill": "#2fbf69"
    });
    t3.attr({
        "font-size": 21,
        "font-weight": "bold",
        "fill": "#fff"
    });
    t3_1.attr({
        "font-size": 13,
        "fill": "#ddd"
    });
    paper3.add(c3, t3, t3_1);

    var paper4 = Raphael(document.getElementById("box4"), 118, 118);
    c4 = paper4.circle(60, 59, 54);
    t4 = paper4.text(60, 55, "Jquery");
    t4_1 = paper4.text(60, 75, "熟练");
    c4.attr({
        "stroke": "#373737",
        "stroke-width": 6,
        "fill": "#1f2f48"
    });
    t4.attr({
        "font-size": 21,
        "font-weight": "bold",
        "fill": "#fff"
    });
    t4_1.attr({
        "font-size": 13,
        "fill": "#ddd"
    });
    paper4.add(c4, t4, t4_1);

    var paper5 = Raphael(document.getElementById("box5"), 118, 118);
    c5 = paper5.circle(60, 59, 54);
    t5 = paper5.text(60, 55, "HTML");
    t5_1 = paper5.text(60, 75, "熟练");
    c5.attr({
        "stroke": "#373737",
        "stroke-width": 6,
        "fill": "#e34e26"
    });
    t5.attr({
        "font-size": 21,
        "font-weight": "bold",
        "fill": "#fff"
    });
    t5_1.attr({
        "font-size": 13,
        "fill": "#ddd"
    });
    paper5.add(c5, t5, t5_1);

    var paper6 = Raphael(document.getElementById("box6"), 118, 118);
    c6 = paper6.circle(60, 59, 54);
    t6 = paper6.text(60, 55, "SQL");
    t6_1 = paper6.text(60, 75, "熟练");
    c6.attr({
        "stroke": "#373737",
        "stroke-width": 6,
        "fill": "#ba141a"
    });
    t6.attr({
        "font-size": 21,
        "font-weight": "bold",
        "fill": "#fff"
    });
    t6_1.attr({
        "font-size": 13,
        "fill": "#ddd"
    });
    paper6.add(c6, t6, t6_1);

}

//动画
function AnimateCircle() {
    c1.animate({
        "stroke": "#373737",
        "fill": "#68217a"
    }, 1500);
    t1.animate({
        "fill": "#fff"
    }, 1500);
    t1_1.animate({
        "fill": "#ddd"
    }, 1500);
    c2.animate({
        "stroke": "#373737",
        "fill": "#0054a3"
    }, 1500);
    t2.animate({
        "fill": "#fff"
    }, 1500);
    t2_1.animate({
        "fill": "#ddd"
    }, 1500);
    c3.animate({
        "stroke": "#373737",
        "fill": "#2fbf69"
    }, 1500);
    t3.animate({
        "fill": "#fff"
    }, 1500);
    t3_1.animate({
        "fill": "#ddd"
    }, 1500);
    c4.animate({
        "stroke": "#373737",
        "fill": "#1f2f48"
    }, 1500);
    t4.animate({
        "fill": "#fff"
    }, 1500);
    t4_1.animate({
        "fill": "#ddd"
    }, 1500);
    c5.animate({
        "stroke": "#373737",
        "fill": "#e34e26"
    }, 1500);
    t5.animate({
        "fill": "#fff"
    }, 1500);
    t5_1.animate({
        "fill": "#ddd"
    }, 1500);
    c6.animate({
        "stroke": "#373737",
        "fill": "#ba141a"
    }, 1500);
    t6.animate({
        "fill": "#fff"
    }, 1500);
    t6_1.animate({
        "fill": "#ddd"
    }, 1500);
}


var userTicket = "fa12cad9122f4bf7905bcfa07afd3674";
var desKey = encMe('2', userTicket);
//留言
function sendMessage() {
    var name = $("#txtName").val().replace(/^姓名：/, "");
    var email = $("#txtEmail").val().replace(/^邮箱：/, "");
    var content = $("#tarContent").val().replace(/^内容：/, "");
    var emailExp = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (name == "") {
        alert("请输入姓名");
    } else if (email.match(emailExp) == null) {
        alert("请输入邮箱");
    } else if (content == "") {
        alert("请输入内容");
    } else {
        $.ajax({
            url: 'http://www.isaacxu.com/Content/JJobMessage',
            type: "get",
            dataType: "jsonp",
            data: {
                SortName: name,//姓名
                SortOrder: email,//邮箱
                Query: content,//内容
                UserId: desKey
            },
            success: function (res) {
                if (res) {
                    alert("留言成功,谢谢!");
                    $("#txtName").val("姓名：");
                    $("#txtEmail").val("邮箱：");
                    $("#tarContent").val("内容：");
                } else {
                    alert("留言失败,请联系xuhonggang@hotmail.com");
                }

            }
        });
    }
}