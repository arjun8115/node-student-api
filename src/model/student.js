const mongoose=require('mongoose');
const StudentSchema=new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	rollno:{
		type:Number,
		required:true
	},
	branch:{
		type:String,
		required:true
	},
	mobile:{
		type:Number,
		required:true,
		default:00000
	}
}); 

const Student=mongoose.model("Student",StudentSchema);
module.exports=Student;