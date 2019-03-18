# node-student-api

Clone package in any directory
=>install express and mongoose in that directory using terminal
 Run command: npm install express mongoose --save

Then run mongodb database present in the system. Download if not present...
Run command from directory terminal: node src/app.js

Use Postman:
    
1.GET request(retrieve):
      get(localhost:5000/)
      
2.POST request(add):
      post(localhost:5000/add)
         body->text/json
         {
         "name": "xyz",
         "rollno": 12345,
         "branch": "ABC",
         "mobile": 1234567890
         }
         
3.UPDATE request(update):
      put(localhost:5000/update)
      
      here rollno is primary key...
      
         body{
          "name": "xyzqwert",
         "rollno": 12345,
         "branch": "ABCfe",
         "mobile": 1267890
         
            }
            
            
4.DELETE request(delete):
      delete(localhost:5000/remove)
      body{
         "rollno": 12345
      }
