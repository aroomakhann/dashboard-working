var express = require ("express") 
var app = express ()
var port = process.env.port || 5500;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});