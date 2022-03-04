const alert = require("alert");
const express = require('express');
const app = express();
let db = require('./conn');
app.set('view engine','ejs');
app.use(express.urlencoded({'extended':'true'}))
let router = require('./routes/table');
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.render("index");
})

app.post('/',(req,res)=>{
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let phone = req.body.phone;
    let gender = req.body.gender;
    let about = req.body.about;
    let country = req.body.country;
    let password = req.body.passwordd;


    let check_query = `SELECT * FROM pst.signup WHERE Email=? OR Phone=?`;
    db.query(check_query,[email,phone],(err,result)=>{
        if(err){
            console.log(err)
        }
        else if(result.length>0){
            alert("email or phone already exists.");
        }
        else{
            
            let query = `Insert into pst.signup (Name,Email,Phone,Country,Gender,Role,Password,About)values("${fname} ${lname}","${email}","${phone}","${country}","${gender}","user","${password}","${about}")`;
            db.query(query,(err,result)=>{
        if(err){
         console.log(err);
        }
        else{
            res.render('index',{data:result});
            console.log('DATA INSERTED SUCCESSFULLY!!!');
            console.log('afffectd rows', result.affectedRows);
        }
    });
        }

    })

    
})

app.use('/table',router);

app.get('/userprofile',(req,res)=>{
    res.render('userprofile');
})


app.get('/adminprofile',(req,res)=>{
    res.render('adminprofile');
})
app.get('/adminprofile',(req,res)=>{
    res.render('adminprofile');
})

app.get('/delete/:id',(req,res)=>{
    let id = req.params.id;
    let query = `DELETE FROM pst.signup WHERE ID=?`;
    db.query(query,[id],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Deleted successfully");
            res.redirect('/table');
        }
    })
})

app.get('/updateadmin/:id',(req,res)=>{
    let id = req.params.id;
    let query = 'SELECT * FROM pst.signup WHERE ID=?';
    db.query(query,[id],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render('updateadmin',{data:result});
        }
    })
}).post('/updateadmin/:id',(req,res)=>{
    let id = req.params.id;
    let query="UPDATE pst.signup SET Name =? , Country =?, Gender=? ,About =? WHERE ID=?"; ///////////
    db.query(query,[req.body.name,req.body.country,req.about,id],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            let query = "select * from pst.signup WHERE ID=?";
            db.query(query,[id],(err,result)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    res.render('adminprofile',{data:result});
                }
            })
        }
    })
    
})

app.get('/adminuserupdate/:id',(req,res)=>{
    let id = req.params.id;
    let query = `SELECT * FROM pst.signup WHERE ID=?`;
    db.query(query,[id],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render('adminuserupdate',{data:result});
        }
    })
}).post('/adminuserupdate/:id',(req,res)=>{  
    let id = req.params.id;
    let query="UPDATE pst.signup SET Name =? , Country =?, Gender=?, Role=?, About =? WHERE ID=?";
    db.query(query,[req.body.name,req.body.country,req.body.gender,req.body.role,req.body.about,id],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            // res.render('table',{data:result});
            res.redirect('/table');
        }
    })  
})

app.get('/alladmindata/:id',(req,res)=>{
    let id = req.params.id;
    let query =`SELECT * FROM pst.signup WHERE Role ='admin'`;
    db.query(query,[id],(err,result)=>{
        if(err){
            console.log(err);

        }
        else{
            res.render('adminprofile',{data:result});

        }
    })
// }).post('/alladmindata/:id',(req,res)=>{
    //let id = req.params.id;
    //let query
})    

app.get('/uuser/:id',(req,res)=>{
    let id = req.params.id;
    let query = `SELECT * FROM pst.signup WHERE ID =? `;
    db.query(query,[id],(err,result)=>{ ///////
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(result);
            res.render('userupdate',{data:result});
        }
    })
    // res.send('uuser me aapka swagat hai _/\_');
}).post('/uuser/:id',(req,res)=>{
    let id = req.params.id;
    let query = `UPDATE pst.signup SET Name =?, Country=?, Gender =?, About=? WHERE ID=? `;
    db.query(query,[req.body.name,req.body.country,req.body.gender,req.body.about,id],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            let query = 'SELECT * FROM pst.signup WHERE ID=?';
            db.query(query,[id],(err,result)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    res.render('userprofile',{data:result});
                    console.log(result);
                }
            })

            // res.redirect('/userprofile');
        }
    })
    // res.send('uuser me aapka swagat hai _/\_');
})
// ///Route for Login
// app.post('/auth', function(req, res) {
//     let email = req.body.Email;
//     let password = req.body.password;
//     if (email &&password) {
//     con.query('SELECT * FROM signup WHERE Email = ? OR Password = ?', [email, password]), function(error, results, fields) {
//     if (error)console.log(error);
//     if (results.length > 0) {
//     res.render("index");
//     } else {
//     alert("Please check your email id And Password.");
//     }
    // res.end();
    // };
    // }
    // });
    // app.post('/',(req,res)=>{
    // let fname = req.body.fname;
    // let password = req.body.password;
    // let checkuser_query = `SELECT * from pst.signup WHERE Username=? and Password =?`;
    // db.query(checkuser_query,[fname,password],(err,result)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     else if(result.length>0){
    //         alert("Login Successful");
    //             }})
    //         })

//For login (matching username and password)

app.post('/login',(req,res)=>{
let uname = req.body.uname;
let pass = req.body.pass;
console.log(uname ,pass);
let check_query = `SELECT * FROM pst.signup WHERE name=? AND password=?`;
db.query(check_query,[uname,pass],(err,result)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        result.map(element=>{
            if(element.Role == 'admin')
            {
                res.render('adminprofile',{data:result});
            }
            else
            {
                res.render('userprofile',{data:result});
            }  
        })              
    }
})
})

// app.get('/allusers',(req,res)=>{
//     let query = "SELECT * FROM pst.signup where ID "
// })


app.listen(5000,()=>{
    console.log("server started");
});


