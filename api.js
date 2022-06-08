const express = require('express');
var sleep = require('system-sleep');
const port = 3000

const app = express();

app.get('/api/timeout', function(req, res){
     console.log(JSON.stringify(req.headers));
     var sec = 0;
     if (req.query.sec)
     {
        sec=req.query.sec;
     };
     console.log('Sleeping '+sec+' seconds...' );
     sleep(sec*1000);
     console.log('Ending...' );
     res.status(200).send('End timeout: '+sec+ ' seconds.');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

