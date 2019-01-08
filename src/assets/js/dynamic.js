/** 

[NN Template] by xXNurioXx

Dynamic site update

**/

document.querySelectorAll("[href=*").forEach( (element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.href);
    });
});