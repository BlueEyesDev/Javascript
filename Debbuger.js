let contentAdded = false;
setInterval(function() {
    let start = performance.now();
    debugger;
    let end = performance.now();
    if (end - start > 100 && !contentAdded) {
        contentAdded = true;
        document.write(`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Debugger is detected</title>
        <style>
            body {
                background-color: rgb(43, 43, 43);
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }

            .container {
                width: 500px;
                height: 200px;
            }

            .square {
                width: 100%;
                height: 100%;
                background-color: rgb(43, 43, 43);
                border: 2px solid rgb(74, 16, 16);
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .square p {
                color: white;
                font-size: 24px;
                text-align: center;
                margin: 0;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="square">
                <p>
                A debugging console has been detected.</br></br>
                Please refresh the page to view this webpage.
                </p>
            </div>
        </div>
    </body>
</html>  
        `);
        clearInterval();
    }
}, 300);
