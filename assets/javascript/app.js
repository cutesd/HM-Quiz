(function () {

    console.log('HELLO');


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

    console.log(myQuestions[3].question);


    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // add this question and its answers to the output
            output.push(
                `<div class="slide d-none">

				<h1 class="header">Which of the 8 Invisible Chains have you Trapped?</h1>
				
				<div class="top">
		  				
		  				<h3 class="question">${currentQuestion.question}</h3>
		  				<p class="description">Use the slider below to indicate where you feel in relation to this question.</p>
						
		  				<div class="slider-container mt-4">
		  					<div class="flex-shrink-1 text-right slider-num">1</div>
							<div class="p-2 w-100"><input class="quiz-slider" type="range" min="1" max="10" value="5"></div>
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

    function showResults() {
        quizContainer.classList.add("d-none");
        document.getElementsByClassName('results-container')[0].classList.remove('d-none');
        // document.getElementById("results")
        // show number of correct answers out of total
        // document.getElementById("result-data").innerHTML = `These are the results`;
        var subtitles = document.querySelectorAll(".card-subtitle");
        var lows = document.querySelectorAll("#low");
        var meds = document.querySelectorAll("#med");
        var his = document.querySelectorAll("#hi");

        for(var i=0; i<lows.length; i++){
            lows[i].classList.add('d-none');
            meds[i].classList.add('d-none');
            his[i].classList.add('d-none');
            //
            var n = sliders[i].value;
            if(n>8){
                subtitles[i].textContent = "Your Score: HIGH";
                his[i].classList.remove('d-none');
            }else if(n>4){
                subtitles[i].textContent = "Your Score: MEDIUM";
                meds[i].classList.remove('d-none');
            }else{
                subtitles[i].textContent = "Your Score: LOW";
                lows[i].classList.remove('d-none');
            }
        }

        myVinyls = {
            "Scarcity": sliders[0].value,
            "Mistrust": sliders[1].value,
            "Invisibility": sliders[2].value,
            "Control": sliders[3].value,
            "Repression": sliders[4].value,
            "Blindness": sliders[5].value,
            "Connection": sliders[6].value,
            "Value": sliders[7].value
        }; 

        myBarchart = new Barchart(
            {
                canvas: myCanvas,
                seriesName: "Your Results",
                padding: 28,
                gridScale: 1,
                gridColor: "#bbb",
                data: myVinyls,
                colors: ["#F9C7A8", "#F39A9B", "#EC6E8D", "#D84A87", "#A9378F", "#7A2397", "#461266", "#310C46"]
            }
        );

        myBarchart.draw();
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
        console.log(document.getElementById('ph-btn'));
        if (currentSlide === 0) {
            prevBtns[0].textContent = '';
        } else {
            prevBtns[n].classList.remove('d-none');
            prevBtns[n].addEventListener("click", showPreviousSlide);
        }

        if (currentSlide === slides.length - 1) {
            nextBtns[n].classList.add('d-none');
            submits[n].classList.remove('d-none');
            submits[n].addEventListener("click", showResults);
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


    //
    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = 350;
    myCanvas.height = 300;


    var ctx = myCanvas.getContext("2d");

    function drawLine(ctx, startX, startY, endX, endY, color) {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.restore();
    }

    function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height, color) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
        ctx.restore();
    }
 

    var Barchart = function (options) {
        this.options = options;
        this.canvas = options.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.colors = options.colors;

        this.draw = function () {
            var maxValue = 0;
            for (var categ in this.options.data) {
                // maxValue = Math.max(maxValue,this.options.data[categ]);
                maxValue = 10;
            }
            var canvasActualHeight = this.canvas.height - this.options.padding * 2;
            var canvasActualWidth = this.canvas.width - this.options.padding * 2;

            //drawing the grid lines
            var gridValue = 0;
            while (gridValue <= maxValue) {
                var gridY = canvasActualHeight * (1 - gridValue / maxValue) + this.options.padding;
                drawLine(
                    this.ctx,
                    0,
                    gridY,
                    this.canvas.width,
                    gridY,
                    this.options.gridColor
                );

                //writing grid markers
                this.ctx.save();
                this.ctx.fillStyle = this.options.gridColor;
                this.ctx.font = "bold 13px Arial";
                this.ctx.fillText(gridValue, 10, gridY - 2);
                this.ctx.restore();

                gridValue += this.options.gridScale;
            }

            //drawing the bars
            var barIndex = 0;
            var numberOfBars = Object.keys(this.options.data).length;
            var barSize = (canvasActualWidth) / numberOfBars;

            for (categ in this.options.data) {
                var val = this.options.data[categ];
                var barHeight = Math.round(canvasActualHeight * val / maxValue);
                drawBar(
                    this.ctx,
                    this.options.padding + barIndex * barSize,
                    this.canvas.height - barHeight - this.options.padding,
                    barSize,
                    barHeight,
                    this.colors[barIndex % this.colors.length]
                );

                barIndex++;
            }

            //drawing series name
            this.ctx.save();
            this.ctx.textBaseline = "bottom";
            this.ctx.textAlign = "center";
            this.ctx.fillStyle = "#aaa";
            this.ctx.font = "bold 13px Arial";
            this.ctx.fillText(this.options.seriesName, this.canvas.width / 2, this.canvas.height);
            this.ctx.restore();

            //draw legend
            barIndex = 0;
            var legend = document.querySelector("legend[for='myCanvas']");
            var ul = document.createElement("ul");
            legend.append(ul);
            for (categ in this.options.data) {
                var li = document.createElement("li");
                li.style.borderLeft = "20px solid " + this.colors[barIndex % this.colors.length];
                var a = document.createElement("a");
                a.setAttribute("data-toggle", "collapse");
                a.setAttribute("href", "#result-card"+barIndex);
                a.setAttribute("role", "button");
                a.setAttribute("aria-expanded", "false");
                a.setAttribute("aria-controls", "result-card"+barIndex);
                a.textContent = categ+": "+sliders[barIndex].value;
                li.append(a);
                ul.append(li);
                barIndex++;
            }

        }
    }

    var myVinyls;
    var myBarchart;
   

})();

// end