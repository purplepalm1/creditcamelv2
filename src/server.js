
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const { spawn } = require('child_process');

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Purpleroot1123',
    database: 'creditcamel'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL database connected!');
});

app.post('/submit-form', (req, res) => {
    const {
        firstname,
        lastname,
        age,
        occupation,
        email,
        annualincome,
        numbankaccounts,
        numcreditcards,
        numloans,
        intrate,
        emi,
        outstandingdebt,
        monthlybal,
    } = req.body;

    const sql = 'INSERT INTO user_info (firstname, lastname, age, occupation, email, annualincome, Num_Bank_Accounts, Num_Credit_Card, Num_of_Loan, Interest_Rate, Total_EMI_per_month, Outstanding_Debt, Monthly_Balance) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(sql, [firstname, lastname, age, occupation, email, annualincome, numbankaccounts, numcreditcards, numloans, intrate, emi, outstandingdebt, monthlybal], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }

        console.log('Form data inserted into the database.');

        // Now execute the Python script
        const pythonProcess = spawn('C:\\Users\\Forest\\OneDrive\\Desktop\\Main Drive\\WPI\\CS 588 - Capstone\\front_end_credit_camel\\creditcamel\\src\\venv\\Scripts\\python.exe', ['test2.py', JSON.stringify(req.body)]);


        pythonProcess.stdout.on('data', (data) => {
            const predictedScore = parseFloat(data.toString());
            res.status(200).json({ predictedScore });
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(`Python script error: ${data}`);
            res.status(500).send('Internal Server Error');
        });


    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});









