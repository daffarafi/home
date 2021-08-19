let shapes = Array.from(document.getElementsByClassName("shape1"));
let shapesmenu = Array.from(document.getElementsByClassName("shape2"));
let shapesParent = document.querySelector(".bg .shape");

// function bgmove() {
//     // console.log(
//     //     event.pageX -
//     //         (shapesParent.getBoundingClientRect().left +
//     //             shapesParent.clientWidth / 2)
//     // );
//     // console.log(
//     //     event.pageX -
//     //         (shapesParent.getBoundingClientRect().left +
//     //             shapesParent.clientWidth / 2)
//     // );

//     let leftShape1 = (shapesParent.clientWidth - shapes[0].clientWidth) / 2;
//     leftShape1 +=
//         (event.pageX -
//             (shapesParent.getBoundingClientRect().left +
//                 shapesParent.clientWidth / 2)) /
//         -6;
//     shapes[0].style.left = leftShape1;
//     shapesmenu[0].style.left = leftShape1;

//     let topShape1 = (shapesParent.clientHeight - shapes[0].clientHeight) / 2;
//     topShape1 +=
//         (event.pageY -
//             (shapesParent.getBoundingClientRect().top +
//                 shapesParent.clientHeight / 2)) /
//         -6;
//     shapes[0].style.top = topShape1;
//     shapesmenu[0].style.top = topShape1;

//     let leftShape2 = (shapesParent.clientWidth - shapes[1].clientWidth) / 2;
//     leftShape2 +=
//         (event.pageX -
//             (shapesParent.getBoundingClientRect().left +
//                 shapesParent.clientWidth / 2)) /
//         -9;
//     shapes[1].style.left = leftShape2;
//     shapesmenu[1].style.left = leftShape2;

//     let topShape2 = (shapesParent.clientHeight - shapes[1].clientHeight) / 2;
//     topShape2 +=
//         (event.pageY -
//             (shapesParent.getBoundingClientRect().top +
//                 shapesParent.clientHeight / 2)) /
//         -9;
//     shapes[1].style.top = topShape2;
//     shapesmenu[1].style.top = topShape2;

//     let leftShape3 = (shapesParent.clientWidth - shapes[2].clientWidth) / 2;
//     leftShape3 +=
//         (event.pageX -
//             (shapesParent.getBoundingClientRect().left +
//                 shapesParent.clientWidth / 2)) /
//         -12;
//     shapes[2].style.left = leftShape3;
//     shapesmenu[2].style.left = leftShape3;

//     let topShape3 = (shapesParent.clientHeight - shapes[2].clientHeight) / 2;
//     topShape3 +=
//         (event.pageY -
//             (shapesParent.getBoundingClientRect().top +
//                 shapesParent.clientHeight / 2)) /
//         -12;
//     shapes[2].style.top = topShape3;
//     shapesmenu[2].style.top = topShape3;
//     let leftShape4 = (shapesParent.clientWidth - shapes[3].clientWidth) / 2;
//     leftShape4 +=
//         (event.pageX -
//             (shapesParent.getBoundingClientRect().left +
//                 shapesParent.clientWidth / 2)) /
//         -15;
//     shapes[3].style.left = leftShape4;
//     shapesmenu[3].style.left = leftShape4;

//     let topShape4 = (shapesParent.clientHeight - shapes[3].clientHeight) / 2;
//     topShape4 +=
//         (event.pageY -
//             (shapesParent.getBoundingClientRect().top +
//                 shapesParent.clientHeight / 2)) /
//         -15;
//     shapes[3].style.top = topShape4;
//     shapesmenu[3].style.top = topShape4;
//     let leftShape5 = (shapesParent.clientWidth - shapes[4].clientWidth) / 2;
//     leftShape5 +=
//         (event.pageX -
//             (shapesParent.getBoundingClientRect().left +
//                 shapesParent.clientWidth / 2)) /
//         -20;
//     shapes[4].style.left = leftShape5;
//     shapesmenu[4].style.left = leftShape5;

//     let topShape5 = (shapesParent.clientHeight - shapes[4].clientHeight) / 2;
//     topShape5 +=
//         (event.pageY -
//             (shapesParent.getBoundingClientRect().top +
//                 shapesParent.clientHeight / 2)) /
//         -20;
//     shapes[4].style.top = topShape5;
//     shapesmenu[4].style.top = topShape5;
//     let leftShape6 = (shapesParent.clientWidth - shapes[5].clientWidth) / 2;
//     leftShape6 +=
//         (event.pageX -
//             (shapesParent.getBoundingClientRect().left +
//                 shapesParent.clientWidth / 2)) /
//         -27;
//     shapes[5].style.left = leftShape6;
//     shapesmenu[5].style.left = leftShape6;

//     let topShape6 = (shapesParent.clientHeight - shapes[5].clientHeight) / 2;
//     topShape6 +=
//         (event.pageY -
//             (shapesParent.getBoundingClientRect().top +
//                 shapesParent.clientHeight / 2)) /
//         -27;
//     shapes[5].style.top = topShape6;
//     shapesmenu[5].style.top = topShape6;
//     let leftShape7 = (shapesParent.clientWidth - shapes[6].clientWidth) / 2;
//     leftShape7 +=
//         (event.pageX -
//             (shapesParent.getBoundingClientRect().left +
//                 shapesParent.clientWidth / 2)) /
//         -34;
//     shapes[6].style.left = leftShape7;
//     shapesmenu[6].style.left = leftShape7;

//     let topShape7 = (shapesParent.clientHeight - shapes[6].clientHeight) / 2;
//     topShape7 +=
//         (event.pageY -
//             (shapesParent.getBoundingClientRect().top +
//                 shapesParent.clientHeight / 2)) /
//         -34;
//     shapes[6].style.top = topShape7;
//     shapesmenu[6].style.top = topShape7;
// }
// let toggle = 0;

// window.addEventListener("mousemove", bgmove);

$(".menu").click(function () {
    $(".menu").toggleClass("active");
    $(".menu p").toggleClass("active");
    $(".menu a").toggleClass("active");
    $(".menu a .hamburger hr").toggleClass("active");
    $("main .container .about").toggleClass("active");
    $("main .container .services").toggleClass("active");
    $("main .container .connect").toggleClass("active");
    $(".bg .shape .shape1").toggleClass("active");
    $(".bg .shape .shape2").toggleClass("active");
    $(".bg .squareout .sql").toggleClass("active");
    $(".bg .squareout .sqr").toggleClass("active");
    $("nav .container .port").toggleClass("active");
    $(".bottom .container .review").toggleClass("active");
    $("menu").toggleClass("active");
    $(".bottom .container .port").toggleClass("active");

    // $('.bg .shape .shape1:nth-child(8)').toggleClass("show")
});
