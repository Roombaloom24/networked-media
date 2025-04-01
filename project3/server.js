const express = require('express');
const parser = require('body-parser');
const multer = require('multer');
const { name } = require('ejs');
const up = multer({ dest: "public/upload" }); // Ensure this line is present



const app = express();
const encodedParser = parser.urlencoded({extended: true});
const uploadProcessor = multer({dest: "public/upload"});
app.use(encodedParser)
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.static('public'));


let messages = [];
let messages2 = [];
let messages3 = [];
let tSend = [];

let p1 = {}
let p2 = {}
let p3 = {}
// Routes

app.get('/', (req, res) => {
    const data = {
        posts: messages,

    }
    console.log("Name:", p1.name);
console.log("Last Name:", p1.lastName);
    res.render('homePage', {
        img:p1.profPic, 
        img2:p2.profPic,
        img3: p3.profPic,
        name:p1.name,
        lastName:p1.lastName,
        sun:p1.sun,
        moon: p1.moon,
        rising: p1.rising,
        love : p1.love,
        hate : p1.hate,
        hair : p1.hair,
        eyes : p1.eyes,
        age : p1.age,

        name2: p2.name,
        lastName2: p2.lastName,
        sun2: p2.sun,
        moon2: p2.moon,
        rising2: p2.rising,
        eyes2:p2.eyes,
        hair2: p2.hair,
        age2: p2.age,
        love2:p2.love,
        hate2:p2.hate,
        

        name3: p3.name,
        lastName3: p3.lastName,
        sun3: p3.sun,
        moon3: p3.moon,
        rising3: p3.rising,
        love3: p3.love,
        hate3: p3.hate,
        hair3: p3.hair,
        eyes3: p3.eyes,
        age3: p3.age
        
        
    })
});

app.get('/image', (req, res) => {
    res.sendFile('Screenshot 2025-01-22 at 4.44.22 PM.png', { root: 'public' });
});


app.get('/secretLink', (req, res) => {
    res.render('secretLink', { link: '/person1'});


});

app.get('/secretLink2', (req, res) => {
    res.render('secretLink2', { link: '/person2' });
});
app.get('/secretLink3', (req, res) => {
    res.render('secretLink3', { link: '/person3'});
});



app.post('/person1', up.fields([{name: "profPic", maxCount: 1}, {name: "media1Img", maxCount: 3},{name: "media2Img", maxCount: 3},{name: "media3Img", maxCount: 3}]), (req, res)=>{
    console.log(req.body)

    p1.message = req.body.message
    p1.user = req.body.user
    p1.message2 = req.body.message2
    p1.user2 = req.body.user2
    p1.message3 = req.body.message3
    p1.user3 = req.body.user3
    p1.name = req.body.firstname
    p1.lastName = req.body.lastname
    p1.sun = req.body.sun
    p1.moon = req.body.moon
    p1.rising = req.body.rising
    p1.love = req.body.love
    p1.hate = req.body.hate
    p1.hair = req.body.hair
    p1.eyes = req.body.eyes
    p1.age = req.body.age


    // console.log(req.files['profpic'][0].filename)
    if(req.files['profPic']){
        p1.profPic = "upload/" + req.files['profPic'][0].filename
    } 
    if(req.files['media1Img']){
        p1.media1Url = "upload/" + req.files['media1Img'][0].filename
    }
    if(req.files['media2Img']){
        p1.media2Url = "upload/" + req.files['media2Img'][0].filename
    }
    if(req.files['media3Img']){
        p1.media3Url = "upload/" + req.files['media3Img'][0].filename
    }
    res.redirect('/')
})



app.get('/p1m1', (req, res)=>{
    res.render('media1P1.ejs', {img: p1.media1Url, text: p1.message, user: p1.user})
})

app.get('/p1m2',(req,res)=>{
    res.render('media1P1.ejs', {img: p1.media2Url, text: p1.message2, user: p1.user2})
})
app.get('/p1m3',(req,res)=>{
    res.render('media1P1.ejs', {img: p1.media3Url, text: p1.message3, user: p1.user3})
})


