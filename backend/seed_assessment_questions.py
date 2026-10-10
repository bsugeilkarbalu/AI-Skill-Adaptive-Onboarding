from app.config.database import question_bank_collection

questions = [
    # PYTHON
    {"skill":"python","question":"Which keyword is used to define a function in Python?","options":["func","def","function","define"],"correct_answer":"def","level":"easy","score":1},
    {"skill":"python","question":"Which data type is mutable in Python?","options":["tuple","string","list","int"],"correct_answer":"list","level":"easy","score":1},
    {"skill":"python","question":"What is the output of len([1,2,3])?","options":["2","3","4","Error"],"correct_answer":"3","level":"easy","score":1},
    {"skill":"python","question":"Which block handles exceptions in Python?","options":["try-except","if-else","for-while","switch-case"],"correct_answer":"try-except","level":"medium","score":2},
    {"skill":"python","question":"What is lambda in Python?","options":["Anonymous function","Loop","Class","Package"],"correct_answer":"Anonymous function","level":"medium","score":2},

    # JAVA
    {"skill":"java","question":"Java is mainly which type of language?","options":["Procedural","Object Oriented","Markup","Query"],"correct_answer":"Object Oriented","level":"easy","score":1},
    {"skill":"java","question":"Which method is the entry point in Java?","options":["start()","main()","run()","init()"],"correct_answer":"main()","level":"easy","score":1},
    {"skill":"java","question":"Which keyword is used to inherit a class in Java?","options":["implements","extends","inherits","super"],"correct_answer":"extends","level":"easy","score":1},
    {"skill":"java","question":"Which concept allows method overloading?","options":["Polymorphism","Encapsulation","Abstraction","Inheritance only"],"correct_answer":"Polymorphism","level":"medium","score":2},
    {"skill":"java","question":"Which keyword prevents inheritance?","options":["static","final","private","void"],"correct_answer":"final","level":"medium","score":2},

    # C
    {"skill":"c","question":"Which symbol is used to end a statement in C?","options":[":",".",";","/"],"correct_answer":";","level":"easy","score":1},
    {"skill":"c","question":"Which function is used to print output in C?","options":["cout","print","printf","echo"],"correct_answer":"printf","level":"easy","score":1},
    {"skill":"c","question":"Which header file is used for printf?","options":["stdio.h","stdlib.h","math.h","string.h"],"correct_answer":"stdio.h","level":"easy","score":1},
    {"skill":"c","question":"Pointer stores what?","options":["Address","Value only","String only","Loop"],"correct_answer":"Address","level":"medium","score":2},
    {"skill":"c","question":"Which function is used to allocate memory dynamically?","options":["malloc","alloc","new","create"],"correct_answer":"malloc","level":"medium","score":2},

    # C++
    {"skill":"c++","question":"Which operator is used for output in C++?","options":["<<",">>","print","echo"],"correct_answer":"<<","level":"easy","score":1},
    {"skill":"c++","question":"Which feature supports object oriented programming?","options":["Class","Header","Loop","Array"],"correct_answer":"Class","level":"easy","score":1},
    {"skill":"c++","question":"Which keyword creates an object dynamically?","options":["malloc","new","create","make"],"correct_answer":"new","level":"medium","score":2},
    {"skill":"c++","question":"Which concept hides internal data?","options":["Encapsulation","Compilation","Iteration","Recursion"],"correct_answer":"Encapsulation","level":"medium","score":2},

    # JAVASCRIPT
    {"skill":"javascript","question":"Which keyword declares a block-scoped variable?","options":["var","let","int","define"],"correct_answer":"let","level":"easy","score":1},
    {"skill":"javascript","question":"Which method prints data in browser console?","options":["console.log()","print()","echo()","display()"],"correct_answer":"console.log()","level":"easy","score":1},
    {"skill":"javascript","question":"What is DOM?","options":["Document Object Model","Data Object Method","Digital Output Mode","Design Object Model"],"correct_answer":"Document Object Model","level":"easy","score":1},
    {"skill":"javascript","question":"Which function is used to parse JSON string?","options":["JSON.parse()","JSON.convert()","JSON.read()","JSON.stringify()"],"correct_answer":"JSON.parse()","level":"medium","score":2},
    {"skill":"javascript","question":"Promise is used for?","options":["Asynchronous operations","Styling","Database only","HTML tags"],"correct_answer":"Asynchronous operations","level":"medium","score":2},

    # SQL
    {"skill":"sql","question":"Which command is used to retrieve data?","options":["SELECT","INSERT","UPDATE","DELETE"],"correct_answer":"SELECT","level":"easy","score":1},
    {"skill":"sql","question":"Which clause filters rows?","options":["WHERE","ORDER BY","GROUP BY","JOIN"],"correct_answer":"WHERE","level":"easy","score":1},
    {"skill":"sql","question":"Which SQL command adds new records?","options":["ADD","INSERT","CREATE","PUSH"],"correct_answer":"INSERT","level":"easy","score":1},
    {"skill":"sql","question":"Which join returns matching records from both tables?","options":["INNER JOIN","LEFT JOIN","RIGHT JOIN","FULL JOIN"],"correct_answer":"INNER JOIN","level":"medium","score":2},
    {"skill":"sql","question":"Which function counts rows?","options":["COUNT()","SUM()","AVG()","TOTAL()"],"correct_answer":"COUNT()","level":"medium","score":2},

    # HTML
    {"skill":"html","question":"HTML stands for?","options":["HyperText Markup Language","HighText Machine Language","Hyperlink Mark Language","Home Tool Markup Language"],"correct_answer":"HyperText Markup Language","level":"easy","score":1},
    {"skill":"html","question":"Which tag is used for paragraph?","options":["<p>","<h1>","<div>","<span>"],"correct_answer":"<p>","level":"easy","score":1},
    {"skill":"html","question":"Which tag is used to create a link?","options":["<a>","<link>","<href>","<url>"],"correct_answer":"<a>","level":"easy","score":1},
    {"skill":"html","question":"Which attribute gives image path?","options":["src","href","alt","path"],"correct_answer":"src","level":"easy","score":1},

    # CSS
    {"skill":"css","question":"CSS is used for?","options":["Styling web pages","Database","Server logic","Machine learning"],"correct_answer":"Styling web pages","level":"easy","score":1},
    {"skill":"css","question":"Which property changes text color?","options":["color","font","background","text"],"correct_answer":"color","level":"easy","score":1},
    {"skill":"css","question":"Which property changes background color?","options":["background-color","color","bg","background-image"],"correct_answer":"background-color","level":"easy","score":1},
    {"skill":"css","question":"Flexbox is mainly used for?","options":["Layout alignment","Database connection","API testing","Authentication"],"correct_answer":"Layout alignment","level":"medium","score":2},

    # REACT
    {"skill":"react","question":"React is used mainly for?","options":["Frontend UI","Database","Operating System","Networking"],"correct_answer":"Frontend UI","level":"easy","score":1},
    {"skill":"react","question":"Which hook manages state?","options":["useState","useEffect","useRoute","useData"],"correct_answer":"useState","level":"easy","score":1},
    {"skill":"react","question":"Which hook handles side effects?","options":["useEffect","useState","useMemo","useRef"],"correct_answer":"useEffect","level":"medium","score":2},
    {"skill":"react","question":"JSX is similar to?","options":["HTML inside JavaScript","SQL query","Python syntax","CSS file"],"correct_answer":"HTML inside JavaScript","level":"easy","score":1},

    # FASTAPI
    {"skill":"fastapi","question":"FastAPI is built using which language?","options":["Python","Java","PHP","C#"],"correct_answer":"Python","level":"easy","score":1},
    {"skill":"fastapi","question":"Which server commonly runs FastAPI?","options":["Uvicorn","Apache","Tomcat","XAMPP"],"correct_answer":"Uvicorn","level":"easy","score":1},
    {"skill":"fastapi","question":"Which decorator creates GET API?","options":["@app.get()","@app.post()","@api.route()","@get.app()"],"correct_answer":"@app.get()","level":"easy","score":1},
    {"skill":"fastapi","question":"Swagger docs URL in FastAPI is usually?","options":["/docs","/swagger-ui","/api-doc","/help"],"correct_answer":"/docs","level":"easy","score":1},

    # MONGODB
    {"skill":"mongodb","question":"MongoDB is which type of database?","options":["NoSQL","Relational","Spreadsheet","Graph only"],"correct_answer":"NoSQL","level":"easy","score":1},
    {"skill":"mongodb","question":"MongoDB stores data as?","options":["Documents","Rows","Cells","Pages"],"correct_answer":"Documents","level":"easy","score":1},
    {"skill":"mongodb","question":"Which method inserts one document?","options":["insert_one()","add_one()","push_one()","save_one()"],"correct_answer":"insert_one()","level":"medium","score":2},
    {"skill":"mongodb","question":"Which method finds one document?","options":["find_one()","select_one()","get_one()","fetch_one()"],"correct_answer":"find_one()","level":"medium","score":2},

    # MACHINE LEARNING
    {"skill":"machine learning","question":"Machine Learning is a subset of?","options":["Artificial Intelligence","Database","Networking","Web Design"],"correct_answer":"Artificial Intelligence","level":"easy","score":1},
    {"skill":"machine learning","question":"Which algorithm is used for classification?","options":["Decision Tree","HTML","CSS","MongoDB"],"correct_answer":"Decision Tree","level":"easy","score":1},
    {"skill":"machine learning","question":"Training data is used to?","options":["Teach the model","Style webpage","Store files","Create API route"],"correct_answer":"Teach the model","level":"easy","score":1},
    {"skill":"machine learning","question":"Overfitting means?","options":["Model performs well on training but poorly on new data","Model has no data","Database error","Frontend issue"],"correct_answer":"Model performs well on training but poorly on new data","level":"medium","score":2},

    # NODEJS
    {"skill":"nodejs","question":"Node.js is used to run JavaScript where?","options":["Server side","Only browser","Database only","CSS file"],"correct_answer":"Server side","level":"easy","score":1},
    {"skill":"nodejs","question":"Which package manager is commonly used with Node.js?","options":["npm","pip","composer","maven"],"correct_answer":"npm","level":"easy","score":1},
    {"skill":"nodejs","question":"Express.js is used for?","options":["Backend web framework","CSS styling","Database table","Image editing"],"correct_answer":"Backend web framework","level":"medium","score":2},

    # DJANGO / FLASK
    {"skill":"django","question":"Django is a framework for which language?","options":["Python","Java","C","PHP"],"correct_answer":"Python","level":"easy","score":1},
    {"skill":"django","question":"Django follows which architecture pattern?","options":["MVT","MVC only","MVVM","None"],"correct_answer":"MVT","level":"medium","score":2},
    {"skill":"flask","question":"Flask is a lightweight framework in?","options":["Python","Java","C++","Ruby"],"correct_answer":"Python","level":"easy","score":1},

    # DATA SCIENCE
    {"skill":"pandas","question":"Pandas is mainly used for?","options":["Data analysis","Web styling","Authentication","Networking"],"correct_answer":"Data analysis","level":"easy","score":1},
    {"skill":"numpy","question":"NumPy is mainly used for?","options":["Numerical computing","Frontend UI","Database management","API routing"],"correct_answer":"Numerical computing","level":"easy","score":1},
    {"skill":"opencv","question":"OpenCV is used for?","options":["Computer vision","Database","Web hosting","Authentication"],"correct_answer":"Computer vision","level":"easy","score":1},
]

question_bank_collection.delete_many({})
question_bank_collection.insert_many(questions)

print(f"{len(questions)} assessment questions inserted successfully")