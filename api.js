const express = require('express');
var sleep = require('system-sleep');
const port = 8080

const app = express();

const mysleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
};

app.get('/api/timeout', function(req, res){
     console.log(JSON.stringify(req.headers));
     var sec = 0;
     if (req.query.sec)
     {
        sec=req.query.sec;
     };
     console.log('Sleeping '+sec+' seconds...' );
     mysleep(sec*1000);
     console.log('Ending...' );
     res.status(200).send('End timeout: '+sec+ ' seconds.');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