app.post('/person2', up.fields([{name: "profPic", maxCount: 1}, {name: "media1Img", maxCount: 3},{name: "media2Img", maxCount: 3},{name: "media3Img", maxCount: 3}]), (req, res)=>{
    console.log(req.body)

    p2.message = req.body.message
    p2.user = req.body.user
    p2.message2 = req.body.message2
    p2.user2 = req.body.user2
    p2.message3 = req.body.message3
    p2.user3 = req.body.user3
    p2.name = req.body.firstname
    p2.lastName = req.body.lastname
    p2.sun = req.body.sun
    p2.moon = req.body.moon
    p2.rising = req.body.rising
    p2.love = req.body.love
    p2.hate = req.body.hate
    p2.hair = req.body.hair
    p2.eyes = req.body.eyes
    p2.age = req.body.age


    // console.log(req.files['profpic'][0].filename)
    if(req.files['profPic']){
        p2.profPic = "upload/" + req.files['profPic'][0].filename
    } 
    if(req.files['media1Img']){
        p2.media1Url = "upload/" + req.files['media1Img'][0].filename
    }
    if(req.files['media2Img']){
        p2.media2Url = "upload/" + req.files['media2Img'][0].filename
    }
    if(req.files['media3Img']){
        p2.media3Url = "upload/" + req.files['media3Img'][0].filename
    }
    res.redirect('/')
})

app.get('/p2m1', (req, res)=>{
    res.render('media1P1.ejs', {img: p2.media1Url, text: p2.message, user: p2.user})
})

app.get('/p2m2',(req,res)=>{
    res.render('media1P1.ejs', {img: p2.media2Url, text: p2.message2, user: p2.user})
})
app.get('/p2m3',(req,res)=>{
    res.render('media1P1.ejs', {img: p2.media3Url, text: p2.message3, user: p2.user3})
})



app.post('/person3', up.fields([{name: "profPic", maxCount: 1}, {name: "media1Img", maxCount: 3},{name: "media2Img", maxCount: 3},{name: "media3Img", maxCount: 3}]), (req, res)=>{
    console.log(req.body)

    p3.message = req.body.message
    p3.user = req.body.user
    p3.message2 = req.body.message2
    p3.user2 = req.body.user2
    p3.message3 = req.body.message3
    p3.user3 = req.body.user3
    p3.name = req.body.firstname
    p3.lastName = req.body.lastname
    p3.sun = req.body.sun
    p3.moon = req.body.moon
    p3.rising = req.body.rising
    p3.love = req.body.love
    p3.hate = req.body.hate
    p3.hair = req.body.hair
    p3.eyes = req.body.eyes
    p3.age = req.body.age
    // console.log(req.files['profpic'][0].filename)
    if(req.files['profPic']){
        p3.profPic = "upload/" + req.files['profPic'][0].filename
    } 
    if(req.files['media1Img']){
        p3.media1Url = "upload/" + req.files['media1Img'][0].filename
    }
    if(req.files['media2Img']){
        p3.media2Url = "upload/" + req.files['media2Img'][0].filename
    }
    if(req.files['media3Img']){
        p3.media3Url = "upload/" + req.files['media3Img'][0].filename
    }
    res.redirect('/')
})

app.get('/p3m1', (req, res)=>{
    res.render('media1P1.ejs', {img: p3.media1Url, text: p3.message, user: p3.user})
})

app.get('/p3m2',(req,res)=>{
    res.render('media1P1.ejs', {img: p3.media2Url, text: p3.message2, user: p3.user})
})
app.get('/p3m3',(req,res)=>{
    res.render('media1P1.ejs', {img: p3.media3Url, text: p3.message3, user: p3.user3})
})




// BELOW IS THE SECRET LINKS 




app.get('/about', (req, res) => res.render('about'));
app.get('/pastIssues', (req, res) => {
    res.render('pastIssues',{img: p1.profPic, img2: p2.profPic, img3: p3.profPic})
})



app.get('/person1', (req, res) =>{ 
    res.render('person1', { img:p1.media1Url, img2:p1.media2Url,img3: p1.media3Url})
});
app.get('/person2', (req, res) =>{
     res.render('person2', {img:p2.media1Url, img2:p2.media2Url,img3: p2.media3Url})
    });
app.get('/person3', (req, res) =>{
     res.render('person3', {img:p3.media1Url, img2:p3.media2Url,img3: p3.media3Url})
    });



app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000');
});



//  HOW TO DO THE IMAGE
//  as well as getting them into the a tag

// Can i cheat and find images myself of the content for the media pages 
// also how do i make the media page for fun and interactive, encouraging users to scroll
// how to only have one piece of data at a time, the most recent might delete the other??


//plans
// need to add questions for sign, hair, eyes, all the di questions
//  need to make the ids
//  text roomies about answering the questions
//  CHECK IF POSTY ALREADY EXISTS FOR ONLY 1 THERE
// G