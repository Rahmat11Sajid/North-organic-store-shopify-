document.querySelectorAll(".hb_faq__content").forEach(item => {
    item.addEventListener("click", function() {
        let answer = this.querySelector(".hb_faq__answer");
        let minus = this.querySelector(".hb_faq__content--sign-minus");
        let plus = this.querySelector(".hb_faq__content--sign-plus");
        if (answer) {
            answer.style.display = answer.style.display === "block" ? "none" : "block";
            minus.style.display = minus.style.display === "block" ? "none": "block";
            plus.style.display = plus.style.display === "none" ? "block": "none";
        }
        console.log(213)
    });
});