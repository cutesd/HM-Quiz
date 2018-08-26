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

    const myResults = [

        {
            chain: "Scarcity",
            result: {
                low: "You may literally feel like you’re on the brink of starvation. You may feel desperate about time, money, and energy. You may have trouble sleeping at night, tortured by worry that your basic needs won’t be met. This may be true even if you actually have enough! The patterning is deep, and may well stop you from receiving abundance at all. You may feel resentful towards people who have resource, and may have a distrust of money in general….",
                med: "Sometimes you may feel very stressed about having enough money, energy, and time to go around. This feeling of scarcity may come and go, or it may exist only in certain areas of your life. But it plagues you. Because your score is in this range, you have an excellent chance of releasing this block completely, and welcoming big abundance into your life unrestricted. I help people with this score all the time to step into wealth with my Money Program. You can check that out here: link",
                hi: " With this score, you’re already plugged into abundance. You feel like you’ve got all the resource you need, and can likely manifest at a whim. I want to acknowledge you for opening yourself to abundance!"
            }
        },
        {
            chain: "MisTrust",
            result: {
                low: "With a score at this level, you probably feel very stuck in the area of trusting other people. You likely feel suspicious,even when you don’t have to. And this lack of trust might have you paralyzed, unable to move forward and get stuff done, unwilling to delegate or ask for help. It can be so hard to make decisions and you constantly question yourself.",
                med: "You likely feel trust issues come up periodically, and sometimes strongly. You may try to do everything yourself, just so you don’t have to go through the trauma of trusting in people and being disappointed! I work with people with this level of trust issue a lot. Trust is one of the pillars in my P.A.T.H. to Ultimate Freedom program, you can check it out here.",
                hi: "You are deeply trusting person, and you likely follow your inner knowing without question. You delegate well and probably have a whole support team who has your back. Congratulations on doing the work it takes to open to trusting and living a supported life!"
            }
        },
        {
            chain: "Invisibility",
            result: {
                low: " You are hiding! And we miss you! You might be skulking through the world, feeling unseen and unnoticed. But truly, you are hiding behind a veil that may have been placed on you from a young age. You are the only person who can choose to take that veil off of yourself. Are you ready to be seen?",
                med: " At this score level, you are likely emerging from hiding. Perhaps you have already taken steps to be more noticed in the world. Maybe you are sharing your thoughts and work more than ever. If you are in a state of emerging, you are ready for a program I have called the Powerful Communicator Intensive.",
                hi: "You are standing center stage in your life, unafraid to be noticed, heard, and seen. Congratulations on doing the work it takes to step out of hiding!"
            }
        },
        {
            chain: "Control",
            result: {
                low: "You are likely a bit of a nervous wreck in how much you need to control everything in your life! It’s exhausting, isn’t it? You feel like you have to do it all, and then you feel pissy and exhausted about doing everything for every one. What if you didn’t have to manage so much? Are you ready to release your iron grip on the people and circumstances around you, so you can experience pleasure, flow, and connection?",
                med: "With this score level in Control, you are likely growing your leadership abilities. You are learning to trust, and to allowothers to do what THEY are best at, while you focus on your highest abilities.I love helping people grow in leadership during this period.",
                hi: "You’ve got a great ability to surrender, and allow others to do their work while you focus on your strengths. This is a key element of balanced leadership! Congratulations on doing the work it took to get to this place!"
            }
        },
        {
            chain: "Repression",
            result: {
                low: "Do you feel silenced? I bet you do. You may even feel a physical restriction in your throat area. You may feel terror when you go to speak on stage or in front of people. You may find yourself dumbing down your truth so others don’t attack you. You may feel misunderstood often because you can’t easily speak up for yourself. Are you ready to speak and be heard? My Powerful Communicator Intensive is a safe space to release this chain and reclaim your voice.",
                med: "With a score in this level, you are likely opening to speak out more in the world. Perhaps you are releasing old stories that you should not be heard, or that your voice doesn’t matter. I love helping people awaken their voice, and speak their truth in the world in ways that garner them respect, success, and wealth. Check out the Powerful Communicator Intensive which might be a fit for you...",
                hi: "You are a speaker, a teacher, and a fully expressed being. Way to go! You’ve opened your throat to broadcast your wisdom in the world. I have a specialty in coaching powerhouse voices like you… Check out my Ultimate Freedom 1:1 coaching program if you’d like someone to have your back as you speak your brilliance in the world..."
            }
        },
        {
            chain: "Blindness",
            result: {
                low: "You may feel you’re in a fog. You may feel that other people are conundrums you’ll never understand. You may be baffled at how and why people do what they do. It’s because you’re blind in certain areas. But those blinders can be removed. They were likely instilled in you at a young age, but it’s never too late to SEE with the clarity that is your birthright. Just seeing starts the process of change.",
                med: "With your score in this area, you are likely awakening more and more to seeing what used to be unseen. Your eyes are opening. Your vision is clearing. And you are ready to see and understand more and more. You are learning to trust your own Sight. And I can help. Check out this offering...",
                hi: "You see clearly. You don’t hold a lot of judgement on others because you can see and understand where they are coming from naturally. Perhaps you’ve always been this way. Or perhaps you did a lot of awareness work to get here. Either way, congratulations for having this clear vision!"
            }
        },
        {
            chain: "Disconnection",
            result: {
                low: "For you, this is not a friendly world. It’s dangerous, and full of uncaring people and circumstances. But this could open for you, where you could feel safer and more available for love and abundance.",
                med: "You are opening to trusting the universe, and stepping into the miraculous flow of life. You are finding connection, but it might be spotty or rare. Together, we can increase the frequency and quality of your deep connection with life, allowing you to live in the flow of your own genius!",
                hi: " You are in the flow! You trust, and know you live in a friendly universe. This makes all things possible for you! Congratulations!"
            }
        },
        {
            chain: "Under-Value",
            result: {
                low: "You may feel like a lowly person, a servant in life, and unworthy of good things. This is a hard burden to bear. But you don’t have to stay in this belief structure. I can help.",
                med: "With this score level, you are learning to value yourself, love yourself, and receive good things in life. With some support, you can step into a receiving flow that makes everything easier. Check out this program...",
                hi: "Congratulations on having done the work that built your self confidence to this level. You KNOW you are worthy. And you attract good things, opportunities, and wealth because you do."
            }
        }

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
					<h1>Which of the 8 Invisible Chains have you Stuck?</h1>
				</header>
				
				<div class="top">
		  				<h5 class="text-muted question-num">Question #${questionNumber + 1}</h5>
		  				<h3 class="question">${currentQuestion.question}</h3>
		  				<p class="description">Use the slider below to indicate where you feel in relation to this question.</p>
						
		  				<div class="slider-container mt-4 mb-2">
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
        //
        var queryStr = getResults();
        const _arr = queryStr.split('-');

        for (var i = 0; i < _arr.length; i++) {
            const score = parseResults(_arr[i])
            document.getElementById('r' + i).value = score;
            document.getElementById('rtxt' + i).value = myResults[i].result[score];
        }

        document.getElementById('result_url').value = 'http://chainsquiz.com/quiz/results.html?n=' + queryStr;

        document.getElementById('submit-lead').addEventListener("click", function (e) {
            $("#inf_form_b3987557376c5ce61a4c27cb597aedd4").submit();
             window.open("http://helenmacmillan.com/chains-quiz-thank-you/", '_blank');
        });
    }

    function getResults() {
        var _arr = [];
        for (var i = 0; i < sliders.length - 1; i++) {
            var n = (i == 0) ? Math.floor((parseInt(document.getElementById('slider0').value) + parseInt(document.getElementById('slider1').value)) / 2) : document.getElementById('slider' + (i + 1)).value;
            _arr.push(n);
        }
        return _arr.join("-");
    }

    parseResults = (n) => {
        if (n > 8)
            return 'hi';
        else if (n > 4)
            return 'med'
        else
            return "low"
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