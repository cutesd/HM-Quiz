$(document).ready(function () {

    const myQuestions = [
        {
            question: "I live in total abundance, where I literally lack for nothing.",
            answers: {
                // a: "Superman",
                // b: "The Terminator",
                // c: "Waluigi, obviously"
            },
            //   correctAnswer: "c"
        },
        { question: "I never worry about money, because I trust I always have more than enough." },
        { question: "Everyone in my life sees, understands, and appreciates me for who I am." },
        { question: "I find it easy to surrender, let go, and relax no matter what's happening in my life." },
        { question: "I express myself freely and without fear, to anyone, anytime." },
        { question: "There's nothing I'm afraid to see or confront in myself and others." },
        { question: "I find it easy to accept and embrace all people and situations." },
        { question: "Everyone in my life values me and respects my time." },
        { question: "I am completely committed to do whatever it takes to get free of the chains that bind me." }


    ];


    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // add this question and its answers to the output
            output.push(
                `<div class="slide d-none">

				<header class="header">
					<div class="inline-bg"><img src="assets/images/HMC_logo-inline.png" alt="Helen MacMillan"></div>
					<h1>Which of the 8 Invisible Chains have you Trapped?</h1>
				</header>
				
				<div class="top">
		  				<h5 class="text-muted question-num">Question #${questionNumber + 1}</h5>
		  				<h3 class="question">${currentQuestion.question}</h3>
		  				<p class="description">Use the slider below to indicate where you feel in relation to this question.</p>
						
		  				<div class="slider-container mt-4">
		  					<div class="flex-shrink-1 text-right slider-num">1</div>
							<div class="p-2 w-100"><input class="quiz-slider" id="slider`+ questionNumber + `" type="range" min="1" max="10" value="5"></div>
							<div class="flex-shrink-1 slider-num">10</div>
						</div>

						<div class="slider-desc d-flex">
							<div class="p-2 mr-auto">not at all true</div>
							<div class="p-2">absolutely true</div>
						</div>
						<p class="slider-output">Your answer: <span id="slideVal">4</span></strong>&nbsp;&nbsp;</p>
  				</div> 

                  <div class="mt-auto bottom btn-group btn-group-lg" role="group" aria-label="Basic example">
				  	<button type="button" class="btn" id="prev-btn"><i class="fas fa-arrow-left fa-lg"></i>&nbsp;&nbsp;Previous</button>
				  	<button type="button" class="btn d-none" id="submit-btn">Submit</button>
				  	<button type="button" class="btn" id="next-btn">Next&nbsp;&nbsp;<i class="fas fa-arrow-right fa-lg"></i></button>
				</div>

			</div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showLeadGen() {
        quizContainer.classList.add("d-none");
        document.getElementsByClassName('lead-gen')[0].classList.remove('d-none');
        var submit = document.getElementById('submit-lead');
        submit.addEventListener("click", function (e) {
            var queryStr = getResults();
            $("#inf_form_b3987557376c5ce61a4c27cb597aedd4").submit();
            window.open('http://chainsquiz.com/quiz/results.html?n=' + queryStr, '_blank');
        });
    }

    function getResults() {
        var _arr=[];
        console.log(sliders.length);
        for (var i = 0; i < sliders.length-1; i++) {
            console.log(sliders[i]);
            var n = (i == 0) ? Math.floor((parseInt(document.getElementById('slider0').value) + parseInt(document.getElementById('slider1').value)) / 2) : document.getElementById('slider' + (i + 1)).value;
            _arr.push(n);
        }

        return _arr.join("-");
    }


    function showSlide(n) {
        slides[currentSlide].classList.add("d-none");
        slides[n].classList.remove("d-none");
        currentSlide = n;
        //
        outputs[n].innerHTML = sliders[n].value;
        sliders[n].oninput = function () {
            outputs[n].innerHTML = this.value;
        }
        nextBtns[n].addEventListener("click", showNextSlide);
        //
        if (currentSlide === 0) {
            prevBtns[0].textContent = '';
        } else {
            prevBtns[n].classList.remove('d-none');
            prevBtns[n].addEventListener("click", showPreviousSlide);
        }

        if (currentSlide === slides.length - 1) {
            nextBtns[n].classList.add('d-none');
            submits[n].classList.remove('d-none');
            submits[n].addEventListener("click", showLeadGen);
        } else {
            nextBtns[n].classList.remove('d-none');
            submits[n].classList.add('d-none');
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz-container");

    // display quiz right away
    buildQuiz();

    const slides = document.querySelectorAll(".slide");
    const sliders = document.querySelectorAll(".quiz-slider");
    const outputs = document.querySelectorAll("#slideVal");
    const nextBtns = document.querySelectorAll("#next-btn");
    const prevBtns = document.querySelectorAll("#prev-btn");
    const submits = document.querySelectorAll('#submit-btn');
    let currentSlide = 0;

    showSlide(0);

});

// end