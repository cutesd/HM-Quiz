$(document).ready(function () {
    var showResults = function (results) {
        // console.log("showResults", results)
        //
        var subtitles = document.querySelectorAll(".card-subtitle");
        var lows = document.querySelectorAll("#low");
        var meds = document.querySelectorAll("#med");
        var his = document.querySelectorAll("#hi");

        //
        var _arr = results.split("-");
        // console.log(_arr)

        for (var i = 0; i < _arr.length; i++) {
            lows[i].classList.add('d-none');
            meds[i].classList.add('d-none');
            his[i].classList.add('d-none');
            //
            var n = parseInt(_arr[i]);
            // console.log(i, _arr[i], n);
            if (n > 8) {
                subtitles[i].textContent = "Your Score: HIGH";
                his[i].classList.remove('d-none');
            } else if (n > 4) {
                subtitles[i].textContent = "Your Score: MEDIUM";
                meds[i].classList.remove('d-none');
            } else {
                subtitles[i].textContent = "Your Score: LOW";
                lows[i].classList.remove('d-none');
            }
        }


        var myResults = {
            "Disconnection": parseInt(_arr[6]),
            "Ambiguity": parseInt(_arr[5]),
            "Repression": parseInt(_arr[4]),
            "Insignificance": parseInt(_arr[7]),
            "Control": parseInt(_arr[3]),
            "Invisibility": parseInt(_arr[2]),
            "Mistrust": parseInt(_arr[1]),
            "Scarcity": parseInt(_arr[0])
        };


        var myBarchart = new Barchart(
            {
                canvas: myCanvas,
                seriesName: "Your Chains Scores",
                padding: 28,
                gridScale: 1,
                gridColor: "#bbb",
                data: myResults,
                colors: ["#a83dff", "#2a90ff", "#0defff", "#ff91ca", "#8aff4a", "#f5f809", "#ffa20e", "#f41321"]

                /*root - ee3143
                sacral - f47723
                solarplexus - f4ba1a
                heart - 05af4c
                throat - 279ED8
                3rd-eye - 7361ab
                crown - F88BA7 */

                /*red: f41321
                Orange: ffa20e
                Yellow: f5f809
                Green: 8aff4a
                Pink: ff91ca
                cyan: 0defff
                Blue: 2a90ff
                Purple: a83dff */
            });

        myBarchart.draw();

        const closeAll = () =>{
            for (i = 0; i < 8; i++) {
                $('#result-card'+i).collapse('hide');
            }
        }

        $('div[id^="result-card"]').on('show.bs.collapse', function () {
            closeAll();
            console.log("clicked")
          });

        //
        $('.close-btn').on("click", function (e) {
           closeAll();
        });
    }


    //
    //
    //
    const myCanvas = document.getElementById("myCanvas");
    myCanvas.width = $("#graph").width();
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

        var selLeg;

        this.draw = function () {
            var maxValue = 10;
            var canvasActualHeight = this.canvas.height - this.options.padding * 2;
            var canvasActualWidth = this.canvas.width - (this.options.padding + 5);

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
                a.setAttribute("href", "#result-card" + barIndex);
                a.setAttribute("role", "button");
                a.setAttribute("aria-expanded", "false");
                a.setAttribute("aria-controls", "result-card" + barIndex);
                a.innerHTML = `<nobr>${categ}: ${this.options.data[categ]}</nobr>`;
                // a.addEventListener("click", legendToggle);
                li.append(a);
                ul.append(li);
                barIndex++;
            }

        }

        function legendToggle() {
            // if (selLeg !== undefined) {
            //     var card = $(selLeg);
            //     var targetDiv = card.find("#closeBtn");
            //     var clickEvent = document.createEvent("MouseEvents");
            //     clickEvent.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0,
            //         false, false, false, false, 0, null);
            //     targetDiv.dispatchEvent(clickEvent);
            // }
            // selLeg = $(this).attr('aria-controls');
        }
    }

    //
    //
    //



    var queries = {};
    $.each(document.location.search.substr(1).split('&'), function (c, q) {
        if (q.length > 0) {
            var i = q.split('=');
            queries[i[0].toString()] = i[1].toString();
        } else {
            queries.n = "5-5-5-5-5-5-5-5"
        }
    });
    // console.log("col width", $("#graph").width());
    var results = new showResults(queries.n);
    //
    //
    // end
});