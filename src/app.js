const express=require('express');
const app=express();
const Student =require('./model/student');
const mongoose=require('mongoose');
const url=require('./config/config').mongoUrl;

port=process.env.PORT || 5000;

mongoose.connect(url,{useNewUrlParser:true}).then(()=>{
	console.log('Connteced To Database');
})
.catch(err=>console.log(err)
);
app.use(express.urlencoded({extended:false}));

app.use(express.json());
app.get('/',(req,res)=>{
Student.find({}).then((err,student)=>{
if(err){
	res.send(err);
}
res.json(student);
});
});

app.post('/add',(req,res)=>{
	Student.findOne({name:req.body.name},(err,student)=>{
		if(err){
			res.send(err);
			return;
		}
		if(student!=null){
			res.status(400).send({msg:"Student Already Exists"});
			return;
		}

		var student=new Student();
			student.name=req.body.name;
			student.rollno=req.body.rollno;
			student.branch=req.body.branch;
			student.mobile=req.body.mobile;

		

		student.save(function(err){
			if(err)
			{
				res.send(err);
				return;
			}
			res.json({msg:"Student Record Saved"});
		});
	});
});

app.put('/update',(req,res)=>{

	Student.findOne({rollno:req.body.rollno},(err,student)=>{
		if(err){
			res.send(err);
		}
		if(student==null){
			res.status(400).send({msg:"Student Do not Exist"});
			return ;
		}
			student.name=req.body.name;
			student.rollno=req.body.rollno;
			student.branch=req.body.branch;
			student.mobile=req.body.mobile;

		

		student.save(function(err){
			if(err)
			{
				res.send(err);
			}
			res.json({msg:"Student Record Updated Successfully"});
		});
	});
});

app.delete('/remove',(req,res)=>{
	Student.findOneAndDelete({rollno:req.body.rollno}).then((student)=>{

		if(student==null){
			res.status(404).send("Data Not Found");
			return;
			
		}
			res.json({msg:"Student Record Deleted Successfully"});
		});
	});



app.listen(port,()=>{
console.log(`Server Started  at ${port}`);
});

